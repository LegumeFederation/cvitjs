#Multistage build
#Build stage for cvit component
FROM node:12.18.0-alpine3.11 as cvitui
ARG apionly=false
ARG apiauth=false
RUN mkdir /cvit
WORKDIR /cvit
#Doing package before build allows us to leverage docker caching.
COPY cvitjs/package*.json ./
#if not planning on running UI from container, don't bother wasting time to build
RUN if [ "$apionly" = "false" ] ; then npm install; fi
COPY cvitjs/ ./
COPY ui/cvit_assets/src/ src/
RUN if [ "$apionly" = "false" ] ; then 	npm run build && \
	echo Built cvitjs ; else echo Skipping cvitjs component; fi

#Build stage for gcvit ui component
FROM node:12.18.0-alpine3.11 as gcvitui
ARG apionly=false
ARG apiauth=false
RUN mkdir /gcvit
WORKDIR /gcvit
COPY /ui/package*.json ./
RUN if [ "$apionly" = "false" ] ; then npm install; fi
#Migrate over build artifacts from the cvitui stage
COPY ui/ ./
COPY --from=cvitui /cvit/build/ /public/cvitjs/build/
COPY ui/cvit_assets/ /public/cvitjs/
#Build UI components
RUN if [ "$apionly" = "false" ] ; then rm -rf public/cvitjs/src && \
	npm run build && \
	if [ "$apiauth" = "true" ] ; then echo Building UI with Auth && npm run buildauth ; else npm run build ; fi && \
	echo Built UI components  ; else echo Skipping UI Components; fi

#Build stage for golang API components
FROM golang:1.13.12-alpine3.12 as gcvitapi
#pass --build-arg apionly="true" when building to skip building cvitjs
RUN apk add --update git
#add project to GOPATH/src so dep can run and make sure dependencies are right
RUN mkdir /go/src/gcvit
ADD . /go/src/gcvit
WORKDIR /go/src/gcvit
#grab dependencies for golangdd
RUN go get
RUN go build -o server .

#actual deployment container
FROM alpine:3.12.0
RUN mkdir /app
#Good practice to not run deployed container as root
RUN adduser -S -D -H -h /app appuser
USER appuser
COPY --from=gcvitapi /go/src/gcvit/server /app/
COPY --from=gcvitui /gcvit/build /app/ui/build/
#add mount points for config and assets
VOLUME ["/app/config","/app/assets"]
#Comment above and uncomment below if you would rather have assets built into container
#COPY --from=gcvitapi /go/src/gcvit/config /app/config/
#COPY --from=gcvitapi /go/src/gcvit/assets /app/assets/
WORKDIR /app
#start server
CMD ["./server"]

