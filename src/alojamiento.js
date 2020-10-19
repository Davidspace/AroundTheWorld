class Alojamiento{

  /**
   * Constructor básico de la clase Alojamiento
   * @param {String} nombre - Nombre del alojamiento
   * @param {String} descripcion - Descripción breve del alojamiento
   * @param {String} tipo - Tipo de alojamiento
   * @param {String} localizacion - Nombre del destino en el que se encuentra el alojamiento
   * @param {String} coordenadas - Coordenadas geográficas del alojamiento
   * @param {Number} valoracion - Media de las puntuaciones que los usuarios les han otorgado a este alojamiento
   */
  constructor(nombre, tipo, descripcion, tipo, localizacion, coordenadas, valoracion){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.localizacion = localizacion;
    this.coordenadas = coordenadas;
    this.valoracion = valoracion;
  }

  /**
   * Métodos get de la clase Alojamiento
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

  get coordenadas(){
    return this.coordenadas;
  }

  get valoracion(){
    return this.valoracion;
  }

  /**
   * Métodos set de la clase Alojamiento
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

   set coordenadas(nuevas_coordenadas){
     this.coordenadas = nuevas_coordenadas;
   }

   set valoracion(nueva_valoracion){
     this.valoracion = nueva_valoracion;
   }
}

module.exports = Alojamiento;
