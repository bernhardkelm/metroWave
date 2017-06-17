var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');

gulp.task('sass', function () {  
  gulp.src('scss/main.scss')
    .pipe(sass({
      errLogToConsole : true,
      sourceComments : true,
    }).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {  
  browserSync.init(["css/*.css", "js/*.js"], {
    server: {
      baseDir: "./"
    },
    open: false
  });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("scss/**/*.scss", ['sass']);
});
