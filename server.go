package main

import (
	"bytes"
	"compress/gzip"
	"fmt"
	"github.com/awilkey/bio-format-tools-go/gff"	// Gff3 read/write
	"github.com/awilkey/bio-format-tools-go/vcf"	// vcf read/write
	"github.com/fsnotify/fsnotify"
	"github.com/go-ozzo/ozzo-routing"				// service router
	"github.com/go-ozzo/ozzo-routing/access"
	"github.com/go-ozzo/ozzo-routing/content"
	"github.com/go-ozzo/ozzo-routing/fault"
	"github.com/go-ozzo/ozzo-routing/file"
	"github.com/go-ozzo/ozzo-routing/slash"
	"github.com/spf13/viper"						// configuration reader
	"log"
	"math"
	"net/http"
	"os"
	"sort"
	"strconv"
	"strings"
)

// Data structure for reading in data source object
type dataFiles struct {
	Name      string
	Key       string
	Location  string
	Format    string
	Gzip      bool
	Genotypes []string
}

type expData struct {
	Value string `json:"value"`
	Label string `json:"label"`
}

func main() {
	experiments := make(map[string]dataFiles) //load initial experiment kv store
	// configure and read in yaml
	viper.SetConfigName("assetconfig")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("./config")
	viper.SetDefault("server", map[string]string{"port": "8080", "apiOnly": "false"})
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("problem reading in assetconfig: %s \n", err))
	}
	viper.WatchConfig() // watch for changes so server doesn't need to reset when changed
	viper.OnConfigChange(func(e fsnotify.Event) {
		populateExperiments(experiments)
	})

	fmt.Println("Starting Server on port ", viper.Sub("server").GetString("port"))
	// configure router defaults
	router := routing.New()
	router.Use(
		// all these handlers are shared by every route
		access.Logger(log.Printf),
		slash.Remover(http.StatusMovedPermanently),
		fault.Recovery(log.Printf),
	)

	// serve RESTful APIs
	api := router.Group("/api")
	api.Use(
		// these handlers are shared by the routes in the api group only
		content.TypeNegotiator(content.JSON),
	)
	// list the available experimental datasets
	api.Get("/experiment", func(c *routing.Context) error {

		if len(experiments) == 0 {
			populateExperiments(experiments)
		}

		opts := make([]expData, len(experiments))
		i := 0
		for key := range experiments {
			exp := expData{Value: key, Label: experiments[key].Name}
			opts[i] = exp
			i++
		}
		return c.Write(opts)
	})
	//list the available samples from the VCF header
	api.Get("/experiment/<exp>", func(c *routing.Context) error {
		exp := c.Param("exp")
		if len(experiments) == 0 {
			populateExperiments(experiments)
		}
		gt := make([]expData, len(experiments[exp].Genotypes))
		for i, v := range experiments[exp].Genotypes {
			gt[i] = expData{Value: v, Label: v}
		}
		return c.Write(gt)
	})
	//vcf -> gff
	api.Post("/generateGff", func(c *routing.Context) error {

		// Parse Request
		req := &struct {
			Ref     string
			Variant []string
			Bin     int
		}{}

		_ = c.Read(&req)

		ref := strings.Split(req.Ref, ":")
		vnt := make(map[string][]string, len(req.Variant))
		vntOrder := make(map[int][]string, len(req.Variant))
		for i := range req.Variant {
			vt := strings.Split(req.Variant[i], ":")
			if _, ok := vnt[vt[0]]; !ok {
				vnt[vt[0]] = []string{vt[1]}
			} else {
				vnt[vt[0]] = append(vnt[vt[0]], vt[1])
			}
			vntOrder[i] = []string{vt[0], vt[1]}
		}

		r, err := readFile(experiments[ref[0]].Location, experiments[ref[0]].Gzip)
		if err != nil {
			panic(fmt.Errorf("problem reading reference genotype's file: %s \n", err))
		}

		var b bytes.Buffer
		writer, err := gff.NewWriter(&b)

		if err != nil {
			panic(fmt.Errorf("problem opening gff writer: %s \n", err))
		}

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

		var feat *vcf.Feature
		var readErr error
		var contig string
		var stepSize int
		if req.Bin > 0 {
			stepSize = req.Bin
		} else {
			stepSize = 500000
		}
		stepCt := 0
		stepVal := 0

		for readErr == nil {
			feat, readErr = r.Read()
			if feat != nil {
				gt, _ := feat.SingleGenotype(ref[1], r.Header.Genotypes)
				rt, _ := feat.MultipleGenotypes(vnt[ref[0]], r.Header.Genotypes)
				//reset contig based features, assuming that file is sorted by contig and ascending position
				// when contig changes or you step outside of current bin
				if feat.Pos > uint64(stepCt*stepVal) || contig != feat.Chrom {
					if stepCt > 0 {
						end := uint64(stepCt) * uint64(stepVal)
						if ctg[contig] > 0 && end > uint64(ctg[contig]) {
							end = uint64(ctg[contig])
						}
						gffLine := gff.Feature{
							Seqid:      contig,
							Source:     "soybase",
							Type:       "same",
							Start:      uint64((stepCt-1)*stepVal + 1),
							End:        end,
							Score:      gff.MissingScoreField,
							Strand:     "+",
							Phase:      gff.MissingPhaseField,
							Attributes: map[string]string{"ID": fmt.Sprintf("%s.%d", "same", stepCt)},
						}
						for class, val := range sameCtr {
							gffLine.Attributes[class] = strconv.Itoa(val)
						}
						writer.WriteFeature(&gffLine)

						gffLine.Type = "diff"
						gffLine.Attributes["ID"] = fmt.Sprintf("%s.%d", "diff", stepCt)
						for class, val := range diffCtr {
							gffLine.Attributes[class] = strconv.Itoa(val)
						}
						writer.WriteFeature(&gffLine)

						gffLine.Type = "total"
						gffLine.Attributes["ID"] = fmt.Sprintf("%s.%d", "total", stepCt)
						for class, val := range totalCtr {
							gffLine.Attributes[class] = strconv.Itoa(val)
						}
						writer.WriteFeature(&gffLine)

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
						stepCt = (int(feat.Pos) / stepSize) + 1
					}

					if contig != feat.Chrom {
						contig = feat.Chrom
						if ctg[contig] > 0 {
							stepVal = int(float64(ctg[contig]) / math.Ceil(float64(ctg[contig])/float64(stepSize)))
						} else {
							stepVal = stepSize
						}
						stepCt = 1
					}
				}
				gFields := gt.Fields["GT"]
				if gFields != "./." && gFields != ".|." {
					totalCtr["value"]++
					totalCtr[ref[1]]++

					for i := range rt {
						rFields := rt[i].Fields["GT"]
						id := rt[i].Id
						if rFields == "./." || rFields == ".|." {
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

		end := stepCt * stepVal

		if ctg[contig] > 0 && end > ctg[contig] {
			end = ctg[contig]
		}

		gffLine := gff.Feature{
			Seqid:      contig,
			Source:     "soybase",
			Type:       "same",
			Start:      uint64((stepCt-1)*stepVal + 1),
			End:        uint64(end),
			Score:      gff.MissingScoreField,
			Strand:     "+",
			Phase:      gff.MissingPhaseField,
			Attributes: map[string]string{"ID": fmt.Sprintf("%s.%d", "same", stepCt)},
		}

		for class, val := range sameCtr {
			gffLine.Attributes[class] = strconv.Itoa(val)
		}
		writer.WriteFeature(&gffLine)

		gffLine.Type = "diff"
		gffLine.Attributes["ID"] = fmt.Sprintf("%s.%d", "diff", stepCt)
		for class, val := range diffCtr {
			gffLine.Attributes[class] = strconv.Itoa(val)
		}
		writer.WriteFeature(&gffLine)

		gffLine.Type = "total"
		gffLine.Attributes["ID"] = fmt.Sprintf("%s.%d", "total", stepCt)
		for class, val := range totalCtr {
			gffLine.Attributes[class] = strconv.Itoa(val)
		}
		writer.WriteFeature(&gffLine)

		c.SetDataWriter(&content.HTMLDataWriter{})
		return c.Write(b.String())
	})

	var serverSettings = viper.Sub("server")

	if !serverSettings.GetBool("apiOnly") {

		// serve index file
		router.Get("/", file.Content("ui/build/index.html"))
		// serve experiments under the "ui" subdirectory
		router.Get("/*", file.Server(file.PathMap{
			"/": "/ui/build/",
		}))
	}

	//setup default path and open port
	http.Handle("/", router)
	s := []string{":",serverSettings.GetString("port")}
	var port = strings.Join(s,"")

	_ = http.ListenAndServe(port, nil)
}

func populateExperiments(files map[string]dataFiles) {
	var C map[string]interface{}
	_ = viper.Unmarshal(&C)
	for key := range C {
		if key != "server" {
			filecfg := viper.Sub(key)
			gz := strings.Contains(filecfg.GetString("location"), ".gz")
			files[key] = dataFiles{
				Name:      filecfg.GetString("name"),
				Location:  filecfg.GetString("location"),
				Format:    filecfg.GetString("format"),
				Gzip:      gz,
				Genotypes: populateGenotype(filecfg.GetString("location"), gz),
			}
		}
	}
}

func populateGenotype(loc string, gz bool) []string {
	read, err := readFile(loc, gz)
	if err != nil {
		panic(fmt.Errorf("problem in vcf.NewReader(): %s \n", err))
	}
	if read != nil {
		var values []string
		for key := range read.Header.Genotypes {
			values = append(values, key)
		}
		sort.Strings(values)
		return values
	}
	return make([]string, 0)
}

func readFile(loc string, gz bool) (*vcf.Reader, error) {
	f, err := os.Open(loc)
	if err != nil {
		panic(fmt.Errorf("problem in os.Open: %s \n", err))
	}
	if gz {
		contents, err := gzip.NewReader(f)
		if err != nil {
			panic(fmt.Errorf("problem in gzip.NewReader(): %s \n", err))
		}
		return vcf.NewReader(contents)
	} else {
		return vcf.NewReader(f)
	}
}
