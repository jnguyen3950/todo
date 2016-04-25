var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var casperJs = require('gulp-casperjs');
var exec = require('child_process').exec;
var childNode = exec('node server.js');
var spawn = require('child_process').spawn;


gulp.task('mocha', function() {
  return gulp.src('tests/server.spec.js', {read: false})
  .pipe(mocha());
});

gulp.task('casper', function () {
  return gulp.src('tests/casper.spec.js')
    .pipe(casperJs({command:'test'}));
});

gulp.task('killNode', ['casper'], function() {
  childNode.kill();
});

gulp.task('default', ['mocha', 'killNode'], function() {
  process.exit(0);
});
