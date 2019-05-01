package main

import (
	"bytes"
	"compress/gzip"
	"fmt"
	"github.com/awilkey/bio-format-tools-go/gff"
	"github.com/awilkey/bio-format-tools-go/vcf"
	"github.com/go-ozzo/ozzo-routing"
	"github.com/go-ozzo/ozzo-routing/access"
	"github.com/go-ozzo/ozzo-routing/content"
	"github.com/go-ozzo/ozzo-routing/fault"
	"github.com/go-ozzo/ozzo-routing/file"
	"github.com/go-ozzo/ozzo-routing/slash"
	"github.com/spf13/viper"
	"log"
	"net/http"
	"os"
	"sort"
	"strings"
)

type dataFiles struct {
	Name      string
	Location  string
	Format    string
	Gzip      bool
	Genotypes []string
}

func main() {
	experiments := make(map[string]dataFiles)
	viper.SetConfigName("assetconfig")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("./config")
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("problem reading in assetconfig: %s \n", err))
	}

	fmt.Println(viper.Get("experiments"))

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
	api.Get("/experiment", func(c *routing.Context) error {
		if len(experiments) == 0 {
			populateExperiments(experiments)
		}
		opts := make([]string, len(experiments))
		i := 0
		for key := range experiments {
			opts[i] = key
			i++
		}
		return c.Write(opts)
	})
	api.Get("/experiment/<exp>", func(c *routing.Context) error {
		exp := c.Param("exp")
		if len(experiments) == 0 {
			populateExperiments(experiments)
		}
		return c.Write(experiments[exp].Genotypes)
	})
	api.Post("/generateGff", func(c *routing.Context) error {
		// Parse Request
		req := &struct {
			Ref     string
			Variant []string
		}{}

		_ = c.Read(&req)

		ref := strings.Split(req.Ref, ":")
		fmt.Println(ref, experiments[ref[0]].Location)
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
		var feat *vcf.Feature
		var readErr error
		for readErr == nil {
			feat, readErr = r.Read()
			if feat != nil {
				gt, _ := feat.SingleGenotype(ref[1], r.Header.Genotypes)
				rt, _ := feat.MultipleGenotypes(vnt[ref[0]], r.Header.Genotypes)
				for i := range rt {
					sim := "same"
					for j := range gt.GT {
						if rt[i].GT[j] != gt.GT[j] {
							sim = "diff"
							break
						}
					}
					phase := int8(0)
					if rt[i].PhasedGT {
						phase = 1
					}
					gffLine := gff.Feature{
						Seqid:      feat.Chrom,
						Source:     rt[i].Id,
						Type:       sim,
						Start:      feat.Pos,
						End:        feat.Pos,
						Score:      feat.Qual,
						Strand:     "+",
						Phase:      phase,
						Attributes: map[string]string{"ID": fmt.Sprintf("%s.%s", feat.Id, rt[i].Id), "class": rt[i].Id},
					}
					writer.WriteFeature(&gffLine)
				}
			}
		}

		return c.Write(b.String())
	})
	// serve index file
	router.Get("/", file.Content("ui/index.html"))
	// serve experiments under the "ui" subdirectory
	router.Get("/*", file.Server(file.PathMap{
		"/": "/ui/",
	}))

	http.Handle("/", router)
	_ = http.ListenAndServe(":8080", nil)
}

func populateExperiments(files map[string]dataFiles) {
	var C map[string]interface{}
	_ = viper.Unmarshal(&C)
	for key := range C {
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
