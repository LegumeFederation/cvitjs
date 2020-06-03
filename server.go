package main

/*
	Server component for GCViT, all logic is in sub-module gcvit
*/

import (
	"fmt"
	"flag"
	"gcvit/gcvit"
	"gcvit/middleware"
	"github.com/buaazp/fasthttprouter"
	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
	"github.com/valyala/fasthttp"
	"log"
	"time"
)

func main() {
	//read flags for default configuration
	confFileName := flag.String("conf", "./config", "path to assetconfig.yaml")
	flag.Parse()

	// configure and read in config.yaml
	viper.SetConfigName("assetconfig")
	viper.SetConfigType("yaml")
	viper.AddConfigPath(*confFileName)
	viper.SetDefault("server", map[string]string{"port": "0", "portTLS": "0", "apiOnly": "false", "source": "gcvit", "binSize": "500000"})
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("problem reading in assetconfig: %s \n", err))
	}

	// populate gcvit defaults from config
	gcvit.SetDefaults()

	// watch for changes to data files so server doesn't need to reset when changed
	viper.WatchConfig()
	viper.OnConfigChange(func(e fsnotify.Event) {
		err := gcvit.PopulateExperiments()
		if err != nil {
			log.Printf("Error: Problem populating experiments: %s \n", err)
		}
		gcvit.SetDefaults()
	})

	// setup /api/* routes
	router := fasthttprouter.New()
	router.GET("/api/experiment", middleware.BasicAuth(gcvit.GetExperiments))
	router.GET("/api/experiment/:exp", middleware.BasicAuth(gcvit.GetExperiment))
	router.POST("/api/generateGFF", middleware.BasicAuth(gcvit.GenerateGFF))
	router.GET("/login", middleware.BasicAuth(middleware.CheckAuth))

	// Unmarshal the server settings from config for determining if static file store is needed
	var serverSettings = viper.Sub("server")
	if !serverSettings.GetBool("apiOnly") {
		// static file store router
		fs := &fasthttp.FS{
			Root:               "./ui/build/",
			IndexNames:         []string{"index.html"},
			GenerateIndexPages: false,
			Compress:           true,
			AcceptByteRange:    false,
		}
		//fsHandler and generic handler function to pass to routes
		fsHandler := fs.NewRequestHandler()
		staticHandler := func(ctx *fasthttp.RequestCtx) {
			start := time.Now()
			// serve index for / route breaks otherwise in docker
			if string(ctx.Path()) == "/" {
				ctx.SendFile(fs.Root + "/index.html")
			} else {
				fsHandler(ctx)
			}
			ctx.Logger().Printf("%dns", time.Now().Sub(start).Nanoseconds())
		}
		// routes
		router.GET("/", staticHandler)
		router.NotFound = staticHandler
	}

	port := serverSettings.GetInt("port")
	portTLS := serverSettings.GetInt("portTLS")

	// Setup HTTP port if *no* ports are passed
	if port > 1 && portTLS < 1 {
		port = 8080
	}

	// Serve HTTP
	if port > 0 {
		log.Printf("Starting HTTP server on %d", port)
		if err := fasthttp.ListenAndServe(fmt.Sprintf(":%d", port), router.Handler); err != nil {
			log.Fatalf("error in ListenAndServer: %s", err)
		}
	}

	// Serve HTTPS
	if portTLS > 0 {
		log.Printf("Starting HTTPS server on %d", portTLS)
		certFile := serverSettings.GetString("certFile")
		keyFile := serverSettings.GetString("keyFile")
		if err := fasthttp.ListenAndServeTLS(fmt.Sprintf(":%d", portTLS), certFile, keyFile, router.Handler); err != nil {
			log.Fatalf("error in ListenAndServerTLS: %s", err)
		}
	}
}
