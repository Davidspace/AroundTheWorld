var viajes = require('./viajes.json');

module.exports = (req, res) => {
  if (req.query.username != undefined){
    username = req.query.username;

    var mensaje = "";

    mensaje += "Tus viajes son: ";

    var i, j = 0;
              
    for (i = 0; i < viajes.length; i++){
      if (viajes[i]['usuario'] === username){
        mensaje += "\n\nUsuario: " + viajes[i]['usuario'] + "\n" +
          "Nombre del destino: " + viajes[i]['nombre_destino'] + "\n\n" +
          "Alojamientos:\n" + 
          " Nombre: " + viajes[i]['alojamientos']['nombre'] + "\n" + 
          " Descripción: " + viajes[i]['alojamientos']['descripcion'] + "\n" + 
          " Tipo: " + viajes[i]['alojamientos']['tipo'] + "\n" + 
          " Localización: " + viajes[i]['alojamientos']['localizacion'] + "\n" + 
          " Coordenadas: " + viajes[i]['alojamientos']['coordenadas'] + "\n" + 
          " Valoración: " + viajes[i]['alojamientos']['valoracion'] + "\n" + 
          " Precio: " + viajes[i]['alojamientos']['precio'] + "\n";

        mensaje += "Puntos de interés:\n"
          " Nombre: " + viajes[i]['puntos_interes']['nombre'] + "\n" + 
          " Descripción: " + viajes[i]['puntos_interes']['descripcion'] + "\n" + 
          " Localización: " + viajes[i]['puntos_interes']['localizacion'] + "\n" + 
          " Coordenadas: " + viajes[i]['puntos_interes']['coordenadas'] + "\n" + 
          " Valoración: " + viajes[i]['puntos_interes']['valoracion'] + "\n" + 
          " Precio: " + viajes[i]['puntos_interes']['precio'] + "\n";
        
        mensaje += "Transportes:\n"
          " Nombre: " + viajes[i]['transportes']['nombre'] + "\n" + 
          " Descripción: " + viajes[i]['transportes']['descripcion'] + "\n" +
          " Tipo: " + viajes[i]['transportes']['tipo'] + "\n" +  
          " Localización: " + viajes[i]['transportes']['localizacion'] + "\n" +
          " Valoración: " + viajes[i]['transportes']['valoracion'] + "\n" + 
          " Hora de inicio: " + viajes[i]['transportes']['hora_inicio'] + "\n" +
          " Hora de fin: " + viajes[i]['transportes']['hora_fin'] + "\n" +
          " Precio: " + viajes[i]['transportes']['precio'] + "\n";

        mensaje += "Precio: " + viajes[i]['precio'];
      }
    }

    if (mensaje.endsWith('son:')){
      mensaje += "¡ninguno! ¿No has pensado en darte un capricho?";
    }

    res.status(200).send(mensaje);
  }
}