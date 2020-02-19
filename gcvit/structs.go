package gcvit

//DataFiles represents a vcf file passed through configuration
type DataFiles struct {
	Name      string
	Key       string
	Location  string
	Format    string
	Gzip      bool
	Genotypes []string
}

//ExpData is a JSON data packet of a {value: value, label:label} pair to use with the dropdown selector in the UI
type ExpData struct {
	Value string `json:"value"`
	Label string `json:"label"`
}
