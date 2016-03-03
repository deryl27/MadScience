// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var mainBowerFiles = require('main-bower-files');
var Server = require('karma').Server;
var express = require('gulp-express');
var runSequence = require('gulp-run-sequence');
var livereload = require('gulp-livereload');
var print = require('gulp-print');
var nodemon = require('gulp-nodemon');

// Test Case using Karma
gulp.task('test',['scripts'] ,function (done) {
  new Server({
    configFile: __dirname + '/karma-conf.js',
    singleRun: true
  }, done).start();
});

// Delete the dist folder
gulp.task('clean', function () {

    // Delete Temp Files & Folders
    del(['dist']);

});

// Server 
gulp.task('server', function () {
    nodemon({
      script: 'server.js'
    })
    .on('restart', function () {
        console.log('restarted!')
    });
});    

// Include all the vendor files
gulp.task('vendor', function() {
    return gulp.src(mainBowerFiles())
        //{
        // overrides: {
        //         // bootstrap: {
        //         //     main: [
        //         //         './dist/js/bootstrap.min.js',
        //         //         './dist/css/*.min.*',
        //         //         './dist/fonts/*.*'
        //         //     ]
        //         // }
        //     }
        // }))
        .pipe(print())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('dist'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function() {

    var server = livereload();
    gulp.watch('js/*.js', ['lint', 'scripts', 'vendor']);
   // express.notify();
});

gulp.task('build-code', ['clean']);

// Default Task
gulp.task('build', function() {
   runSequence('build-code', ['lint', 'vendor' ,'scripts', 'watch'], 'server');
});

gulp.task('prod', function() {
   runSequence('build-code', ['lint', 'vendor' ,'scripts', 'watch']);
});
