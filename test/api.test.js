var app = require('../api/api.js');
var request = require('supertest');

var server = app.listen(8080);

describe("Testeando las rutas incluidas en la API de la aplicación", function(){
  describe("1. Testeando la obtención de los datos de un usuario concreto dado su username [HU017]", function(){
    it("Comprobando que se obtienen los datos correctamente " + 
      "(GET /usuarios/Davidspace)", function(done){
      request(app)
        .get('/usuarios/Davidspace')
        .set('Content-Type', 'application/json')
        .send({password: 'password1'})
        .expect('Content-Type', /json/)
        .expect(200, {
          nombre: "David",
          apellidos: 'Garcia Martinez', 
          email: 'dgarmar@gmail.com', 
          username: 'Davidspace',
          password: 'password1', 
          direccion: 'Calle Antequera 38', 
          telefono: '616087213'
        }, done);
    });

    it("Comprobando que se lanza un error avisando de que el username dado no está registrado " +
      "(GET /usuarios/Davidspac)", function(done){
      request(app)
        .get('/usuarios/Davidspac')
        .set('Content-Type', 'application/json')
        .send({password: 'password1'})
        .expect('Content-Type', /json/)
        .expect(404, {
          error: "El username dado, Davidspac, " +
            "no coincide con ninguno de los registrados en la base de datos"
        }, done);
    });

    it("Comprobando que se lanza un error avisando de que la contraseña indicada es incorrecta " +
      "(GET /usuarios/Davidspace)", function(done){
      request(app)
        .get('/usuarios/Davidspace')
        .set('Content-Type', 'application/json')
        .send({password: 'password1000'})
        .expect('Content-Type', /json/)
        .expect(404, {
          error: "La contraseña indicada no es correcta"
        }, done);
    });
  });

  describe("2. Testeando el registro de un nuevo usuario dados sus datos en el body de la request [HU014]", function(){
    it("Comprobando que se obtienen los datos de salida correctos (POST /usuarios)", function(done){
      request(app)
        .post('/usuarios')
        .set('Content-Type', 'application/json')
        .send({nombre: 'Pepito', apellidos: 'Ape Llidos', email: 'pepito@gmail.com', username: 'pepito99',
          password: 'password1', direccion: 'Calle direshao', telefono: '655678901'})
        .expect('Content-Type', /json/)
        .expect(201, {
          nombre: "Pepito",
          apellidos: 'Ape Llidos', 
          email: 'pepito@gmail.com', 
          username: 'pepito99',
          password: 'password1', 
          direccion: 'Calle direshao', 
          telefono: '655678901'
        }, done);
    });

    it("Comprobando que se lanza un error avisando de que falta algún dato por especificar, en este caso " +
      "el teléfono (POST /usuarios)", function(done){
      request(app)
        .post('/usuarios')
        .set('Content-Type', 'application/json')
        .send({nombre: 'Pepito', apellidos: 'Ape Llidos', email: 'pepito@gmail.com', username: 'pepito99',
          password: 'password1', direccion: 'Calle direshao'})
        .expect('Content-Type', /json/)
        .expect(400, {
          error: "Debe indicar todos los datos necesarios para crear un nuevo usuario"
        }, done);
    });
  });

  describe("3. Testeando la modificación de los datos de un usuario determinado, indicando dichas modificaciones" + 
    "en el body de la request [HU015]", function(){
    it("Comprobando que se obtienen los datos de salida correctos " +
      "(PUT /usuarios/Davidspace)", function(done){
      request(app)
        .put('/usuarios/Davidspace')
        .set('Content-Type', 'application/json')
        .send({nombre: 'MODIFICADO'})
        .expect('Content-Type', /json/)
        .expect(200, {
          nombre: "MODIFICADO",
          apellidos: 'Garcia Martinez', 
          email: 'dgarmar@gmail.com', 
          username: 'Davidspace',
          password: 'password1', 
          direccion: 'Calle Antequera 38', 
          telefono: '616087213'
        }, done);
    });

    it("Comprobando que se lanza un error avisando de que el username indicado no está " +
      "registrado (PUT /usuarios/Davidspac)", function(done){
      request(app)
        .put('/usuarios/Davidspac')
        .set('Content-Type', 'application/json')
        .send({nombre: 'MODIFICADO'})
        .expect('Content-Type', /json/)
        .expect(404, {
          error: "El username dado, Davidspac, " +
            "no coincide con ninguno de los registrados en la base de datos"
        }, done);
    });
  });

  describe("4. Testeando la eliminación de los datos de un usuario registrado [HU016]", function(){
    it("Comprobando que se obtienen los datos de salida correctos " +
      "(DELETE /usuarios/Davidspace)", function(done){
      request(app)
        .delete('/usuarios/Davidspace')
        .expect('Content-Type', /json/)
        .expect(200, {
          mensaje: "Borrado con exito el usuario con username Davidspace"
        }, done);
    });

    it("Comprobando que se lanza un error avisando de que el username indicado no está " +
      "registrado (DELETE /usuarios/Davidspac)", function(done){
      request(app)
        .delete('/usuarios/Davidspac')
        .expect('Content-Type', /json/)
        .expect(404, {
          error: "El username dado, Davidspac, " +
            "no coincide con ninguno de los registrados en la base de datos"
        }, done);
    });
  });

  server.close();
});