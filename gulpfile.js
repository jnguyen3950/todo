var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;
// var childNode = exec('node server.js');
var spawn = require('child_process').spawn;

gulp.task('mocha', function() {
  return gulp.src('tests/server.spec.js', {read: false})
  .pipe(mocha());
});

gulp.task('killNode', ['casper'], function() {
  childNode.kill();
  // process.exit();
});

gulp.task('casper', function() {
  var casperTest = ['tests/casper.spec.js'];
  var casperChild = spawn('casperjs', ['test'].concat(casperTest));

  casperChild.stdout.on('data', function (data) {
    gutil.log('CasperJS:', data.toString().slice(0, -1));
  });
});

gulp.task('default', ['mocha', 'killNode']);
