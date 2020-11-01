const Alojamiento = require("./alojamiento.js");
const Punto_interes = require("./punto_interes.js");
const Transporte = require("./transporte.js");
const Destino = require("./destino.js");
const Punto_interes = require("./punto_interes.js");

class Viaje{

  /**
   * Constructor básico de la clase Viaje
   * @param {String} destino - Nombre del destino
   * @param {Object[]} alojamientos - Array de arrays de alojamientos reservados para el viaje
   *                                  junto a los dias de entrada y salida
   *  
   * @param {Object[]} puntos_interes - Array de puntos de interés reservados para el viaje
   * @param {Object[]} transportes - Array de transportes reservados para el viaje
   * @param {Number} precio - Precio final del viaje
   */
  constructor(nombre, alojamientos = [], puntos_interes = [], transportes = [], precio = 0){
    this.nombre = nombre;
    this.alojamientos = alojamientos;
    this.puntos_interes = puntos_interes;
    this.transportes = transportes;
    this.precio = precio;
  }

  /**
   * Métodos get de la clase Viaje
   */

  get _nombre(){
    return this.nombre;
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

  set _nombre(nuevo_nombre){
    this.nombre = nuevo_nombre;
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
   */

  anadir_reserva_punto_interes(punto_interes, fecha){
    var reserva = [punto_interes, fecha];
  
    this.puntos_interes.push(reserva);

    return reserva;
  }

  /**
   * [HU008] Método que añade al viaje la reserva en un transporte
   * 
   * @param {Transporte} transporte - Transporte en el que se ha realizado la reserva
   * @param {Date} fecha - Fecha en la que la reserva ha sido realizada
   */

  anadir_reserva_transporte(transporte, fecha){
    var reserva = [transporte, fecha];

    this.transportes.push(reserva);

    return reserva;
  }
}

module.exports = Viaje;

