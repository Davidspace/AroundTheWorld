var expect = require("chai").expect;

const Alojamiento = require("../src/alojamiento.js");
const Punto_interes = require("../src/punto_interes.js");
const Transporte = require("../src/transporte.js");
const Viaje = require("../src/viaje.js");
const Index = require("../src/index.js");

describe("Testeando las funciones incluidas en viaje.js con la interfaz ASSERT de la "
         + "libreria de aserciones CHAI", function(){
  
  /** Testeamos la función correspondiente a HU006 */
  describe("Testeando el método anadir_reserva_alojamiento [HU006]", function(){

    it("Comprobando que la reserva del alojamiento se almacena correctamente", function(done){
      /** Añadimos la reserva a nuestro viaje */
      var num_reservas = Index.viajes[0].anadir_reserva_alojamiento(Index.alojamientos_baza[0], 
                                                                    new Date(2020, 12, 12), 
                                                                    new Date(2020, 12, 14));
      
      /** Comprobamos que la nueva longitud del array de alojamientos reservados es 1 */
      expect(num_reservas).to.equal(1);
      done()
    });
  });  
});