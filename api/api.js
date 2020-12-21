var express = require('express');
var controller = require('controller.js')
const Usuario = require('../src/usuario.js')

var usuarios = new Array(Usuario);

usuarios[0] = new Usuario('');
usuarios[1] = new Usuario('');
usuarios[2] = new Usuario('');
usuarios[3] = new Usuario('');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/usuarios',
  function(req, res){
    res.json(usuarios);
  }
);

app.get('/usuarios/:username',
  function(request, res){
    var usuario = get_usuario(req.params.username)

    if (usuario != false){
      res.json(usuario);
    }
  }
);

app.post('/usuarios',
  function(req, res){
    if ('nombre' in req.body && 'apellidos' in req.body && 'email' in req.body && 'username' in req.body && 
      'password' in req.body && 'direccion' in req.body && 'telefono' in req.body){
      var nuevo_usuario = new User(req.body.nombre, req.body.apellidos, req.body.email, req.body.username,
        req.body.password, req.body.direccion, req.body.telefono);

      controller.registrar_usuario(nuevo_usuario);

      res.status(201).json(JSON.stringify({"mensaje": "El registro del nuevo usuario ha finalizado correctamente"}));
    }

    else{
      res.status(400).json(JSON.stringify({"error": "Debe incluir en la petición todos los datos " +
      "necesarios para registrar un nuevo usuario"}));
    }
  }
);

app.put('/usuarios/:username',
  function(req, res){
    if (username_valido(req.params.username)){
      var nombre = "",
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
        username = req.body.username;
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

      controller.modificar_usuario(nombre, apellidos, email, username, password, direccion, telefono);
    }
  }
);

app.delete('/usuarios/:username',
  function(req, res){
    if (username_valido(req.params.username)){
      borrar_usuario(req.params.username);

      res.status(200).json(JSON.stringify({"mensaje: Borrado con exito el usuario con username " + req.params.username}));
    }

    else{
      res.status(404).json(JSON.stringify({"error": "El username dado, " + req.params.username +
      ", no coincide con ninguno de los registrados en la base de datos"}));
    }
  }
);

module.exports = app;