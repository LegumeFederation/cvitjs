# Utility Files

## subsample_vdf.md
```perl
subsample_vcf.pl -h

  Usage: cat FILE.vcf | subsample_vcf.pl [-options]

  

  Filter a VCF file (on STDIN), returning a sampling of SNP positions, with SNPs reported 

  with a minimum distance separating the SNPs, and with SNPs meeting a minimum specified quality.

   

  Options:

  -dist_min     (int) minimum distance for reporting the "next" SNP. Default 25000

  -qual_min     (int) minimum quality score for reporting a SNP. Default 0. If not set ("."), use the default of 0.

  -complex_var  (bool) flag indicating to use complex variants (length>1)

  -help         (bool) for more info


Check column 7 to see if you have quality values to filter on (-qual_min)

Set  -complex_var if you want to INCLUDE complex variants (indels). Default is just to use SNPs.

Set -dist_min  determines the SNP density. For example,  -dist_min 20000 will give about 5k SNPs in a 100 million base chromosome.
```