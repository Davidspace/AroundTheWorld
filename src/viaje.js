const Alojamiento = require("./alojamiento.js");
const Punto_interes = require("./punto_interes.js");
const Transporte = require("./transporte.js");

class Viaje{

  /**
   * Constructor básico de la clase Viaje
   * @param {String} usuario - Nombre de usuario del usuario que ha creado este viaje
   * @param {String} nombre_destino - Nombre del destino
   * @param {Alojamiento[]} alojamientos - Array de arrays de alojamientos reservados para el viaje
   *                                  junto a los dias de entrada y salida
   *  
   * @param {Punto_interes[]} puntos_interes - Array de puntos de interés reservados para el viaje
   *                                    junto a la fecha de dicha reserva
   * 
   * @param {Transporte[]} transportes - Array de transportes reservados para el viaje
   *                                 junto a la fecha de dicha reserva
   * 
   * @param {Number} precio - Precio final del viaje
   */
  constructor(usuario, nombre_destino, alojamientos = [], puntos_interes = [], transportes = [], precio = 0){
    this.usuario = usuario
    this.nombre_destino = nombre_destino;
    this.alojamientos = alojamientos;
    this.puntos_interes = puntos_interes;
    this.transportes = transportes;
    this.precio = precio;
  }

  /**
   * Métodos get de la clase Viaje
   */

  get _usuario(){
    return this.usuario;
  }

  get _nombre_destino(){
    return this.nombre_destino;
  }

  get _alojamientos(){
    return this.alojamientos;
  }

  get _puntos_interes(){
    return this.puntos_interes;
  }

  get _transportes(){
    return this.transportes;
  }

  get _precio(){
    return this.precio;
  }

  /**
   * Métodos set de la clase Viaje
   */

  set _usuario(nuevo_usuario){
    this.usuario = nuevo_usuario;
  }

  set _nombre_destino(nuevo_nombre_destino){
    this.nombre_destino = nuevo_nombre_destino;
  }

  set _alojamientos(nuevos_alojamientos){
    this.alojamientos = nuevos_alojamientos;
  }

  set _puntos_interes(nuevos_puntos_interes){
    this.puntos_interes = nuevos_puntos_interes;
  }

  set _transportes(nuevos_transportes){
    this.transportes = nuevos_transportes;
  }

  set _precio(nuevo_precio){
    this.precio = nuevo_precio;
  }

  /**
   * [HU006] Método que añade al viaje la reserva en un alojamiento
   * 
   * @param {Alojamiento} alojamiento - Alojamiento en el que se ha realizado la reserva
   * @param {Date} fecha_entrada - Fecha en la que la reserva comienza
   * @param {Date} fecha_salida - Fecha en la que la reserva acaba
   * 
   * @returns {Number} Longitud del array de reservas de alojamientos
   */

  anadir_reserva_alojamiento(alojamiento, fecha_entrada, fecha_salida){
    var reserva = [alojamiento, fecha_entrada, fecha_salida];
    
    var num_reservas = this.alojamientos.push(reserva);

    return num_reservas;
  }

  /**
   * [HU007] Método que añade al viaje la reserva en un punto de interés
   * 
   * @param {Punto_interes} punto_interes - Punto de interés en el que se ha realizado la reserva
   * @param {Date} fecha_entrada - Fecha en la que la reserva ha sido realizada
   * 
   * @returns {Number} Longitud del array de reservas de puntos de interés
   */

  anadir_reserva_punto_interes(punto_interes, fecha){
    var reserva = [punto_interes, fecha];
  
    var num_reservas = this.puntos_interes.push(reserva);

    return num_reservas;
  }

  /**
   * [HU008] Método que añade al viaje la reserva en un transporte
   * 
   * @param {Transporte} transporte - Transporte en el que se ha realizado la reserva
   * @param {Date} fecha - Fecha en la que la reserva ha sido realizada
   * 
   * @returns {Number} Longitud del array de reservas de transportes
   */

  anadir_reserva_transporte(transporte, fecha){
    var reserva = [transporte, fecha];

    var num_reservas = this.transportes.push(reserva);

    return num_reservas;
  }

  /**
   * [HU009] Método que elimina del viaje la reserva realizada en un alojamiento 
   * 
   * @param {String} nombre_alojamiento - Nombre del alojamiento en el que se ha realizado la reserva
   * 
   * @returns {Alojamiento[]} Alojamiento cuya reserva ha sido eliminada
   */

  eliminar_reserva_alojamiento(nombre_alojamiento){
    var index = this.alojamientos.findIndex(alojamiento => alojamiento.nombre === nombre_alojamiento);

    var reserva_eliminada = this.alojamientos.splice(index, 1);

    return reserva_eliminada;
  }

  /**
   * [HU010] Método que elimina del viaje la reserva realizada en un punto de interés
   * 
   * @param {String} nombre_punto_interes - Nombre del punto de interés en el que se ha realizado la reserva
   * 
   * @returns {Punto_interes[]} Punto de interés cuya reserva ha sido eliminada
   */

  eliminar_reserva_punto_interes(nombre_punto_interes){
    var index = this.puntos_interes.findIndex(punto_interes => punto_interes.nombre === nombre_punto_interes);

    var reserva_eliminada = this.puntos_interes.splice(index, 1);

    return reserva_eliminada;
  }

  /**
   * [HU011] Método que elimina del viaje la reserva realizada en un transporte
   * 
   * @param {String} nombre_transportes - Nombre del transporte en el que se ha realizado la reserva
   * 
   * @returns {Transporte[]} Transporte cuya reserva ha sido eliminada
   */

  eliminar_reserva_transporte(nombre_transporte){
    var index = this.transportes.findIndex(transporte => transporte.nombre === nombre_transporte);

    var reserva_eliminada = this.transportes.splice(index, 1);

    return reserva_eliminada;
  }
}

module.exports = Viaje;

