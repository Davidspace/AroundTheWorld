const Alojamiento = require("./alojamiento.js");
const Punto_interes = require("./punto_interes.js");
const Transporte = require("./transporte.js");
const Destino = require("./destino.js");

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
  for (destino in destinos){
    console.log(destino.nombre());
  }
}
