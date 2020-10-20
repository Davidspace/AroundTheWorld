const Alojamiento = require("./alojamiento.js");
const Punto_interes = require("./punto_interes.js");
const Transporte = require("./transporte.js");
const Destino = require("./destino.js");

/** Debido a que aún no cuento con una BD, usaré arrays globales para que actuen como tal */
var destinos = [];


/**
 * [HU001] Función que muestra por pantalla el nombre de todos los destinos disponibles
 */
function mostrar_destinos(destinos){
  var nombre_destinos;

  for (destino in destinos){
    nombre_destinos.push(destino.nombre());
  }

  return nombre_destinos;
}

module.exports = mostrar_destinos;
