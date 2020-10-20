var expect = require("chai").expect;

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
});