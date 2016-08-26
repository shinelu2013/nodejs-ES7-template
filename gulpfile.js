var gulp = require('gulp');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
//var uglify = require('gulp-uglify');

const SRC = 'src/**/*.js';
const DEST = 'build';

gulp.task('babelify', function(){
    return gulp.src(SRC)
        //.pipe(changed(DEST))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DEST));
        // uglify
});

gulp.task('watch', function(){
    return gulp.watch(['src/**/*.js'], ['babelify']);
});

gulp.task('default', ['babelify', 'watch']);

