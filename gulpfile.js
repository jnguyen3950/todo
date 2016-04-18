var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;

gulp.task('runTest', function() {
  return gulp.src('server.spec.js', {read: false})
  .pipe(mocha());
});

gulp.task('default', ['runTest'])
