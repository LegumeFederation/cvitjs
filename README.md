# CViTjs

![alt text](img/cvitjs.png?raw=true "CViTjs")

> **Table of Contents** 
>
>[CViTjs](#cvitjs) 
  - [About](#about)
  - [Setup](#setup)
  - [Gulp](#gulp) 
    - [How to Gulp](#how-to-gulp)
  - [Roadmap](#roadmap)  
  
## About

Testing fork of CViTjs for my cruel and unusual experiments.

Features:

+ AMD style modules using RequireJS. Makes it easier to manage libraries, avoids polluting the global object, and allows for nicer later expansion.
+ Glyph support.
+ Uses Paper.js, RequireJS and jQuery.
+ Export view as png or svg
+ Still a bit rough around the edges

## Setup

CViTjs should work right out of the box. view is coordinated in cvit.conf in the root folder.
Currently, the query string matches based on ```[data.<match>]``` in the configuration.

For example, to see the drawing for```[data.test1]``` in the cvit.conf you would need to navigate to <baseurl>/cvit.html?data=test1.  


## Gulp

Though not required for CViTjs to work, there is a gulpfile available for those that care. Right now it is just setup to do basic linting and beautification of the generated source. the default behavior also includes watching, so if you decided to edit any files, it will lint and beautify them for you.

### How to Gulp

If you have never used gulp before, it is a build system for JavaScript that requires NodeJS

Get Node here (or from your package manager): [Get Node](https://nodejs.org/ "Node's Homepage")


+ Navigate your terminal to the root of your copy of CViTjs.
+ type: ``` npm install ```
+ This will use the node package manager (npm) to download local copies of the required gulp and node packages as listed in required.json
+ type: ``` gulp ```
+ This will run all the tasks in the gulpfile. The current tasks are:
	+ lint: Runs a linter against the javascript in js/cvit. Will report out any problems it finds in the terminal.
	+ beautify: Makes the javascript pretty. In this case will go through and remove excess whitespace, and replace tabs with two spaces, as well as starndardize indent levels.
	+ watch: Watches for files in js/cvit to change.
	+ default: Runs all of the above tasks. With watch, this means that it will stay active in that terminal window until stopped (^C or equivalent) and run the lint and beautify tasks whenever it detects a change.
+ Note you can run any task seperately by using ``` gulp <task> ```

## Roadmap
Things to do on the way to the 1.0 release.
+ Uploaded file manager
	+ Basic data validation
	+ Customized glyphs
+ Advanced URI control. 
+ Basic Glyphs:
    + Measure
    	+ Heat
        + Histogram
        + Distance
+ Release unit tests
+ Upload full documentation
