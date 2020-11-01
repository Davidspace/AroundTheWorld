class Transporte{

  /**
   * Constructor básico de la clase Transporte
   * @param {String} nombre - Nombre del transporte
   * @param {String} descripcion - Descripción breve del transporte
   * @param {String} tipo - Tipo de transporte
   * @param {String} localizacion - Nombre del destino en el que se encuentra el transporte
   * @param {Number} valoracion - Media de las puntuaciones que los usuarios les han otorgado a este transporte
   * @param {String} hora_inicio - Hora de inicio del servicio de este transporte
   * @param {String} hora_fin - Hora de fin del servicio de este transporte
   * @param {Number} precio - Precio del transporte
   */
  constructor(nombre, descripcion, tipo, localizacion, valoracion, hora_inicio, hora_fin, precio){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.localizacion = localizacion;
    this.valoracion = valoracion;
    this.hora_inicio = hora_inicio;
    this.hora_fin = hora_fin;
    this.precio = precio;
  }

  /**
   * Métodos get de la clase Transporte
   */

  get _nombre(){
    return this.nombre;
  }

  get _descripcion(){
    return this.descripcion;
  }

  get _tipo(){
    return this.tipo;
  }

  get _localizacion(){
    return this.localizacion;
  }

  get _valoracion(){
    return this.valoracion;
  }

  get _hora_inicio(){
    return this.hora_inicio;
  }

  get _hora_fin(){
    return this.hora_fin;
  }

  get _precio(){
    return this.precio;
  }

  /**
   * Métodos set de la clase Transporte
   */

  set _nombre(nuevo_nombre){
    this.nombre = nuevo_nombre;
  }

  set _descripcion(nueva_descripcion){
    this.descripcion = nueva_descripcion;
  }

  set _tipo(nuevo_tipo){
    this.tipo = nuevo_tipo;
  }

  set _localizacion(nueva_localizacion){
    this.localizacion = nueva_localizacion;
  }

  set _valoracion(nueva_valoracion){
    this.valoracion = nueva_valoracion;
  }

  set _hora_inicio(nueva_hora_inicio){
    this.hora_inicio = nueva_hora_inicio;
  }

  set _hora_fin(nueva_hora_fin){
    this.hora_fin = nueva_hora_fin;
  }

  set _precio(nuevo_precio){
    this.precio = nuevo_precio;
  }
}

module.exports = Transporte;
