var gulp = require('gulp');
var sass = require('gulp-sass');
var pump = require('pump')
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

// compile sass
gulp.task('sass', function(){
    return gulp.src('./sass/**')
        .pipe(sass())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('compress-js', function (cb) {
    pump(
        [
            gulp.src('./dist/*.js'),
            uglify(),
            gulp.dest('./dist/')
        ],
        cb
    );
});

// compresses css files after sass task
gulp.task('compress-css', function () {
    gulp.src('./dist/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/'));
});