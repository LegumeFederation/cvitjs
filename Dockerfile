#Multistage build
#make a build container
FROM golang:alpine as builder
#pass --build-arg apionly="true" when building to skip building cvitjs
ARG apionly=false
RUN apk add --update git
#add project to GOPATH/src so dep can run and make sure dependencies are right
RUN mkdir /go/src/gcvit
ADD . /go/src/gcvit
WORKDIR /go/src/gcvit
#if not planning on running UI from container, don't bother wasting time to build
RUN if [ "$apionly" = "false" ] ; then apk add --update nodejs npm && \
	git clone --single-branch --branch preact/buildalt https://github.com/LegumeFederation/cvitjs.git && \
	cp -r ui/cvit_assets/src cvitjs && \
 	cd cvitjs  && \
	npm install  && \
	npm run build && \
	cp -r build ../ui/public/cvitjs && \
	echo Built cvitjs ; fi
RUN if [ "$apionly" = "false" ] ; then cd ui && \
	npm install && \
	cp -r cvit_assets/* public/cvitjs && \
	rm -rf public/cvitjs/src && \
	npm run build && \
	echo Built UI components ; else echo Skipping UI components ; fi
#grab dependencies for golang
RUN go get && go build -o server .
#actual deployment container
FROM alpine
RUN mkdir /app
#Good practice to not run deployed container as root
RUN adduser -S -D -H -h /app appuser
USER appuser
COPY --from=builder /go/src/gcvit/server /app/
COPY --from=builder /go/src/gcvit/ui/build /app/ui/build/
#add mount points for config and assets
VOLUME ["/app/config","/app/assets"]
#Comment above and uncomment below if you would rather have assets built into container
#COPY --from=builder /build/config /app/config/
#COPY --from=builder /build/assets /app/assets/
WORKDIR /app
#start server
CMD ["./server"]
