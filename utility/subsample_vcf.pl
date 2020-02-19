#!/usr/bin/env perl

# PROGRAM: subsample_vcf.pl
# VERSION: see version notes at bottom of file.
# S. Cannon 2019
# see description under Usage

use strict;
use warnings;
use Getopt::Long;

####### File IO ########

my $dist_min=25000; # minimum distance for reporting the "next" SNP
my $qual_min=0;  # minimum quality score for reporting a SNP
my $REFFIELD=4;  # field of the REF field (ONE-indexed; typically 4)
my $ALTFIELD=5;  # field of the ALT field (ONE-indexed; typically 5)
my $QUALFIELD=6; # field of the quality score (ONE-indexed; typically 6)
my $complex_var=0; # whether to process complex (multi-character) variants, or only SNPs
my $help;

GetOptions (
  "dist_min:i"  => \$dist_min,
  "qual_min:i"  => \$qual_min,
  "complex_var" => \$complex_var,
  "help"        => \$help
);

my $usage = <<EOS;
  Usage: cat FILE.vcf | $0 [-options]
  
  Filter a VCF file (on STDIN), returning a sampling of SNP positions, with SNPs reported 
  with a minimum distance separating the SNPs, and with SNPs meeting a minimum specified quality.
   
  Options:
  -dist_min     (int) minimum distance for reporting the "next" SNP. Default 25000
  -qual_min     (int) minimum quality score for reporting a SNP. Default 0. If not set ("."), use the default of 0.
  -complex_var  (bool) flag indicating to use complex variants (length>1)
  -help         (bool) for more info
EOS

die "\n$usage\n" if ($help);

my $prev_chr = "XX";
my $prev_pos = 0;

while (<>) {
  chomp;
  my @parts = split(/\t/, $_);
  my ($chr, $pos, $qual) = ($parts[0], $parts[1], $parts[$QUALFIELD-1]);
  my ($ref, $alt) = ($parts[$REFFIELD-1], $parts[$ALTFIELD-1]);

  if ($_=~/^#/){ print "$_\n"; next }
  if ($qual eq ".") {$qual = 0}

  if ($complex_var==0){ # report only SNPs - not complex variants 
    if (length($ref) > 1 || length($alt) > 1){ next }
    else {
      if ($chr ne $prev_chr && $qual >= $qual_min){
        print $_, "\n";
        $prev_chr = $chr;
        $prev_pos = $pos;
      } 
      elsif ($pos >= $prev_pos + $dist_min && $qual >= $qual_min){ 
          print "$_\n";
          $prev_pos = $pos;
      }
      else { next }
    }
  }
  elsif ($complex_var==1){ # report both SNPs and complex variants
    if ($chr ne $prev_chr && $qual >= $qual_min){
      print $_, "\n";
      $prev_chr = $chr;
      $prev_pos = $pos;
    } 
    elsif ($pos >= $prev_pos + $dist_min && $qual >= $qual_min){ 
        print "$_\n";
        $prev_pos = $pos;
    }
    else { next }
  }
}

__END__
VERSIONS

v0.01 2019-10-15 Initial working version

