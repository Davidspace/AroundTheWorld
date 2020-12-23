var app = require('../api/api.js');
var request = require('supertest');

describe("Testeando las rutas incluidas en la API de la aplicación", function() {
  describe("1. Testeando la obtención del listado de los usuarios registrados", function() {
    it("Comprobando que se obtiene el listado correctamente", function(done){
      request(app)
      .put('/usuarios')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });

  describe("2. Testeando la obtención de los datos de un usuario concreto dado su username", function() {
    it("Comprobando que se obtienen los datos correctamente", function(done){
      request(app)
      .put('/usuarios/Davidspace')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });

    it("Comprobando que se lanza un error avisando de que el username dado no está registrado", function(done){
      request(app)
      .put('/usuarios/Davidspac')
      .expect('Content-Type', /json/)
      .expect(404, done)
    });
  });
});