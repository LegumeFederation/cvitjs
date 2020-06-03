// package gcvit provides handlers for the gcvit server
// API routes
package gcvit

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/awilkey/bio-format-tools-go/gff"
	"github.com/awilkey/bio-format-tools-go/vcf"
	"github.com/valyala/fasthttp"
	"strconv"
	"strings"
	"time"
)

// GetExperiments returns a JSON object that represents all the currently loaded datasets
func GetExperiments(ctx *fasthttp.RequestCtx) {
	//start time for logging
	start := time.Now()
	// Populate experiments if it hasn't been already
	if len(experiments) == 0 {
		err := PopulateExperiments()
		if err != nil {
			ctx.Logger().Printf("Error: Problem populating experiments: %s", err)
			ctx.Error("Problem populating experiments.", fasthttp.StatusInternalServerError)
		}
	}

	//Iterate through experiments and build response
	opts := make([]ExpData, len(experiments))
	i := 0
	for key := range experiments {
		exp := ExpData{Value: key, Label: experiments[key].Name}
		opts[i] = exp
		i++
	}

	//Add any datasets available from authentication state
	if authState := ctx.UserValue("auth"); authState != nil {
		// extend slice
		auth := (authState).(string)
		nOpts := make([]ExpData, len(experiments)+len(privateExp[auth]))
		copy(nOpts, opts)
		opts = nOpts
		for key := range privateExp[auth] {
			exp := ExpData{Value: key, Label: privateExp[auth][key].Name}
			opts[i] = exp
			i++
		}
	}

	//Response
	optsJson, err := json.Marshal(opts)
	if err != nil {
		ctx.Logger().Printf("Error: Problem converting experiments to JSON: %s", err)
		ctx.Error("Problem getting experiments.", fasthttp.StatusInternalServerError)
		return
	}
	ctx.SetContentType("application/json; charset=utf8")
	fmt.Fprintf(ctx, "%s", optsJson)
	//Log response time
	ctx.Logger().Printf("%dns", time.Now().Sub(start).Nanoseconds())
}

// GetExperimet returns a JSON representation of all the passed experiment's GT values
func GetExperiment(ctx *fasthttp.RequestCtx) {
	//Start time for logging
	start := time.Now()
	//Parse arguement from path (/api/experiment/:exp
	exp := ctx.UserValue("exp").(string)
	//Populate experiments if it hasn't been populated already
	if len(experiments) == 0 {
		err := PopulateExperiments()
		if err != nil { //log errors opening provided files for debugging later
			ctx.Logger().Printf("Error: Problem populating experiments: %s", err)
			ctx.Error("Problem populating experiments.", fasthttp.StatusInternalServerError)
		}
	}

	// check if experiment is available due to auth state
	var expSet DataFiles
	if experiments[exp].Genotypes != nil {
		expSet = experiments[exp]
	} else if authState := ctx.UserValue("auth"); authState != nil && privateExp[(authState).(string)][exp].Genotypes != nil {
		expSet = privateExp[(authState).(string)][exp]
	} else {
		ctx.Error("Experiment Not Available", fasthttp.StatusForbidden)
		return
	}

	//Iterate through passed experiment and build response of GT headers
	gt := make([]ExpData, len(expSet.Genotypes))
	for i, v := range expSet.Genotypes {
		gt[i] = ExpData{Value: v, Label: v}
	}

	//Response
	gtJson, err := json.Marshal(gt)
	if err != nil {
		ctx.Logger().Printf("Error: Problem converting genotypes to JSON: %s", err)
		ctx.Error("Problem populating experiment", fasthttp.StatusInternalServerError)
		return
	}
	ctx.SetContentType("application/json; charset=utf8")
	fmt.Fprintf(ctx, "%s", gtJson)
	//Log response time
	ctx.Logger().Printf("%dns", time.Now().Sub(start).Nanoseconds())
}

// GenerateGFF returns a gff from one or more provided GT fields in the vcf
func GenerateGFF(ctx *fasthttp.RequestCtx) {
	// Log request received
	ctx.Logger().Printf("Begin request for: %s", ctx.PostArgs())
	startT := time.Now()

	// Struct for holding Post Request
	req := &struct {
		Ref     string		//reference GT
		Variant []string	//slice of comparison GTs
		Bin     uint64		//bin size in bases
	}{}

	// Parse reference, both ref and variant are in the form "<exp>:<gt>"
	// Peek is used here, as current GCViT only supports a single reference
	req.Ref = string(ctx.PostArgs().Peek("Ref"))
	ref := strings.Split(req.Ref, ":")
	// Error is no ref is passed, prevents server crash on empty or malformed request.
	if len(ref) != 2 || ref[1] == "" {
		ctx.Error("Page Not Found", fasthttp.StatusNotFound)
		ctx.Logger().Printf("Error: No reference genotype selected  \n")
		return
	}

	// Parse variant(s) (Peek is single value, peek multi for array)
	vnts := ctx.PostArgs().PeekMulti("Variant")
	for _, v := range vnts {
		req.Variant = append(req.Variant, string(v))
	}
	vnt := make(map[string][]string, len(req.Variant))
	// save order, as most go versions iterate over hashes randomly by design.
	vntOrder := make(map[int][]string, len(req.Variant))
	for i := range req.Variant { // Parse vnts to useable slices
		vt := strings.Split(req.Variant[i], ":")
		if len(vt) != 2 || vt[1] == "" { //ignore empty variant
			continue
		}
		if _, ok := vnt[vt[0]]; !ok {
			vnt[vt[0]] = []string{vt[1]}
		} else {
			vnt[vt[0]] = append(vnt[vt[0]], vt[1])
		}
		vntOrder[i] = []string{vt[0], vt[1]}
	}

	// Parse bin size if available, if not passed, default to config.binSize (500000) bases
	if bSize, _ := strconv.ParseUint(string(ctx.PostArgs().Peek("Bin")), 10, 64); bSize > 0 {
		req.Bin = bSize
	} else {
		req.Bin = binSize
	}


	// Populate experiment if possible due to auth state, it should be possible if having got
	// this far, but still check for security reasons.
	var expSet DataFiles
	if experiments[ref[0]].Location != "" {
		expSet = experiments[ref[0]]
	} else if authState := ctx.UserValue("auth"); authState != nil && privateExp[(authState).(string)][ref[0]].Location != "" {
		expSet = privateExp[(authState).(string)][ref[0]]
	} else {
		ctx.Error("Experiment Not Available", fasthttp.StatusForbidden)
		ctx.Logger().Printf("Cancel request for %s - %dns - Invalid credentials or non-extant dataset", ctx.PostArgs(), time.Now().Sub(startT).Nanoseconds())
		return
	}

	// Read in file as needed.
	r, err := ReadFile(expSet.Location, expSet.Gzip)
	if err != nil {
		ctx.Error("Problem reading reference genotype's file: %s \n", fasthttp.StatusInternalServerError)
		ctx.Logger().Printf("Error: Problem reading reference genotype's file: %s", err)
		return
	}

	// Build byte buffer for writing resulting gff
	var b bytes.Buffer
	writer, err := gff.NewWriter(&b)

	if err != nil {
		ctx.Error("Problem opening gff writer: %s \n", fasthttp.StatusInternalServerError)
		ctx.Logger().Printf("Error: Problem opening gff writer: %s", err)
		return
	}

	// Setup variables for storing values when parsing vcf -> gff
	ctg := make(map[string]int)
	for i := range r.Header.Contigs {
		ctgLen, _ := strconv.Atoi(r.Header.Contigs[i].Optional["length"])
		ctg[r.Header.Contigs[i].Id] = ctgLen
	}

	sameCtr := make(map[string]int, len(vnt[ref[0]])+1)
	diffCtr := make(map[string]int, len(vnt[ref[0]])+1)
	totalCtr := make(map[string]int, len(vnt[ref[0]])+3)
	totalCtr[ref[1]] = 0
	totalCtr["undefined"] = 0
	totalCtr["value"] = 0
	sameCtr["value"] = 0
	diffCtr["value"] = 0

	for i := range vnt[ref[0]] {
		gt := vnt[ref[0]][i]
		sameCtr[gt] = 0
		diffCtr[gt] = 0
		totalCtr[gt] = 0
	}

	var feat *vcf.Feature // line of vcf file
	var readErr error
	var contig string // individual contig
	var stepSize uint64 // next bin step
	if source == "" || binSize == 0 {
		SetDefaults() // if somehow the source hasn't been set yet
	}
	if req.Bin > 0 {
		stepSize = req.Bin
	} else {
		stepSize = binSize
	}

	start := uint64(1) //vcf files are 1-based
	end := start + stepSize //end of current bin
	stepCt := 0 //running count of bins

	// Read vcf file for conversion
	for readErr == nil {
		feat, readErr = r.Read()
		if feat != nil {
			gt, _ := feat.SingleGenotype(ref[1], r.Header.Genotypes)
			rt, _ := feat.MultipleGenotypes(vnt[ref[0]], r.Header.Genotypes)
			if stepCt == 0 {
				contig = feat.Chrom
			}
			// reset contig based features, assuming that file is sorted by contig and ascending position
			// when contig changes or you step outside of current bin
			for feat.Pos > end || contig != feat.Chrom {
				if ctg[contig] > 0 && end > uint64(ctg[contig]) {
					end = uint64(ctg[contig])
				}

				printGffLine(writer, contig, stepCt, start, end, sameCtr, diffCtr, totalCtr)

				start = end + 1
				end = start + stepSize

				//Reset counters
				for val := range totalCtr {
					totalCtr[val] = 0
				}
				for val := range sameCtr {
					sameCtr[val] = 0
				}
				for val := range diffCtr {
					diffCtr[val] = 0
				}
				stepCt++

				if contig != feat.Chrom {
					contig = feat.Chrom
					start = 1
					end = start + stepSize
					stepCt = 1
				}
			}
			// Read and coutn GT fields as compared to reference
			gFields := gt.Fields["GT"]
			if gFields != "./." && gFields != ".|." {
				totalCtr["value"]++
				totalCtr[ref[1]]++

				for i := range rt {
					rFields := rt[i].Fields["GT"]
					id := rt[i].Id
					if rFields == "./." || rFields == ".|." { // allow for undefined fields
						totalCtr["undefined"]++
					} else if gFields == rFields {
						sameCtr[id]++
						sameCtr["value"]++
						totalCtr[id]++
					} else {
						diffCtr[id]++
						diffCtr["value"]++
						totalCtr[id]++
					}
				}
			}
		}
	}

	if ctg[contig] > 0 && end > uint64(ctg[contig]) {
		end = uint64(ctg[contig])
	}

	printGffLine(writer, contig, stepCt, start, end, sameCtr, diffCtr, totalCtr)

	//send build gff as response
	ctx.SetContentType("text/plain; charset=utf8")
	fmt.Fprintf(ctx, "%s", b.String())

	//Log completed request
	ctx.Logger().Printf("Return request for %s - %dns", ctx.PostArgs(), time.Now().Sub(startT).Nanoseconds())
}
