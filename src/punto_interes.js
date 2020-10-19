class Punto_interes{

  /**
   * Constructor básico de la clase Punto_interes
   * @param {String} nombre - Nombre del punto de interés
   * @param {String} descripcion - Descripción breve del punto de interés
   * @param {String} localizacion - Nombre del destino en el que se encuentra el punto de interés
   * @param {String} coordenadas - Coordenadas geográficas del punto de interés
   * @param {Number} valoracion - Media de las puntuaciones que los usuarios les han otorgado a este punto de interés
   */
  constructor(nombre, descripcion, localizacion, coordenadas, valoracion){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.localizacion = localizacion;
    this.coordenadas = coordenadas;
    this.valoracion = valoracion;
  }

  /**
   * Métodos get de la clase Punto_interes
   */

  get _nombre(){
    return this.nombre;
  }

  get _descripcion(){
    return this.descripcion;
  }

  get _localizacion(){
    return this.localizacion;
  }

  get _coordenadas(){
    return this.coordenadas;
  }

  get _valoracion(){
    return this.valoracion;
  }

  /**
   * Métodos set de la clase Punto_interes
   */

   set _nombre(nuevo_nombre){
     this.nombre = nuevo_nombre;
   }

   set _descripcion(nueva_descripcion){
     this.descripcion = nueva_descripcion;
   }

   set _localizacion(nueva_localizacion){
     this.localizacion = nueva_localizacion;
   }

   set _coordenadas(nuevas_coordenadas){
     this.coordenadas = nuevas_coordenadas;
   }

   set _valoracion(nueva_valoracion){
     this.valoracion = nueva_valoracion;
   }
}

module.exports = Punto_interes;
