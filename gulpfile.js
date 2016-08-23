var gulp = require('gulp');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
//var uglify = require('gulp-uglify');

const SRC = 'src/**/*.js';
const DEST = 'build';

gulp.task('babelify', function(){
    return gulp.src(SRC)
        .pipe(changed(DEST))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(DEST));
        // uglify
});

gulp.task('watch', function(){
    return gulp.watch(['src/**/*.js'], ['babelify']);
});

gulp.task('default', ['babelify', 'watch']);

