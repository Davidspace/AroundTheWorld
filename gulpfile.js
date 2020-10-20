var gulp = require('gulp');
var mocha = require('gulp-mocha');

/** Tarea que se encarga de ejecutar los tests unitarios */
gulp.task('test', async function(){
  gulp.src(['test/*.js'])
  .pipe(mocha());
});
