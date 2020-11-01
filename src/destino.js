const Alojamiento = require("./alojamiento.js");
const Punto_interes = require("./punto_interes.js");
const Transporte = require("./transporte.js");

class Destino{

  /**
   * Constructor básico de la clase Destino
   * @param {String} nombre - Nombre del destino
   * @param {String} descripcion - Descripción breve del destino
   * @param {String} pais - Nombre del pais donde se encuentra el destino
   * @param {Number} poblacion - Número de habitantes del destino
   * @param {String} gentilicio - Gentilicio de los habitantes de dicho destino
   * @param {String} sitio_web - URL de la página web del destino
   * @param {Number} valoracion - Media de las puntuaciones que los usuarios les han otorgado a este destino
   * @param {Alojamiento[]} alojamientos - Array de alojamientos disponibles en el destino
   * @param {Punto_interes[]} puntos_interes - Array de puntos de interés con los que cuenta el destino
   * @param {Transporte[]} transportes - Array de transportes disponibles en el destino
   */
  constructor(nombre, descripcion, pais, poblacion, gentilicio, sitio_web,
    valoracion, alojamientos, puntos_interes, transportes){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.pais = pais;
    this.poblacion = poblacion;
    this.gentilicio = gentilicio;
    this.sitio_web = sitio_web;
    this.valoracion = valoracion;
    this.alojamientos = alojamientos;
    this.puntos_interes = puntos_interes;
    this.transportes = transportes;
  }

  /**
   * Métodos get de la clase Destino
   */

  get _nombre(){
    return this.nombre;
  }

  get _descripcion(){
    return this.descripcion;
  }

  get _pais(){
    return this.pais;
  }

  get _poblacion(){
    return this.poblacion;
  }

  get _gentilicio(){
    return this.gentilicio;
  }

  get _sitio_web(){
    return this.sitio_web;
  }

  get _valoracion(){
    return this.valoracion;
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

  /**
   * Métodos set de la clase Destino
   */

  set _nombre(nuevo_nombre){
    this.nombre = nuevo_nombre;
  }

  set _descripcion(nueva_descripcion){
    this.descripcion = nueva_descripcion;
  }

  set _pais(nuevo_pais){
    this.pais = nuevo_pais;
  }

  set _poblacion(nueva_poblacion){
    this.poblacion = nueva_poblacion;
  }

  set _gentilicio(nuevo_gentilicio){
    this.gentilicio = nuevo_gentilicio;
  }

  set _sitio_web(nuevo_sitio_web){
    this.sitio_web = nuevo_sitio_web;
  }

  set _valoracion(nueva_valoracion){
    this.valoracion = nueva_valoracion;
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

  /**
  * [HU002] Método que muestra por pantalla toda la información relacionada con el destino
  */

  mostrar_destino(){
    /**
     * var informacion_destino;
     * 
     * informacion_destino = "Nombre: " + this._nombre + "\n" +
     *                       "Descripción: " + this._descripcion + "\n" +
     *                       "Pais: " + this._pais + "\n" +
     *                       "Población: " + this._poblacion + "\n" +
     *                       "Gentilicio: " + this._gentilicio + "\n" +
     *                       "Sitio web: " + this._sitio_web + "\n" +
     *                       "Valoración: " + this._valoracion + "\n" +
     *                       "Alojamientos: " + this._alojamiento + "\n" +
     *                       "Puntos de interés: " + this._puntos_interes + "\n" +
     *                       "Transportes: " + this._transportes + "\n";
     * 
     * console.log(informacion_destino);
     */

    var informacion_destino = [];

    informacion_destino.push((this._nombre));
    informacion_destino.push((this._descripcion));
    informacion_destino.push((this._pais));
    informacion_destino.push((this._poblacion));
    informacion_destino.push((this._gentilicio));
    informacion_destino.push((this._sitio_web));
    informacion_destino.push((this._valoracion));
    informacion_destino.push((this._alojamientos));
    informacion_destino.push((this._puntos_interes));
    informacion_destino.push((this._transportes));
                      
    return informacion_destino;
  }
}

module.exports = Destino;
