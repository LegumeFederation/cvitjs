FROM golang:alpine as builder
RUN apk add --update git nodejs npm python build-base
RUN mkdir /build
ADD . /build
WORKDIR /build
RUN go get github.com/awilkey/bio-format-tools-go/gff && go get github.com/awilkey/bio-format-tools-go/vcf  && go get github.com/go-ozzo/ozzo-routing && go get github.com/spf13/viper && go get github.com/golang/gddo/httputil/header
RUN git clone --single-branch --branch preact/buildalt https://github.com/LegumeFederation/cvitjs.git
RUN cd cvitjs && npm install && npm run build
RUN  cp -r cvitjs/build ui/gtux/public/cvitjs/build
RUN cd ui/gtux && npm install && npm run build
RUN go build -o server .
FROM alpine
RUN mkdir /app
RUN adduser -S -D -H -h /app appuser
USER appuser
COPY --from=builder /build/server /app/
COPY --from=builder /build/ui/gtux/build /app/ui/gtux/build/
VOLUME ["/app/config","/app/assets"]
#COPY --from=builder /build/config /app/config/
#COPY --from=builder /build/assets /app/assets/
WORKDIR /app
CMD ["./server"]
