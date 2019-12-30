#GCViT
![CViTjs](assets/readme_images/logo.png?raw=true)

## Table of Contents
+ [About](#about) 
+ [Setup](#setup)
    + [General](#general-setup)
    + [Docker](#docker-setup)
    + [Go + Node](#go-+-node-setup) 
+ [API](#api)

## About

GCViT is a tool for whole genome visualization of resequencing or SNP array data. GCViT allows a
user to compare two or more accessions and visually identify regions of similarity and difference
across the genome.

![Williams Pedigree As Haplotype Blocks ](assets/readme_images/Williams_Pedigree2.png?raw=true)

[Explore Soy in GCViT](https://soybase.org/gcvit/)

## Setup
While GCViT was intended as a tool for publicly accessible data, it may also be run locally as a stand alone tool.
In either case, there are two main approaches to running GCViT, in a Docker container, or using the built-in Go server.
A stand-alone electron desktop app is in the process of being developed.
 
### General Setup
No matter which method you intend to run GCViT, configuration of the Go backend service is the same.
By default the configuration sits in `config/assetsconfig.yaml` and it has the following format:

```yaml
server:
  port: 8080
  apiOnly: False

snptestLegacy:
  location: assets/SoySNP50k_TestFile_named.vcf.gz 
  name: soySNP 50k subset [named]
  format: vcf
```

The server stanza is optional, and supports two options:

| Option | Default | Use |
| ----- | ----- | ----- |
| port | 8080 | Changes the port GCViT listens on. |
| apiOnly | False | If True, only serves the api routes, ignoring the GCViT frontend |

After the server, you may have one or more data tracks, that have the following required fields:

```yaml
key: #internal key for API requests
  location: relative to root of server directory
  name: display name for dropdowns
  format: vcf (only option for now, automatically checks if gzipped)
```

While it is recommended, data does not have to be in the `assets` folder to be read by GCViT.

In addition to the vcf file, a gff "backbone" file will need to be provided for the UI component to display the results.
The format for this file can be viewed at `ui/cvit_assets/data/soySnp/gm_backbone.gff`. In addition, cvit configuration files
will need to be provided as well, examples as `ui/cvit_assets/cvit.conf` and `ui/cvit_assets/soySnp/soySnp.conf`.

For more information on configuring the CViTjs component of GCViT, please see the documentation [HERE](https://github.com/LegumeFederation/cvitjs/wiki)

### Docker Setup
For general use, it is probably easiest to get started with GCViT using [Docker](https://www.docker.com/)
before building, make sure that docker is properly configured for your system.

The process of building from docker will automatically grab the most recent version of CViTjs during the build process.
To make any changes, including your custom backbone and configuration files, place the files in `ui/cvit_assets`. Any files here
will replace-in-place their equivalent in the default CViT package, this includes custom popover components.

To build through docker:
```
docker build -t gcvit:1.0 . -f Dockerfile
```
This will produce a image with the tag of **gcvit:1.0** that can be used to build a container.
If you want to save time with automated builds and only need the server API component, the build-arg:
```
--build-arg apionly=false
```
is provided to skip over the building of the UI components.

When it is time to start the container, there are two mount points exposed to add configuration and data:
`/app/config` and `/app/assets` respectively.

An example of starting an instance of GCViT: 
```
docker run -d \
--name gcvit \ 
--mount type=bind,source="$(pwd)"/config,target=/app/config \
--mount type=bind,source="$(pwd)"/assets,target=/app/assets \ 
-p 8080:8080 \
gcvit:1.0
```

To update the data, you should be able to just add it directly to the mounted-source, as GCViT checks for
updated data when appropriate. 

### Go + Node Setup
GCViT may also be built and served directly using [Go](https://golang.org/) and and [Node](https://nodejs.org/en/) together.
Before beginning, check that Go is setup and Node is configured to at least the most current LTS version (currently 12.14.0).

#### Building the backend component with Go
The following packages are needed in order to build the service:
```
github.com/awilkey/bio-format-tools-go/gff 
github.com/awilkey/bio-format-tools-go/vcf
github.com/go-ozzo/ozzo-routing
github.com/spf13/viper
github.com/golang/gddo/httputil/header
```
It is recommended to use [dep](https://golang.github.io/dep/) to manage dependencies, as running `dep ensure` will make sure the project has all the right requirements on hand.

Once all the dependencies are grabbed, you can run the test server using the command:

`go run server.go`
from the root directory of the project.

By default this will listen on port 8080, but you can change this in the configuration file.

Once up, you can test that the server is up using wget or curl:

| protocol | request |
| -------- | ------- |
| wget     | wget localhost:8080/api/experiment |
| curl     | curl localhost:8080/api/experiment |

Either protocol should return a JSON object that contains a list of all the configured VCF files.

If you wish to compile the server, Go has a robust set of tools for building and cross-compiling binaries.
In the most simple form:

`go build -o server .`

Will builds a binary that has statically linked libraries, making it portable.

If running on a server without a Go compiler configured, the language has support built-in for cross compiling built in. See [HERE](https://golangcookbook.com/chapters/running/cross-compiling/)
for details.

#### Building the frontend components with Node

This repository contains a pre-built version of both the UI component and CViTjs, so this section is mostly optional.

If you wish to add configuration data for CViT without re-building the tool, you may place the files directly in `ui/build/cvitjs`.

If you want to use a custom build of CViTjs, grab and build [CViTjs](https://github.com/LegumeFederation/cvitjs/tree/preact/buildalt). Place the resulting
files from the build directory directly into `ui/build/cvitjs/build`. 

Any changes to CViT that you want to keep when re-building the UI component will need to be placed in `ui/public/cvitjs`

To rebuild the UI component of GCViT:
```
npm install
npm run build
```

This will create a webpacked version of the GCViT UI. Most common reasons to rebuild is updating the Help documentation and
updating the CSS.


## API:

The following API is served by the GCViT service component:

| Path | Verb | Returns |
| ---- | ---- | ---- |
| /api/experiment| GET | JSON representation of all experiments in assetconfig.yaml |
| /api/experiment/{experiment} | GET | JSON representation of all PIs in VCF header |
| /api/generateGFF | POST | returns gff. Expected parameters of Ref={experiment:PI}&Variant={sameexperiment:PI}, with any number of variants |
| | | |
| / | GET | tool UI - Only if apiOnly is **False** |
