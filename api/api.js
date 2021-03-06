const express = require('express');
const morgan = require('morgan');
const Model = require('./model.js');
const Usuario = require('../src/usuario.js');

const app = express();
var model = new Model();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(morgan('dev'));

app.get('/',
  function(req, res){
    res.status(200).json({mensaje: "Bienvenido a la API de la aplicación AroundTheWorld."});
  }
);

app.get('/usuarios/:username',
  function(req, res){
    if (model.username_valido(req.params.username)){
      var usuario = model.get_usuario(req.params.username)

      if (usuario != false){
        res.status(200).json(usuario);
      }

      else{
        res.status(404).json({error: "La contraseña indicada no es correcta"});
      }
    }

    else{
      res.status(404).json({error: "El username dado, " + req.params.username +
        ", no coincide con ninguno de los registrados en la base de datos"});
    }
  }
);

app.post('/usuarios',
  function(req, res){
    if ('nombre' in req.body && 'apellidos' in req.body && 'email' in req.body && 'username' in req.body && 
      'password' in req.body && 'direccion' in req.body && 'telefono' in req.body){
      
      var nuevo_usuario = new Usuario(req.body.nombre, req.body.apellidos, req.body.email, req.body.username,
        req.body.password, req.body.direccion, req.body.telefono);

      model.registrar_usuario(nuevo_usuario);

      res.status(201).json(nuevo_usuario);
    }

    else{
      res.status(400).json({error: "No se han proporcionado todos los datos necesarios para la creación " +
        "de un nuevo usuario"});
    }
  }
);

app.put('/usuarios/:username',
  function(req, res){
    if (model.username_valido(req.params.username)){
      let nombre = "",
          apellidos = "",
          email = "",
          username = "",
          password = "",
          direccion = "",
          telefono = "";

      if ('nombre' in req.body){
        nombre = req.body.nombre;
      }

      if ('apellidos' in req.body){
        apellidos = req.body.apellidos;
      }

      if ('email' in req.body){
        email = req.body.email;
      }

      if ('username' in req.body){
        username = req.body.username
      }

      if ('password' in req.body){
        password = req.body.password;
      }

      if ('direccion' in req.body){
        direccion = req.body.direccion;
      }

      if ('telefono' in req.body){
        telefono = req.body.telefono;
      }

      var usuario_modificado = model.modificar_usuario(req.params.username, nombre, apellidos, email, 
        username, password, direccion, telefono);

      res.status(200).json(usuario_modificado);
    }

    else{
      res.status(404).json({error: "El username dado, " + req.params.username +
        ", no coincide con ninguno de los registrados en la base de datos"});
    }
  }
);

app.delete('/usuarios/:username',
  function(req, res){
    if (model.username_valido(req.params.username)){
      model.borrar_usuario(req.params.username);

      res.status(200).json({mensaje: "Borrado con exito el usuario con username " + 
        req.params.username});
    }

    else{
      res.status(404).json({error: "El username dado, " + req.params.username +
        ", no coincide con ninguno de los registrados en la base de datos"});
    }
  }
);

app.get('/alojamientos',
  function(req, res){
    var alojamientos = model.get_alojamientos();

    res.status(200).json(alojamientos);
  }
);

app.get('/puntos_interes',
  function(req, res){
    var puntos_interes = model.get_puntos_interes();

    res.status(200).json(puntos_interes);
  }
);

app.get('/transportes',
  function(req, res){
    var transportes = model.get_transportes();

    res.status(200).json(transportes);
  }
);

app.get('/destinos',
  function(req, res){
    var destinos = model.get_destinos();

    res.status(200).json(destinos);
  }
);

module.exports = app;