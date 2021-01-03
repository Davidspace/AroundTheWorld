const Koa = require('koa');
const koa_body = require('koa-body');
const Router = require('koa-router');
const Model = require('./model.js');
const Usuario = require('../src/usuario.js');

const app = new Koa();
const router = new Router();
var model = new Model();

app.use(router.allowedMethods());
app.use(router.routes());
app.use(koa_body());

router.get('/', (ctx) => {
  ctx.status = 200;
  ctx.body = {
    mensaje: "Bienvenido a la API de la aplicación AroundTheWorld. " + 
      "Entra en /usuarios/:username mediante GET para obtener los datos del usuario con el username indicado. " +
      "Entra en /usuarios mediante POST para crear un nuevo usuario indicando sus datos en el cuerpo de la petición. " +
      "Entra en /usuarios/:username mediante PUT para modificar el usuario cuyo username ha sido indicado " +
      "indicando los datos a modificar en el cuerpo de la petición. " + 
      "Entra en /usuarios/:username mediante DELETE para eliminar los datos del usuario con el username indicado."
  }
});

router.get('/usuarios/:username', (ctx) => {
  var usuario = model.get_usuario(ctx.params.username);

  if (usuario != false){
    ctx.status = 200;
    ctx.body = usuario;
  }
});

router.post('/usuarios', koa_body(), (ctx) => {
  ctx.body = JSON.parse(ctx.request.body);
  
  if ('nombre' in body && 'apellidos' in ctx.body && 'email' in ctx.body && 'username' in ctx.body && 
    'password' in ctx.body && 'direccion' in ctx.body && 'telefono' in ctx.body){
      
    var nuevo_usuario = new Usuario(ctx.body.nombre, ctx.body.apellidos, ctx.body.email, ctx.body.username,
      ctx.body.password, ctx.body.direccion, ctx.body.telefono);

    model.registrar_usuario(nuevo_usuario);

    ctx.status = 200;

    ctx.body = nuevo_usuario;
  }
});

router.put('/usuarios/:username', koa_body(), (ctx) => {
  if (model.username_valido(ctx.params.username)){
    let nombre = "",
        apellidos = "",
        email = "",
        username = "",
        password = "",
        direccion = "",
        telefono = "";

    ctx.body = JSON.parse(ctx.request.body);

    if ('nombre' in ctx.body){
      nombre = ctx.body.nombre;
    }

    if ('apellidos' in ctx.body){
      apellidos = ctx.body.apellidos;
    }

    if ('email' in ctx.body){
      email = ctx.body.email;
    }

    if ('username' in ctx.body){
      username = ctx.body.username
    }

    if ('password' in ctx.body){
      password = ctx.body.password;
    }

    if ('direccion' in ctx.body){
      direccion = ctx.body.direccion;
    }

    if ('telefono' in ctx.body){
      telefono = ctx.body.telefono;
    }

    var usuario_modificado = model.modificar_usuario(ctx.params.username, nombre, apellidos, email, 
      username, password, direccion, telefono);

    ctx.status = 200;

    ctx.body = usuario_modificado;
  }
});

app.listen(8080);
console.log('El servidor está escuchando en el puerto 8080')

module.exports = app;