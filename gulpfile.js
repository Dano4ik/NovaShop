const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const livereload = require('gulp-connect');


function compileSass(done) {
  gulp.src('app/src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/dist/css'));
  
  done()
}

function server(){
  livereload.server({
    root: 'app/dist',
    port: 3000
  });
  

  gulp.watch('app/src/scss/style.scss', compileSass);
  gulp.watch('app/src/**').on('change', livereload.reload);
}


gulp.task('server', server)
