const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const babel = require('gulp-babel');
const connect = require('gulp-connect');
const concat = require('gulp-concat');


gulp.task('build', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('choy.js'))
        .pipe(gulp.dest('./dist'));
});


gulp.task('connect', () => {
    connect.server({
        name: 'Choyxona App',
        root: ['examples', 'dist'],
        port: 9000,
        livereload: true
    });
});


gulp.task('html', () => {
    gulp.src('./examples/*.html')
        .pipe(connect.reload());
});


gulp.task('js', () => {
    gulp.src('./examples/*.js')
        .pipe(connect.reload());
});


gulp.task('watch', () => {
    gulp.watch(['./src/*.js'], ['build']);
    gulp.watch(['./examples/*.html'], ['html']);
    gulp.watch(['./examples/*.js'], ['js', 'build']);
});



gulp.task('default', ['connect', 'watch']);
