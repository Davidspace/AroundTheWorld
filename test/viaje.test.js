var expect = require("chai").expect;

const Index = require("../src/index.js");

describe("Testeando las funciones incluidas en viaje.js con la interfaz ASSERT de la "
         + "libreria de aserciones CHAI", function(){
  
  /** Testeamos la función correspondiente a HU006 */
  describe("Testeando el método anadir_reserva_alojamiento [HU006]", function(){

    it("Comprobando que la reserva del alojamiento se almacena correctamente", function(done){
      /** Añadimos la reserva del alojamiento a nuestro viaje */
      var num_reservas = Index.viajes[0].anadir_reserva_alojamiento(Index.alojamientos_baza[0], 
                                                                    new Date(2020, 12, 12), 
                                                                    new Date(2020, 12, 14));
      
      /** Comprobamos que la nueva longitud del array de alojamientos reservados es 1 */
      expect(num_reservas).to.equal(1);
      done()
    });
  }); 
  
  /** Testeamos la función correspondiente a HU007 */
  describe("Testeando el método anadir_reserva_punto_interes [HU007]", function(){

    it("Comprobando que la reserva del punto de interés se almacena correctamente", function(done){
      /** Añadimos la reserva del punto de interés a nuestro viaje */
      var num_reservas = Index.viajes[0].anadir_reserva_punto_interes(Index.puntos_interes_baza[0], 
                                                                      new Date(2020, 12, 12, 11, 0, 0));
      
      /** Comprobamos que la nueva longitud del array de puntos de interés reservados es 1 */
      expect(num_reservas).to.equal(1);
      done()
    });
  });

  /** Testeamos la función correspondiente a HU008 */
  describe("Testeando el método anadir_reserva_transporte [HU008]", function(){

    it("Comprobando que la reserva del transporte se almacena correctamente", function(done){
      /** Añadimos la reserva del transporte a nuestro viaje */
      var num_reservas = Index.viajes[0].anadir_reserva_transporte(Index.transportes_baza[0], 
                                                                      new Date(2020, 12, 12, 9, 30, 0));
      
      /** Comprobamos que la nueva longitud del array de puntos de interés reservados es 1 */
      expect(num_reservas).to.equal(1);
      done()
    });
  });

  /** Testeamos la función correspondiente a HU009 */
  describe("Testeando el método eliminar_reserva_alojamiento [HU009]", function(){

    it("Comprobando que la reserva del alojamiento se elimina correctamente", function(done){
      /** Obtenemos el nombre del alojamiento cuya reserva queremos deshacer */
      var nombre_alojamiento = Index.viajes[0]._alojamientos[0]._nombre;

      /** Eliminamos la reserva del alojamiento con dicho nombre */
      var reserva_eliminada = Index.viajes[0].eliminar_reserva_alojamiento(nombre_alojamiento);

      /** Comprobamos que, efectivamente, la reserva eliminada ha sido la que deseabamos */
      expect(reserva_eliminada[0]._nombre).to.equal(nombre_alojamiento);

      /** Comprobamos también que tras eliminar esa reserva, que era la única existente,
       *  el array de reservas de alojamientos queda vacio
       */
      expect(Index.viajes[0]._alojamientos.length).to.equal(0);
      done()
    });
  });

  /** Testeamos la función correspondiente a HU010 */
  describe("Testeando el método eliminar_reserva_punto_interes [HU010]", function(){

    it("Comprobando que la reserva del punto de interés se elimina correctamente", function(done){
      /** Obtenemos el nombre del punto de interés cuya reserva queremos deshacer */
      var nombre_punto_interes = Index.viajes[0]._puntos_interes[0]._nombre;

      /** Eliminamos la reserva del punto de interés con dicho nombre */
      var reserva_eliminada = Index.viajes[0].eliminar_reserva_punto_interes(nombre_punto_interes);

      /** Comprobamos que, efectivamente, la reserva eliminada ha sido la que deseabamos */
      expect(reserva_eliminada[0]._nombre).to.equal(nombre_punto_interes);

      /** Comprobamos también que tras eliminar esa reserva, que era la única existente,
       *  el array de reservas de puntos de interés queda vacio
       */
      expect(Index.viajes[0]._puntos_interes.length).to.equal(0);
      done()
    });
  });

  /** Testeamos la función correspondiente a HU011 */
  describe("Testeando el método eliminar_reserva_transporte [HU011]", function(){

    it("Comprobando que la reserva del transporte se elimina correctamente", function(done){
      /** Obtenemos el nombre del transporte cuya reserva queremos deshacer */
      var nombre_transporte = Index.viajes[0]._transportes[0]._nombre;

      /** Eliminamos la reserva del transporte con dicho nombre */
      var reserva_eliminada = Index.viajes[0].eliminar_reserva_transporte(nombre_transporte);

      /** Comprobamos que, efectivamente, la reserva eliminada ha sido la que deseabamos */
      expect(reserva_eliminada[0]._nombre).to.equal(nombre_transporte);

      /** Comprobamos también que tras eliminar esa reserva, que era la única existente,
       *  el array de reservas de transportes queda vacio
       */
      expect(Index.viajes[0]._transportes.length).to.equal(0);
      done()
    });
  });
});