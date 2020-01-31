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
func PopulateExperiments() error {
	var C map[string]interface{}
	_ = viper.Unmarshal(&C)
	for key := range C {
		if key != "server" {
			filecfg := viper.Sub(key) // viper is assumed to have the config read in at server startup or file edit
			gz := strings.Contains(filecfg.GetString("location"), ".gz")
			gt, err := PopulateGenotype(filecfg.GetString("location"), gz)
			if err != nil {
				return err
			}
			experiments[key] = DataFiles{
				Name:      filecfg.GetString("name"),
				Location:  filecfg.GetString("location"),
				Format:    filecfg.GetString("format"),
				Gzip:      gz,
				Genotypes: gt,
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
