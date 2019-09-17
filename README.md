# snp-viewer-demo API:

| path | verb | returns |
| ---- | ---- | ---- |
| /api/experiment| GET | JSON representation of all expriments in assetconfig.yaml |
| /api/experiment/{experiment} | GET | JSON representation of all PIs in VCF header |
| /api/generateGFF | POST | returns gff. Expected parameters of Ref={experiment:PI}&Variant={sameexperiment:PI}, with any number of variants |
| | | |
| / | GET | tool UI |


To get started with go:
You need to go get the following packages:

```
github.com/awilkey/bio-format-tools-go/gff 
github.com/awilkey/bio-format-tools-go/vcf
github.com/go-ozzo/ozzo-routing
github.com/spf13/viper
github.com/golang/gddo/httputil/header
```

It is reccommended to use [dep](https://golang.github.io/dep/) to manage dependendencies, as running `dep ensure` will make sure the project has all the right requirements on hand.

Running through go as a test server:

`go run server.go`

By default this will listen on port 8080, but you can
change this in the configuration file.

Building through Go:

`go build -o server .`

This builds a binary that has statically linked libraries, making it portable.

If running on a server without Go support the language has support built-in for cross compiling built in. See [HERE](https://golangcookbook.com/chapters/running/cross-compiling/)
for details.

Running through docker:
```
docker build -t gcvit:0.1 . -f Dockerfile

docker run -d \
--name gcvit \ 
--mount type=bind,source="$(pwd)"/config,target=/app/config \
--mount type=bind,source="$(pwd)"/assets,target=/app/assets \ 
-p 8080:8080 \
gcvit:0.1
```

The docker build has one build-arg:
```
--build-arg apionly=false
```
If you intend to use this container to only ever serve the API and not the UX component, setting this to true
will skip the build steps for cvitjs and the ux. This doesn't save much space in the final container, as the built components combined are < 500k, but it does save quite a bit of time making the image.

Directory used as source to the /app/assets mount point is the default location for data, and /app/config for the configuration files. 
Once the app has been build, updating data should be as easy as stopping and starting the container after updating the data on disk.

## Configuration
The assetsconfig.yaml file has the following format:
```yaml
server:
  port: 8080
  apiOnly: False

snptestLegacy:
  location: assets/Soysnp-test-AW.vcf.gz
  name: 50k subset old
  format: vcf
```

The server section's options are:

| Option | Default | Use |
| ----- | ----- | ----- |
| port | 8080 | Changes the port gcvit listens on. |
| apiOnly | False | If True, only serves the api routes. |

Otherwise, a data track has the following format:

```yaml
key:
  location: relative to root of server directory
  name: display name for dropdowns
  format: vcf (only option for now, automatically checks if gzipped)
```
