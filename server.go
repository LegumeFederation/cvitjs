package main

/*
	Server component for GCViT, all logic is in sub-module gcvit
*/

import (
	"fmt"
	"gcvit/gcvit"
	"github.com/buaazp/fasthttprouter"
	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
	"github.com/valyala/fasthttp"
	"log"
	"time"
)

func main() {

	// configure and read in config.yaml
	viper.SetConfigName("assetconfig")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("./config")
	viper.SetDefault("server", map[string]string{"port": "8080", "apiOnly": "false", "source": "gcvit", "binSize": "500000"})
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("problem reading in assetconfig: %s \n", err))
	}
	// set source and binSize from config
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
	router.GET("/api/experiment", gcvit.BasicAuth(gcvit.GetExperiments))
	router.GET("/api/experiment/:exp", gcvit.BasicAuth(gcvit.GetExperiment))
	router.POST("/api/generateGFF", gcvit.BasicAuth(gcvit.GenerateGFF))

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

	// Setup port and serve
	port := serverSettings.GetInt("port")
	log.Printf("Server started at 127.0.0.1:%d", port)
	log.Fatal(fasthttp.ListenAndServe(fmt.Sprintf(":%d", port), router.Handler))
}
