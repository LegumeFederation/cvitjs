FROM golang:alpine as builder
RUN apk update && apk add git
RUN mkdir /build
ADD . /build
WORKDIR /build
RUN go get github.com/awilkey/bio-format-tools-go/gff && go get github.com/awilkey/bio-format-tools-go/vcf  && go get github.com/go-ozzo/ozzo-routing && go get github.com/spf13/viper
RUN go get github.com/golang/gddo/httputil/header
RUN go build -o server .
FROM alpine
RUN mkdir /app
RUN adduser -S -D -H -h /app appuser
USER appuser
COPY --from=builder /build/server /app/
COPY --from=builder /build/ui/gtux/build /app/ui/gtux/build/
COPY --from=builder /build/config /app/config/
COPY --from=builder /build/assets/test-soysnp.vcf /app/assets/
WORKDIR /app
CMD ["./server"]
