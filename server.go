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
	viper.SetDefault("server", map[string]string{"port": "8080", "apiOnly": "false"})
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("problem reading in assetconfig: %s \n", err))
	}

	// watch for changes to data files so server doesn't need to reset when changed
	viper.WatchConfig()
	viper.OnConfigChange(func(e fsnotify.Event) {
		gcvit.PopulateExperiments()
	})

	// setup /api/* routes
	router := fasthttprouter.New()
	router.GET("/api/experiment", gcvit.GetExperiments)
	router.GET("/api/experiment/:exp", gcvit.GetExperiment)
	router.POST("/api/generateGFF", gcvit.GenerateGFF)

	// Unmarshal the server settings from config for determining if static file store is needed
	var serverSettings = viper.Sub("server")
	if !serverSettings.GetBool("apiOnly") {
		// static file store router
		fs := &fasthttp.FS{
			Root:               "./ui/build/",
			IndexNames:         []string{"index.html"},
			GenerateIndexPages: true,
			Compress:           true,
			AcceptByteRange:    false,
		}
		//fsHandler and generic handler function to pass to routes
		fsHandler := fs.NewRequestHandler()
		staticHandler := func(ctx *fasthttp.RequestCtx) {
			start := time.Now()
			fsHandler(ctx)
			ctx.Logger().Printf("%dns", time.Now().Sub(start).Nanoseconds())
		}
		// routes
		router.GET("/", staticHandler)
		// because /* won't work, try to serve valid requests from ui/build before invalid route error
		router.NotFound = staticHandler
	}

	// Setup port and serve
	port := serverSettings.GetInt("port")
	log.Printf("Server started at 127.0.0.1:%d", port)
	log.Fatal(fasthttp.ListenAndServe(fmt.Sprintf(":%d", port), router.Handler))
}
