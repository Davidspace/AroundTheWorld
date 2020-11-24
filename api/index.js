module.exports = (req, res) => {

  var jsonData = require('./viajes.json');

  var viajes = [];

  jsonData.forEach(function(obj){
    viajes.push(obj);
  });

  var mensaje = "";

  if (viajes.length !== 0){
    viajes.forEach(function(obj){
      mensaje += "{" + "Destino: " + obj.nombre + 
        "Alojamientos: " + obj.alojamientos + 
        "Puntos de interés: " + obj.puntos_interes + 
        "Transportes: " + obj.transportes + 
        "Precio: " + obj.precio + "}";
    });
  }

  else{
    mensaje = "Aún no existen viajes en preparación o completados";
  }

  res.status(200).send(JSON.stringify(mensaje))
}