// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cachebust = require('gulp-cache-bust');

gulp.task( 'default', [ 'serve' ] );

// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src(['js/*.js'])
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});


gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({ sourceMap: 'sass',outputStyle: 'nested'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function () {
    // Watch .js files
    gulp.watch(['js/*.js'], ['scripts']);
    // Watch .scss files
    gulp.watch('sass/*.scss', ['sass']);
});