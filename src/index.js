const Alojamiento = require("./alojamiento.js");
const Punto_interes = require("./punto_interes.js");
const Transporte = require("./transporte.js");
const Destino = require("./destino.js");
const Punto_interes = require("./punto_interes.js");

/** Debido a que aún no cuento con una BD, usaré arrays globales para que actuen como tal */
var alojamientos_baza = [];

alojamientos_baza.push(new Alojamiento("Hostal David", "Increible alojamiento", "Hostal",
                                       "Baza", "37.4888637, -2.7709805", "8.7"));

var alojamientos_guadix = [];

alojamientos_guadix.push(new Alojamiento("Hotel Hoja", "Somos los mejores", "Hotel",
                                         "Guadix", "37.3006914 ,-3.1351956", "9.1"));

var puntos_interes_baza = [];

puntos_interes_baza.push(new Punto_interes("Plaza Mayor", "La más grande", "Baza",
                                           "37.3023453 ,-3.0232736", "9.3"));

var puntos_interes_guadix = [];

puntos_interes_guadix.push(new Punto_interes("Plaza Menor", "No tan grande", "Guadix",
                                             "37.3006662 ,-3.1452778", "8.5"));

var transportes_baza = [];

transportes_baza.push(new Transporte("Alsama", "Buses mega rápidos", "Autobus", "Baza",
                                     "9.7", "07:00", "23:00"));

var transportes_guadix = [];

transportes_guadix.push(new Transporte("Guataxi", "Taxis para todos", "Taxi", "Guadix",
                                       "9.7", "07:00", "23:00"));

var destinos = [];

destinos.push(new Destino("Baza", "Baza es el mejor pueblo que existe", "España",
                          25000, "Bastetano", "www.baza.com", 9.2,
                          alojamientos_baza, puntos_interes_baza,
                          transportes_baza));

destinos.push(new Destino("Guadix", "Guadix es el segundo mejor pueblo que existe", "España",
                          24000, "Accitano", "www.guadix.com", 9.1,
                          alojamientos_guadix, puntos_interes_guadix,
                          transportes_guadix));


/**
 * [HU001] Función que muestra por pantalla el nombre de todos los destinos disponibles
 */
function mostrar_destinos(){
  /**
   * var nombre_destinos = "Los destinos disponibles son: \n\n";
   * 
   * for (destino in destinos){
   *   nombre_destinos += destino._nombre + "\n";
   * }
   * 
   * console.log(nombre_destinos);
   */

  var nombre_destinos = [];

  for (destino of destinos){
    nombre_destinos.push(destino._nombre);
  }

  return nombre_destinos;
}

/**
 * [HU003] Método que permite enviar un nuevo alojamiento como petición 
 * para que sea añadido al listado del destino seleccionado
 * 
 * @param {Alojamiento} nuevo_alojamiento - Alojamiento sobre el cual se realizará la petición 
 *                                          para que sea añadido al listado del destino seleccionado
 * 
 * @param {Destino} destino - Destino cuyo listado de alojamientos es donde se desea añadir el 
 *                            alojamiento sobre el que se enviará la petición
 */
function anadir_peticion_alojamiento(nuevo_alojamiento, destino){
  for (alojamiento of destino._alojamientos){
    if (alojamiento._nombre == nuevo_alojamiento._nombre){
      /** console.log("El alojamiento con nombre " + nuevo_alojamiento._nombre + 
       *              "ya figura en la base de datos \n"); */

      throw new Error ('Alojamiento ya existente');
    }
  }

  var peticion = [];

  peticion.push(nuevo_alojamiento);
  peticion.push(destino);

  peticiones_alojamientos.push(peticion);

  /** console.log("La petición para la adición del alojamiento con nombre " + nuevo_alojamiento._nombre + 
  *              "ha sido añadida correctamente \n"); */
}

/**
 * [HU004] Método que permite enviar un nuevo punto de interés como petición 
 * para que sea añadido al listado del destino seleccionado
 * 
 * @param {Punto_interes} nuevo_punto_interes - Punto de interés sobre el cual se realizará la petición 
 *                                              para que sea añadido al listado del destino seleccionado
 * 
 * @param {Destino} destino - Destino cuyo listado de puntos de interés es donde se desea añadir el 
 *                            punto de interés sobre el que se enviará la petición
 */
function anadir_peticion_punto_interes(nuevo_punto_interes, destino){
  for (punto_interes of destino._puntos_interes){
    if (punto_interes._nombre == nuevo_punto_interes._nombre){
      /** console.log("El punto de interés con nombre " + nuevo_punto_interes._nombre + 
       *              "ya figura en la base de datos \n"); */

      throw new Error ('Punto de interés ya existente');
    }
  }

  var peticion = [];

  peticion.push(nuevo_punto_interes);
  peticion.push(destino);

  peticiones_puntos_interes.push(peticion);

  /** console.log("La petición para la adición del punto de interés con nombre 
   *              " + nuevo_punto_interes._nombre + " ha sido añadida correctamente \n"); */
}

module.exports = {mostrar_destinos};
