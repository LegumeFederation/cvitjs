# snp-viewer-demo

API:

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

Directory used as source to the /app/assets mount point is the default location for data, and /app/config for the configuration files. 
Once the app has been build, updating data should be as easy as stopping and starting the container after updating the data on disk.

