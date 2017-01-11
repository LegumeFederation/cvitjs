// Inclue gulp
var gulp = require('gulp');

// Include plugins
var jshint = require('gulp-jshint');
var beautify = require('gulp-js-beautify');
// Lint task

gulp.task('lint', function(){
	return gulp.src('./js/cvit/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Beautify task
gulp.task('beautify', function(){
	return gulp.src('./js/cvit/**/*.js')
		.pipe(beautify({"indent_size":2,"space_in_paren":true,
			"indent_level":0,"jslint-happy":true,"end-with-newline":true }))
		.pipe(gulp.dest('./js/cvit'));
})

// Watch task
gulp.task('watch', function(){
	gulp.watch('./js/cvit/**/*.js',['lint']);
});

//Default task
gulp.task('default',['lint','beautify','watch']);
