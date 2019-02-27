var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('source');

gulp.task('browsify', function () {
    browserify('./src/main.js')
        .transform('rectify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));

});

gulp.task('copy', function(){
    gulp.src('public/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/vendors/*.*')
        .pipe(gulp.dest('dist/js'))
})

gulp.task('default', ['browserify', 'copy'], function(){
    return gulp.watch('src/**/*.*', 'public/**/*.*' ['browserify','copy'] )
})

