#Multistage build
#make a build container
FROM golang:alpine as builder
#pass --build-arg apionly="true" when building to skip building cvitjs
ARG apionly=false
RUN apk add --update git dep
#add project to GOPATH/src so dep can run and make sure dependencies are right
RUN mkdir /go/src/build
ADD . /go/src/build
WORKDIR /go/src/build
#if not planning on running UI from container, don't bother wasting time to build
RUN if [ "$apionly" = "false" ] ; then apk add --update nodejs npm python build-base && \
	git clone --single-branch --branch preact/buildalt https://github.com/LegumeFederation/cvitjs.git && \
 	cd cvitjs  && \
	npm install  && \
	npm run build && \
	cp -r build ../ui/gtux/public/cvitjs/build && \
	echo Built cvitjs ; fi
RUN if [ "$apionly" = "false" ] ; then cd ui/gtux && \
	npm install && \
	npm run build && \
	echo Built UI components ; else echo Skipping UI components ; fi
#grab dependencies for golang
RUN dep ensure
RUN go build -o server .
#actual deployment container
FROM alpine
RUN mkdir /app
RUN adduser -S -D -H -h /app appuser
USER appuser
COPY --from=builder /go/src/build/server /app/
COPY --from=builder /go/src/build/ui/gtux/build /app/ui/gtux/build/
#add mount points for config and assets
VOLUME ["/app/config","/app/assets"]
#Comment above and uncomment below if you would rather have assets built into container
#COPY --from=builder /build/config /app/config/
#COPY --from=builder /build/assets /app/assets/
WORKDIR /app
CMD ["./server"]
