const Usuario = require('../src/usuario.js')

class Model{
  constructor(){
    this.usuarios = new Array(Usuario);

    this.usuarios[0] = new Usuario('David', 'Garcia Martinez', 'dgarmar@gmail.com', 'Davidspace', 'password1', 
      'Calle Antequera 38', '616087213');

    this.usuarios[1] = new Usuario('Lucia', 'Garcia Martinez', 'luciagm@gmail.com', 'Luciagm', 'password2', 
      'Calle Antequera 38', '616087444');

    this.usuarios[2] = new Usuario('Alba', 'Logenso Magtines', 'albalm@gmail.com', 'Albamay', 'password3', 
      'Calle Caniles, 12', '616123124');

    this.usuarios[3] = new Usuario('Porfi', 'Magtines Zola', 'pogggfirio@gmail.com', 'Pogfirio', 'password4', 
      'Calle Meme, 80', '615095634');
  }

  get_usuario(username, password){
    let index = -1;

    for (let i = 0; i < this.usuarios.length && index == -1; i++){
      if (username == this.usuarios[i].username){
        index = i;
      }
    }

    if (password == this.usuarios[index].password){
      return this.usuarios[index];
    }

    else{
      return false;
    }
  }

  registrar_usuario(nuevo_usuario){
    this.usuarios.push(nuevo_usuario);
  }

  username_valido(username){
    let encontrado = false;

    for (let i = 0; i < this.usuarios.length && !encontrado; i++){
      if (username == this.usuarios[i].username){
        encontrado = true;
      }
    }

    return encontrado;
  }

  modificar_usuario(username_actual, nombre, apellidos, email, username, password, direccion, telefono){
    let index = -1;

    for (let i = 0; i < this.usuarios.length && index == -1; i++){
      if (username_actual == this.usuarios[i].username){
        index = i;
      }
    }

    if (nombre != ""){
      this.usuarios[index].nombre = nombre;
    }

    if (apellidos != ""){
      this.usuarios[index].apellidos = apellidos;
    }

    if (email != ""){
      this.usuarios[index].email = email;
    }

    if (username != ""){
      this.usuarios[index].username = username;
    }

    if (password != ""){
      this.usuarios[index].password = password;
    }

    if (direccion != ""){
      this.usuarios[index].direccion = direccion;
    }

    if (telefono != ""){
      this.usuarios[index].telefono = telefono;
    }

    return this.usuarios[index];
  }

  borrar_usuario(username){
    let borrado = false;

    for (let i = 0; i < this.usuarios.length && !borrado; i++){
      if (username == this.usuarios[i].username){
        this.usuarios.splice(i, 1);

        borrado = true;
      }
    }
  }
}

module.exports = Model;