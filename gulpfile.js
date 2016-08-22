var gulp = require('gulp');
var babel = require('gulp-babel');
//var uglify = require('gulp-uglify');

gulp.task('babelify', function(){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'));
        // uglify
});

gulp.task('watch', function(){
    return gulp.watch(['src/**/*.js'], ['babelify']);
});

gulp.task('default', ['babelify', 'watch']);

