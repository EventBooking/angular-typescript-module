/* global require, __dirname */
var gulp = require('gulp'),
    project = require('./package.json'),
    concat = require('gulp-concat'),
    dest = 'dist';

gulp.task('clean', clean);

function clean() {
    var del = require('del');
    del(dest, function () {
        del('test/**/*.js', cb);
    });
}