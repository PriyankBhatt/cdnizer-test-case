'use strict';

var gulp = require('gulp');
var cdnizer = require('gulp-cdnizer');

gulp.task('default', [], function () {
  return gulp.src('src/*.html')
    .pipe(cdnizer([
      'google:angular'
    ]))
    .pipe(gulp.dest('.'));
});
