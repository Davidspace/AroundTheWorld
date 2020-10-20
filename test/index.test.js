var expect = require("chai").expect;
const Alojamiento = require("../src/alojamiento.js");
const Punto_interes = require("../src/punto_interes.js");
const Transporte = require("../src/transporte.js");
const Destino = require("../src/destino.js");
const Index = require("../src/index.js");

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

describe("Testeando las funciones incluidas en index.js con la interfaz ASSERT de la "
         + "libreria de aserciones CHAI", function(){
  
  /** Testeamos la función correspondiente a HU001 */
  describe("Testeando el método mostrar_destinos [HU001]", function(){

    it("Comprobando que se muestra el listado de destinos correctamente", function(done){
      /** Mostramos los destinos */
      var destinos_mostrados = Index.mostrar_destinos();

      /** Comprobamos que se muestran como destinos Baza y Guadix */
      expect(destinos_mostrados[0]).to.equal('Baza');
      expect(destinos_mostrados[1]).to.equal('Guadix');

      var destinos_length = destinos_mostrados.length;
            
      /** Comprobamos que hay dos destinos */
      expect(destinos_length).to.equal(2);
      done();
    });
  });      
});


describe("Testeando las funciones incluidas en destino.js con la interfaz ASSERT de la "
         + "libreria de aserciones CHAI", function(){
  
  /** Testeamos la función correspondiente a HU002 */
  describe("Testeando el método mostrar_destino [HU002]", function(){

    it("Comprobando que se muestra la información del destino correctamente", function(done){
      /** Mostramos la información del destino */
      var informacion_destino = destinos[0].mostrar_destino();

      /** Comprobamos que se muestra la información de Baza*/
      expect(informacion_destino[0]).to.equal('Baza');
      expect(informacion_destino[0]).to.equal('Baza es el mejor pueblo que existe');
      expect(informacion_destino[0]).to.equal('España');
      expect(informacion_destino[0]).to.equal(25000);
      expect(informacion_destino[0]).to.equal('Bastetano');
      expect(informacion_destino[0]).to.equal('www.baza.com');
      expect(informacion_destino[0]).to.equal(9.2);

      var informacion_length = informacion_destino.length;
            
      /** Comprobamos que hay 10 datos */
      expect(informacion_length).to.equal(10);
      done();
    });
  });      
});