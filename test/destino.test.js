var expect = require("chai").expect;

const Index = require("../src/index.js");

describe("Testeando las funciones incluidas en destino.js con la interfaz ASSERT de la "
         + "libreria de aserciones CHAI", function(){
  
  /** Testeamos la función correspondiente a HU002 */
  describe("Testeando el método mostrar_destino [HU002]", function(){

    it("Comprobando que se muestra la información del destino correctamente", function(done){
      /** Guardamos el destino localmente (más eficiente)*/
      var destino = Index.destinos[0];

      /** Mostramos la información del destino */
      var informacion_destino = destino.mostrar_destino();

      /** Comprobamos que se muestra la información de Baza */
      expect(informacion_destino[0]).to.equal(destino._nombre);
      expect(informacion_destino[1]).to.equal(destino._descripcion);
      expect(informacion_destino[2]).to.equal(destino._pais);
      expect(informacion_destino[3]).to.equal(destino._poblacion);
      expect(informacion_destino[4]).to.equal(destino._gentilicio);
      expect(informacion_destino[5]).to.equal(destino._sitio_web);
      expect(informacion_destino[6]).to.equal(destino._valoracion);
      expect(informacion_destino[7]).to.equal(destino._alojamientos);
      expect(informacion_destino[8]).to.equal(destino._puntos_interes);
      expect(informacion_destino[9]).to.equal(destino._transportes);

      var informacion_length = informacion_destino.length;
            
      /** Comprobamos que hay 10 datos */
      expect(informacion_length).to.equal(10);
      done();
    });
  });      
});