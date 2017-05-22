var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('copy', function() {
    gulp.src('src/img/*')
        .pipe(gulp.dest('./public/img/'))
});

gulp.task('scss', function(){
    gulp.src('src/scss/App.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/css/App.css'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/App.scss', ['scss'])
});