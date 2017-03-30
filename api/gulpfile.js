var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

gulp.task('js-fef', function(){
    return gulp.src(['./api_token.js', 'sha1.min.js', 'jquery-css-dimensions-effects-event-alias-offset-wrap.min.js', 'hmac-sha1.js', 'enc-base64.js', 'underscore-min.js'])
        .pipe(gp_concat('./api_token.js'))
        .pipe(gulp.dest('min'))
        .pipe(gp_rename('api_token.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('min'));
});

gulp.task('default', ['js-fef'], function(){});