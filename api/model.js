const Usuario = require('../src/usuario.js');
const Alojamiento = require('../src/alojamiento.js');
const Punto_interes = require('../src/punto_interes.js');
const Transporte = require('../src/transporte.js');
const Destino = require('../src/destino.js');

class Model{
  constructor(){
    this.usuarios = [];

    this.usuarios.push(new Usuario('David', 'Garcia Martinez', 'dgarmar@gmail.com', 'Davidspace', 'password1', 
      'Calle Antequera 38', '616087213'));

    this.usuarios.push(new Usuario('Lucia', 'Garcia Martinez', 'luciagm@gmail.com', 'Luciagm', 'password2', 
      'Calle Antequera 38', '616087444'));

    this.usuarios.push(new Usuario('Alba', 'Logenso Magtines', 'albalm@gmail.com', 'Albamay', 'password3', 
      'Calle Caniles, 12', '616123124'));

    this.usuarios.push(new Usuario('Porfi', 'Magtines Zola', 'pogggfirio@gmail.com', 'Pogfirio', 'password4', 
      'Calle Meme, 80', '615095634'));

    this.alojamientos = [];

    this.alojamientos.push(new Alojamiento("Hostal David", "Increible alojamiento", "Hostal",
      "Baza", "37.4888637, -2.7709805", "8.7", 40));
      
    this.alojamientos.push(new Alojamiento("Hotel Hoja", "Somos los mejores", "Hotel",
      "Guadix", "37.3006914 ,-3.1351956", "9.1", 30));

    this.puntos_interes = [];

    this.puntos_interes.push(new Punto_interes("Plaza Mayor", "La más grande", "Baza",
      "37.3023453 ,-3.0232736", "9.3"));
                                               
    this.puntos_interes.push(new Punto_interes("Plaza Menor", "No tan grande", "Guadix",
      "37.3006662 ,-3.1452778", "8.5"));
                                               
    this.transportes = [];
                                               
    this.transportes.push(new Transporte("Alsama", "Buses mega rápidos", "Autobus", "Baza",
      "9.7", "07:00", "23:00"));
                                               
      this.transportes.push(new Transporte("Guataxi", "Taxis para todos", "Taxi", "Guadix",
      "9.7", "07:00", "23:00"));

    this.destinos = [];

    this.destinos.push(new Destino("Baza", "Baza es el mejor pueblo que existe", "España",
      25000, "Bastetano", "www.baza.com", 9.2,
      this.alojamientos[0], this.puntos_interes[0],
      this.transportes[0]));
      
    this.destinos.push(new Destino("Guadix", "Guadix es el segundo mejor pueblo que existe", "España",
      24000, "Accitano", "www.guadix.com", 9.1,
      this.alojamientos[1], this.puntos_interes[1],
      this.transportes[1]));
  }

  get_usuario(username){
    let index = -1;

    for (let i = 0; i < this.usuarios.length && index == -1; i++){
      if (username == this.usuarios[i].username){
        index = i;
      }
    }

    if (index != -1){
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

  get_alojamientos(){
    return this.alojamientos;
  }

  get_puntos_interes(){
    return this.puntos_interes;
  }

  get_transportes(){
    return this.transportes;
  }

  get_destinos(){
    return this.destinos;
  }
}

module.exports = Model, Usuario;