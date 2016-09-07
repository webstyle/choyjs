const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const babel = require('gulp-babel');


gulp.task('build', (cb) => {
    pump([
            gulp.src('./src/*.js'),
            babel({
                presets: ['es2015']
            }),
            uglify(),
            gulp.dest('./dist')
        ],
        cb
    );
});


gulp.task('watch', () => {
    gulp.watch(['./src/*.js'], ['build']);
});


gulp.task('default', ['watch']);
