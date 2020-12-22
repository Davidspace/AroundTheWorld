var express = require('express');
var model = require('./model')
const Usuario = require('../src/usuario.js')

let usuarios = new Array(Usuario);

usuarios[0] = new Usuario('David', 'Garcia Martinez', 'dgarmar@gmail.com', 'Davidspace', 'password1', 
  'Calle Antequera 38', '616087213');

usuarios[1] = new Usuario('Lucia', 'Garcia Martinez', 'luciagm@gmail.com', 'Luciagm', 'password2', 
  'Calle Antequera 38', '616087444');

usuarios[2] = new Usuario('Alba', 'Logenso Magtines', 'albalm@gmail.com', 'Albamay', 'password3', 
  'Calle Caniles, 12', '616123124');

usuarios[3] = new Usuario('Pogfi', 'Magtines Zola', 'pogggfirio@gmail.com', 'Pogfirio', 'password4', 
  'Calle Meme, 80', '615095634');

var app = express();

const direccion_ip = '0.0.0.0'; 
app.set('puerto', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/usuarios',
  function(req, res){
    res.status(200).json(usuarios);
  }
);

app.get('/usuarios/:username',
  function(req, res){
    if (model.username_valido(req.params.username)){
      var usuario = get_usuario(req.params.username)

      if (usuario != false){
        res.status(200).json(JSON.stringify(usuario));
      }
    }

    else{
      res.status(404).json(JSON.stringify({"error": "El username dado, " + req.params.username +
        ", no coincide con ninguno de los registrados en la base de datos"}));
    }
  }
);

app.post('/usuarios',
  function(req, res){
    if ('nombre' in req.body && 'apellidos' in req.body && 'email' in req.body && 'username' in req.body && 
      'password' in req.body && 'direccion' in req.body && 'telefono' in req.body){
      var nuevo_usuario = new User(req.body.nombre, req.body.apellidos, req.body.email, req.body.username,
        req.body.password, req.body.direccion, req.body.telefono);

      model.registrar_usuario(nuevo_usuario);

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

      var usuario_modificado = model.modificar_usuario(req.params.username, nombre, apellidos, email, username, password, direccion, telefono);

      res.status(200).json(JSON.stringify(usuario_modificado));
    }
  }
);

app.delete('/usuarios/:username',
  function(req, res){
    if (username_valido(req.params.username)){
      model.borrar_usuario(req.params.username);

      res.status(200).json(JSON.stringify({"mensaje": "Borrado con exito el usuario con username " + 
        req.params.username}));
    }

    else{
      res.status(404).json(JSON.stringify({"error": "El username dado, " + req.params.username +
      ", no coincide con ninguno de los registrados en la base de datos"}));
    }
  }
);

app.listen(app.get('port'), direccion_ip, function(){
  console.log("La API está disponible en el puerto " + direccion_ip + ":" + app.get('port'));
})

module.exports = app;