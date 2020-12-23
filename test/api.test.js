var app = require('../api/api.js');
var request = require('supertest');

describe("Testeando las rutas incluidas en la API de la aplicación", function() {
  describe("1. Testeando la obtención del listado de los usuarios registrados (GET /usuarios)", function() {
    it("Comprobando que se obtiene el listado correctamente", function(done){
      request(app)
      .get('/usuarios')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });

  describe("2. Testeando la obtención de los datos de un usuario concreto dado su username " + 
    "(GET /usuarios/Davidspace)", function() {
    it("Comprobando que se obtienen los datos correctamente", function(done){
      request(app)
      .get('/usuarios/Davidspace')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });

    it("Comprobando que se lanza un error avisando de que el username dado no está registrado " +
      "(GET /usuarios/Davidspac)", function(done){
      request(app)
      .get('/usuarios/Davidspac')
      .expect('Content-Type', /json/)
      .expect(404, done);
    });
  });

  describe("3. Testeando el registro de un nuevo usuario dados sus datos en el body de la request " + 
    "(PUT /usuarios)", function() {
    it("Comprobando que se obtienen los datos de salida correctos", function(done){
      request(app)
      .put('/usuarios')
      .set('Content-Type', 'application/json')
      .send({nombre: 'Pepito', apellidos: 'Ape Llidos', email: 'pepito@gmail.com', username: 'pepito99',
        password: 'password1', direccion: 'Calle direshao', telefono: '655678901'})
      .expect('Content-Type', /json/)
      .expect(201, done);
    });

    it("Comprobando que se lanza un error avisando de que falta algún dato por especificar, en este caso " +
      "el teléfono (PUT /usuarios)", function(done){
      request(app)
      .put('/usuarios')
      .set('Content-Type', 'application/json')
      .send({nombre: 'Pepito', apellidos: 'Ape Llidos', email: 'pepito@gmail.com', username: 'pepito99',
        password: 'password1', direccion: 'Calle direshao'})
      .expect('Content-Type', /json/)
      .expect(400, done);
    });
  });

  describe("4. Testeando la modificación de los datos de un usuario determinado, indicando dichas modificaciones" + 
    "en el body de la request (POST /usuarios/Davidspace)", function() {
    it("Comprobando que se obtienen los datos de salida correctos", function(done){
      request(app)
      .post('/usuarios/Davidspace')
      .set('Content-Type', 'application/json')
      .send({nombre: 'MODIFICADO'})
      .expect('Content-Type', /json/)
      .expect(200, done);
    });

    it("Comprobando que se lanza un error avisando de que el username indicado no está " +
      "registrado (POST /usuarios/Davidspac)", function(done){
      request(app)
      .post('/usuarios/Davidspac')
      .set('Content-Type', 'application/json')
      .send({nombre: 'MODIFICADO'})
      .expect('Content-Type', /json/)
      .expect(404, done);
    });
  });

  describe("5. Testeando la eliminación de los datos de un usuario registrado " + 
    "(DELETE /usuarios/Davidspace)", function() {
    it("Comprobando que se obtienen los datos de salida correctos", function(done){
      request(app)
      .delete('/usuarios/Davidspace')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });

    it("Comprobando que se lanza un error avisando de que el username indicado no está " +
      "registrado (DELETE /usuarios/pepote9)", function(done){
      request(app)
      .delete('/usuarios/pepote9')
      .expect('Content-Type', /json/)
      .expect(404, done);
    });
  });
});