var app = require('../api/api.js');
var request = require('supertest');

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
          nombre: 'Pepito',
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
          error: "No se han proporcionado todos los datos necesarios para la creación " + 
            "de un nuevo usuario"
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

  describe("5. Testeando la obtención del listado de alojamientos registrados [HU018]", function(){
    it("Comprobando que se obtienen los datos de salida correctos " +
      "(GET /alojamientos)", function(done){
      request(app)
        .get('/alojamientos')
        .expect('Content-Type', /json/)
        .expect(200, [
          {
            "nombre": "Hostal David",
            "descripcion": "Hostal",
            "tipo": "Increible alojamiento",
            "localizacion": "Baza",
            "coordenadas": "37.4888637, -2.7709805",
            "valoracion": "8.7",
            "precio": 40
          },
          {
            "nombre": "Hotel Hoja",
            "descripcion": "Hotel",
            "tipo": "Somos los mejores",
            "localizacion": "Guadix",
            "coordenadas": "37.3006914 ,-3.1351956",
            "valoracion": "9.1",
            "precio": 30
          }
        ], done);
    });
  });

  describe("6. Testeando la obtención del listado de puntos de interés registrados [HU019]", function(){
    it("Comprobando que se obtienen los datos de salida correctos " +
      "(GET /puntos_interes)", function(done){
      request(app)
        .get('/puntos_interes')
        .expect('Content-Type', /json/)
        .expect(200, [
          {
            "nombre": "Plaza Mayor",
            "descripcion": "La más grande",
            "localizacion": "Baza",
            "coordenadas": "37.3023453 ,-3.0232736",
            "valoracion": "9.3",
            "precio": 0
          },
          {
            "nombre": "Plaza Menor",
            "descripcion": "No tan grande",
            "localizacion": "Guadix",
            "coordenadas": "37.3006662 ,-3.1452778",
            "valoracion": "8.5",
            "precio": 0
          }
        ], done);
    });
  });

  describe("7. Testeando la obtención del listado de transportes registrados [HU020]", function(){
    it("Comprobando que se obtienen los datos de salida correctos " +
      "(GET /transportes)", function(done){
      request(app)
        .get('/transportes')
        .expect('Content-Type', /json/)
        .expect(200, [
          {
            "nombre": "Alsama",
            "descripcion": "Buses mega rápidos",
            "tipo": "Autobus",
            "localizacion": "Baza",
            "valoracion": "9.7",
            "hora_inicio": "07:00",
            "hora_fin": "23:00"
          },
          {
            "nombre": "Guataxi",
            "descripcion": "Taxis para todos",
            "tipo": "Taxi",
            "localizacion": "Guadix",
            "valoracion": "9.7",
            "hora_inicio": "07:00",
            "hora_fin": "23:00"
          }
        ], done);
    });
  });

  describe("8. Testeando la obtención del listado de destinos registrados [HU001]", function(){
    it("Comprobando que se obtienen los datos de salida correctos " +
      "(GET /destinos)", function(done){
      request(app)
        .get('/destinos')
        .expect('Content-Type', /json/)
        .expect(200, [
          {
            "nombre": "Baza",
            "descripcion": "Baza es el mejor pueblo que existe",
            "pais": "España",
            "poblacion": 25000,
            "gentilicio": "Bastetano",
            "sitio_web": "www.baza.com",
            "valoracion": 9.2,
            "alojamientos": {
              "nombre": "Hostal David",
              "descripcion": "Hostal",
              "tipo": "Increible alojamiento",
              "localizacion": "Baza",
              "coordenadas": "37.4888637, -2.7709805",
              "valoracion": "8.7",
              "precio": 40
            },
            "puntos_interes": {
              "nombre": "Plaza Mayor",
              "descripcion": "La más grande",
              "localizacion": "Baza",
              "coordenadas": "37.3023453 ,-3.0232736",
              "valoracion": "9.3",
              "precio": 0
            },
            "transportes": {
              "nombre": "Alsama",
              "descripcion": "Buses mega rápidos",
              "tipo": "Autobus",
              "localizacion": "Baza",
              "valoracion": "9.7",
              "hora_inicio": "07:00",
              "hora_fin": "23:00"
            }
          },
          {
            "nombre": "Guadix",
            "descripcion": "Guadix es el segundo mejor pueblo que existe",
            "pais": "España",
            "poblacion": 24000,
            "gentilicio": "Accitano",
            "sitio_web": "www.guadix.com",
            "valoracion": 9.1,
            "alojamientos": {
              "nombre": "Hotel Hoja",
              "descripcion": "Hotel",
              "tipo": "Somos los mejores",
              "localizacion": "Guadix",
              "coordenadas": "37.3006914 ,-3.1351956",
              "valoracion": "9.1",
              "precio": 30
            },
            "puntos_interes": {
              "nombre": "Plaza Menor",
              "descripcion": "No tan grande",
              "localizacion": "Guadix",
              "coordenadas": "37.3006662 ,-3.1452778",
              "valoracion": "8.5",
              "precio": 0
            },
            "transportes": {
              "nombre": "Guataxi",
              "descripcion": "Taxis para todos",
              "tipo": "Taxi",
              "localizacion": "Guadix",
              "valoracion": "9.7",
              "hora_inicio": "07:00",
              "hora_fin": "23:00"
            }
          }
        ], done);
    });
  });
});