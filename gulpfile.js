var gulp = require('gulp');
var mocha = require('gulp-mocha');
var run = require('gulp-run');

/** Tarea que se encarga de instalar las dependencias
gulp.task('install', async function(){
  gulp.src(['./'])
  .pipe(run('npm install'))
});
*/

/** Tarea que se encarga de ejecutar los tests unitarios */
gulp.task('test', async function(){
  gulp.src(['test/*.js'])
  .pipe(mocha());
});

/** Tarea que se ejecutará por defecto */
gulp.task('default', async function(){
  console.log("Use gulp <tarea> para ejecutar una tarea. Las tareas disponibles son: \n\n"
              + "Instalar las dependencias ------> gulp install \n"
              + "Ejecutar los tests unitarios ---> gulp test \n")
});
