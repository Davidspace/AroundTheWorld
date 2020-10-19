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
   */
  constructor(nombre, descripcion, tipo, localizacion, valoracion, hora_inicio, hora_fin){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.localizacion = localizacion;
    this.valoracion = valoracion;
    this.hora_inicio = hora_inicio;
    this.hora_fin = hora_fin
  }

  /**
   * Métodos get de la clase Transporte
   */

  get nombre(){
    return this.nombre;
  }

  get descripcion(){
    return this.descripcion;
  }

  get tipo(){
    return this.tipo;
  }

  get localizacion(){
    return this.localizacion;
  }

  get valoracion(){
    return this.valoracion;
  }

  get hora_inicio(){
    return this.hora_inicio;
  }

  get hora_fin(){
    return this.hora_fin;
  }

  /**
   * Métodos set de la clase Transporte
   */

   set nombre(nuevo_nombre){
     this.nombre = nuevo_nombre;
   }

   set descripcion(nueva_descripcion){
     this.descripcion = nueva_descripcion;
   }

   set tipo(nuevo_tipo){
     this.tipo = nuevo_tipo;
   }

   set localizacion(nueva_localizacion){
     this.localizacion = nueva_localizacion;
   }

   set valoracion(nueva_valoracion){
     this.valoracion = nueva_valoracion;
   }

   set hora_inicio(nueva_hora_inicio){
     this.hora_inicio = nueva_hora_inicio;
   }

   set hora_fin(nueva_hora_fin){
     this.hora_fin = nueva_hora_fin;
   }
}

module.exports = Transporte;
