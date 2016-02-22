/* global require, __dirname */
var gulp = require('gulp'),
    project = require('./package.json'),
    concat = require('gulp-concat'),
    dest = 'dist';

gulp.task('postTsc', postTsc);
gulp.task('clean', clean);

function clean() {
    var del = require('del');
    return del(dest);
}

function stripRefs(src, dest, name) {
    var strip = require("gulp-strip-comments");

    return gulp.src(src)
        .pipe(strip())
        .pipe(concat(name))
        .pipe(gulp.dest(dest));
}

function postTsc() {
    stripRefs(dest + '/angular-typescript-module.debug.d.ts', dest, '/angular-typescript-module.d.ts');
    stripRefs(dest + '/angular-typescript-module.debug.js', dest, '/angular-typescript-module.js');
}