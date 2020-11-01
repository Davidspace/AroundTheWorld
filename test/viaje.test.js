var expect = require("chai").expect;

const Index = require("../src/index.js");

describe("Testeando las funciones incluidas en viaje.js con la interfaz ASSERT de la "
         + "libreria de aserciones CHAI", function(){
  
  /** Testeamos la función correspondiente a HU006 */
  describe("Testeando el método anadir_reserva_alojamiento [HU006]", function(){

    it("Comprobando que la reserva se almacena correctamente", function(done){
      /** Creamos nuestro viaje */
      var viaje = new Viaje("Viaje de prueba");

      /** Añadimos la reserva a nuestro viaje */
      var num_reservas = viaje.anadir_reserva_alojamiento(Index.alojamientos_baza[0], new Date(2020, 12, 12), new Date(2020, 12, 14));
      
      /** Comprobamos que la nueva longitud del array de alojamientos reservados es 1 */
      expect(num_reservas).to.equal(1);
      done()
    });
  });      
});