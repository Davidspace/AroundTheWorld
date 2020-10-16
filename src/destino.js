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
   * @param {Object[]} alojamientos - Array de alojamientos disponibles en el destino
   * @param {Object[]} puntos_interes - Array de puntos de interés con los que cuenta el destino
   * @param {Object[]} transportes - Array de transportes disponibles en el destino
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

  get nombre(){
    return this.nombre;
  }

  get descripcion(){
    return this.descripcion;
  }

  get pais(){
    return this.pais;
  }

  get poblacion(){
    return this.poblacion;
  }

  get gentilicio(){
    return this.gentilicio;
  }

  get sitio_web(){
    return this.sitio_web;
  }

  get valoracion(){
    return this.valoracion;
  }

  get alojamientos(){
    return this.alojamientos;
  }

  get puntos_interes(){
    return this.puntos_interes;
  }

  get transportes(){
    return this.transportes;
  }

  /**
   * Métodos set de la clase Destino
   */

   set nombre(nuevo_nombre){
     this.nombre = nuevo_nombre;
   }

   set descripcion(nueva_descripcion){
     this.descripcion = nueva_descripcion;
   }

   set pais(nuevo_pais){
     this.pais = nuevo_pais;
   }

   set poblacion(nueva_poblacion){
     this.poblacion = nueva_poblacion;
   }

   set gentilicio(nuevo_gentilicio){
     this.gentilicio = nuevo_gentilicio;
   }

   set sitio_web(nuevo_sitio_web){
     this.sitio_web = nuevo_sitio_web;
   }

   set valoracion(nueva_valoracion){
     this.valoracion = nueva_valoracion;
   }

   set alojamientos(nuevos_alojamientos){
     this.alojamientos = nuevos_alojamientos;
   }

   set puntos_interes(nuevos_puntos_interes){
     this.puntos_interes = nuevos_puntos_interes;
   }

   set transportes(nuevos_transportes){
     this.transportes = nuevos_transportes;
   }
}
