package gcvit

/*
	General-use functions for the gcvit server
*/

import (
	"compress/gzip"
	"fmt"
	"github.com/awilkey/bio-format-tools-go/vcf"
	"github.com/spf13/viper"
	"os"
	"sort"
	"strings"
)

//PopulateExperiments gets the public list of available experiments
func PopulateExperiments() {
	var C map[string]interface{}
	_ = viper.Unmarshal(&C)
	for key := range C {
		if key != "server" {
			filecfg := viper.Sub(key) // viper is assumed to have the config read in at server startup or file edit
			gz := strings.Contains(filecfg.GetString("location"), ".gz")
			experiments[key] = DataFiles{
				Name:      filecfg.GetString("name"),
				Location:  filecfg.GetString("location"),
				Format:    filecfg.GetString("format"),
				Gzip:      gz,
				Genotypes: PopulateGenotype(filecfg.GetString("location"), gz),
			}
		}
	}
}

//PopulateGenotype populates the GT values for a given experiment
func PopulateGenotype(loc string, gz bool) []string {
	read, err := ReadFile(loc, gz)
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

// Read in the passed file as a VCF
func ReadFile(loc string, gz bool) (*vcf.Reader, error) {
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
