var expect = require("chai").expect;

const Alojamiento = require("../src/alojamiento.js");
const Punto_interes = require("../src/punto_interes.js");
const Transporte = require("../src/transporte.js");
const Index = require("../src/index.js");

describe("Testeando las funciones incluidas en index.js con la interfaz ASSERT de la "
         + "libreria de aserciones CHAI", function(){
  
  /** Testeamos la función correspondiente a HU001 */
  describe("Testeando el método mostrar_destinos [HU001]", function(){

    it("Comprobando que se muestra el listado de destinos correctamente", function(done){
      /** Mostramos los destinos */
      var destinos_mostrados = Index.mostrar_destinos();

      expect(destinos_mostrados[0]).to.equal('Baza');
      expect(destinos_mostrados[1]).to.equal('Guadix');

      /** Comprobamos que se muestran dos destinos */
      destinos_length = destinos_mostrados.length;
      
      expect(destinos_length).to.equal(2);
      done();
    });
  });
  
  /** Testeamos la función correspondiente a HU003 */
  describe("Testeando el método anadir_peticion_alojamiento [HU003]", function(){

    it("Comprobando que se envia la petición correctamente", function(done){
      /** Creamos el alojamiento que queremos añadir al destino */
      var alojamiento_test = new Alojamiento("Hotel de testeo", "Testeando", "Hotel",
                                             "Testelandia", "37.4883337, -2.7229805", "10.0");
                                            
      /** Enviamos la petición */
      var duplicado = Index.anadir_peticion_alojamiento(alojamiento_test, Index.destinos[0]);

      /** Si la variable duplicado el false, significa que no existia otro alojamiento con ese nombre
       *  y la petición ha sido enviada correctamente
       */
      expect(duplicado).to.equal(false);
      done();
    });
  });
  
  /** Testeamos la función correspondiente a HU004 */
  describe("Testeando el método anadir_peticion_punto_interes [HU004]", function(){

    it("Comprobando que se envia la petición correctamente", function(done){
      /** Creamos el punto de interés que queremos añadir al destino */
      var punto_interes_test = new Punto_interes("Plaza de testeo", "La más testeada", "Testilandia",
      "37.3023222 ,-3.1132736", "9.9");
                                            
      /** Enviamos la petición */
      var duplicado = Index.anadir_peticion_punto_interes(punto_interes_test, Index.destinos[0]);

      /** Si la variable duplicado el false, significa que no existia otro punto de interés con ese nombre
       *  y la petición ha sido enviada correctamente
       */
      expect(duplicado).to.equal(false);
      done();
    });
  });

  /** Testeamos la función correspondiente a HU005 */
  describe("Testeando el método anadir_peticion_transporte [HU005]", function(){

    it("Comprobando que se envia la petición correctamente", function(done){
      /** Creamos el transporte que queremos añadir al destino */
      var transporte_test = new Transporte("Testibus", "Buses mega testeados", "Autotest", "TestCity",
      "9.8", "07:00", "23:00");
                                            
      /** Enviamos la petición */
      var duplicado = Index.anadir_peticion_transporte(transporte_test, Index.destinos[0]);

      /** Si la variable duplicado el false, significa que no existia otro transporte con ese nombre
       *  y la petición ha sido enviada correctamente
       */
      expect(duplicado).to.equal(false);
      done();
    });
  });
});