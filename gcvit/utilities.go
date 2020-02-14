package gcvit

/*
	General-use functions for the gcvit server
*/

import (
	"compress/gzip"
	"fmt"
	"github.com/awilkey/bio-format-tools-go/gff"
	"github.com/awilkey/bio-format-tools-go/vcf"
	"github.com/spf13/viper"
	"os"
	"sort"
	"strconv"
	"strings"
)

var source string
var binSize uint64

// experiment that stores all the allowed experiments
var experiments map[string]DataFiles
var privateExp map[string]map[string]DataFiles

//init does initialization, only runs first time gcvit is called
func init() {
	experiments = make(map[string]DataFiles)
	privateExp = make(map[string]map[string]DataFiles)
}

//PopulateExperiments gets the public list of available experiments
func PopulateExperiments() error {
	var C map[string]interface{}
	_ = viper.Unmarshal(&C)
	for key := range C {
		if key != "server" && key != "users" {
			filecfg := viper.Sub(key) // viper is assumed to have the config read in at server startup or file edit
			gz := strings.Contains(filecfg.GetString("location"), ".gz")
			gt, err := PopulateGenotype(filecfg.GetString("location"), gz)
			if err != nil {
				return err
			}
			if restricted := filecfg.GetStringSlice("restricted"); len(restricted) != 0 {
				for _, v := range restricted {
					if privateExp[v] == nil {
						privateExp[v] = make(map[string]DataFiles)
					}
					privateExp[v][key] = DataFiles{
						Name:      filecfg.GetString("name"),
						Location:  filecfg.GetString("location"),
						Format:    filecfg.GetString("format"),
						Gzip:      gz,
						Genotypes: gt,
					}
				}
			} else {
				experiments[key] = DataFiles{
					Name:      filecfg.GetString("name"),
					Location:  filecfg.GetString("location"),
					Format:    filecfg.GetString("format"),
					Gzip:      gz,
					Genotypes: gt,
				}
			}
		}
	}

	return nil
}

//PopulateGenotype populates the GT values for a given experiment
func PopulateGenotype(loc string, gz bool) ([]string, error) {
	read, err := ReadFile(loc, gz)
	if err != nil {
		return nil, fmt.Errorf("problem in vcf.NewReader(): %s", err)
	}
	if read != nil {
		var values []string
		for key := range read.Header.Genotypes {
			values = append(values, key)
		}
		sort.Strings(values)
		return values, nil
	}
	return make([]string, 0), nil
}

// Read in the passed file as a VCF
func ReadFile(loc string, gz bool) (*vcf.Reader, error) {
	f, err := os.Open(loc)
	if err != nil {
		return nil, fmt.Errorf("problem in os.Open: %s", err)
	}
	if gz {
		contents, err := gzip.NewReader(f)
		if err != nil {
			return nil, fmt.Errorf("problem in gzip.NewReader(): %s", err)
		}
		return vcf.NewReader(contents)
	} else {
		return vcf.NewReader(f)
	}
}

func SetDefaults() {
	var C map[string]interface{}
	_ = viper.Unmarshal(&C)
	server := viper.Sub("server")
	source = server.GetString("source")
	binSize, _ = strconv.ParseUint(server.GetString("binSize"), 10, 64)
}

// printGffLine writes trio of formatted gffLines (same, different, total) to the passed writer
func printGffLine(writer *gff.Writer, contig string, stepCt int, start, end uint64, sameCtr, diffCtr, totalCtr map[string]int) { //in go if no type, share first type encountered to the right
	gffLine := gff.Feature{
		Seqid:      contig,
		Source:     source, //source is set when starting server/when config file changes
		Type:       "same",
		Start:      start,
		End:        end,
		Score:      gff.MissingScoreField,
		Strand:     "+",
		Phase:      gff.MissingPhaseField,
		Attributes: map[string]string{"ID": fmt.Sprintf("%s.%s.%d", contig, "same", stepCt)},
	}

	for class, val := range sameCtr {
		gffLine.Attributes[class] = strconv.Itoa(val)
	}
	writer.WriteFeature(&gffLine)

	gffLine.Type = "diff"
	gffLine.Attributes["ID"] = fmt.Sprintf("%s.%s.%d", contig, "diff", stepCt)
	for class, val := range diffCtr {
		gffLine.Attributes[class] = strconv.Itoa(val)
	}
	writer.WriteFeature(&gffLine)

	gffLine.Type = "total"
	gffLine.Attributes["ID"] = fmt.Sprintf("%s.%s.%d", contig, "total", stepCt)
	for class, val := range totalCtr {
		gffLine.Attributes[class] = strconv.Itoa(val)
	}
	writer.WriteFeature(&gffLine)
}
