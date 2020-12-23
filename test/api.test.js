var app = require('../api/api.js');
var request = require('supertest');

describe("Testeando las rutas incluidas en la API de la aplicación", function() {
  describe("1. Testeando la obtención del listado de los usuarios registrados", function() {
    it("Comprobando que se obtiene el listado correctamente", function(done){
      request(app);
      .put('/usuarios')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });
});