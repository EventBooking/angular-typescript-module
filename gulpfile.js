/* global require, __dirname */
var gulp = require('gulp'),
    project = require('./package.json'),
    dest = 'dist';

gulp.task('stripRefs', stripRefs);

function stripRefs() {
    var strip = require("gulp-strip-comments");
    
    return gulp.src(dest + '/angular-typescript-module.d.ts')
        .pipe(strip())
        .pipe(gulp.dest(dest));
}