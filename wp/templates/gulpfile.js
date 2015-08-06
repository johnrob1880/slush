var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');

gulp.task('server', function() {
  connect.server({
    base: 'wordpress'
  }, function (){
    browserSync({
      proxy: 'localhost:8000'
    });
  });

  gulp.watch('**/*.php').on('change', function () {
    browserSync.reload();
  });
});

gulp.task('default', ['server']);
