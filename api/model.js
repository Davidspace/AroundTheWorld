const { api } = require("./api.js");

class Controller{
  constructor(usuarios){
    this._usuarios = usuarios;
  }

  get_usuario(username){
    var index = -1;

    for (var i = 0; i < this._usuarios.length && index == -1; i++){
      if (username == usuario[i].username){
        index = i;
      }
    }

    return _usuarios[index];
  }

  registrar_usuario(nuevo_usuario){
    this._usuarios.push(nuevo_usuario);
  }

  username_valido(username){
    var encontrado = false;

    for (var i = 0; i < this._usuarios.length && !encontrado; i++){
      if (username == usuario[i].username){
        encontrado = true;
      }
    }

    return encontrado;
  }

  modificar_usuario(username_actual, nombre, apellidos, email, username, password, direccion, telefono){
    var index = -1;

    for (var i = 0; i < this._usuarios.length && index == -1; i++){
      if (username == usuario[i].username){
        index = i;
      }
    }

    if (nombre != ""){
      usuarios[index].nombre = nombre;
    }

    if (apellidos != ""){
      usuarios[index].apellidos = apellidos;
    }

    if (email != ""){
      usuarios[index].email = email;
    }

    if (username != ""){
      usuarios[index].username = username;
    }

    if (password != ""){
      usuarios[index].password = password;
    }

    if (direccion != ""){
      usuarios[index].direccion = direccion;
    }

    if (telefono != ""){
      usuarios[index].telefono = telefono;
    }

    return usuarios[index];
  }

  borrar_usuario(username){
    var borrado = false;

    for (var i = 0; i < this._usuarios.length && !borrado; i++){
      if (username == usuario[i].username){
        this._usuarios.splice(i, 1);

        borrado = true;
      }
    }
  }
}

module.exports = {Controller}