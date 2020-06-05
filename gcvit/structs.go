package gcvit

// DataFiles represents a vcf file passed through configuration
type DataFiles struct {
	Name      string	// File name
	Key       string	// Reference key in assetconfig.yaml
	Location  string	// Fisk location
	Format    string	// vcf only currently
	Gzip      bool		// Is file gzipped
	Genotypes []string	// Slice of all Genotypes cached for faster responses
}

// ExpData is a JSON data packet of a {value: value, label:label} 
// pair to use with the dropdown selector in the UI component
type ExpData struct {
	Value string `json:"value"`	// Computer simplified value
	Label string `json:"label"`	// User pretty value
}
