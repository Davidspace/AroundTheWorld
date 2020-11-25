var viajes = require('./viajes.json');

module.exports = (req, res) => {
  if (req.query.username != undefined){
    username = req.query.username;

    var mensaje = "Tus viajes son: ";

    var i, j = 0;

    if (viajes.length > 0){        
      for (i = 0; i < viajes.length; i++){
        if (viajes[i]['usuario'] === username){
          mensaje += "\n\nUsuario: " + viajes[i]['usuario'] + "\n" +
            "Nombre del destino: " + viajes[i]['nombre_destino'] + "\n" +
            "Alojamientos:";

          for (j = 0; j < viajes[i]['alojamientos'].length; j++){
            mensaje += "   \nNombre: " + viajes[i]['alojamientos'][j]['nombre'] + "\n" + 
              "   Descripción: " + viajes[i]['alojamientos'][j]['descripcion'] + "\n" + 
              "   Tipo: " + viajes[i]['alojamientos'][j]['tipo'] + "\n" + 
              "   Localización: " + viajes[i]['alojamientos'][j]['localizacion'] + "\n" + 
              "   Coordenadas: " + viajes[i]['alojamientos'][j]['coordenadas'] + "\n" + 
              "   Valoración: " + viajes[i]['alojamientos'][j]['valoracion'] + "\n" + 
              "   Precio: " + viajes[i]['alojamientos'][j]['precio'] + "\n";
          }

          mensaje += "Puntos de interés:";

          for (j = 0; j < viajes[i]['puntos_interes'].length; j++){
            mensaje += "   \nNombre: " + viajes[i]['puntos_interes'][j]['nombre'] + "\n" + 
              "   Descripción: " + viajes[i]['puntos_interes'][j]['descripcion'] + "\n" + 
              "   Localización: " + viajes[i]['puntos_interes'][j]['localizacion'] + "\n" + 
              "   Coordenadas: " + viajes[i]['puntos_interes'][j]['coordenadas'] + "\n" + 
              "   Valoración: " + viajes[i]['puntos_interes'][j]['valoracion'] + "\n" + 
              "   Precio: " + viajes[i]['puntos_interes'][j]['precio'] + "\n";
          }
          
          mensaje += "Transportes:";

          for (j = 0; j < viajes[i]['transportes'].length; j++){
            mensaje += "   \nNombre: " + viajes[i]['transportes'][j]['nombre'] + "\n" + 
              "   Descripción: " + viajes[i]['transportes'][j]['descripcion'] + "\n" +
              "   Tipo: " + viajes[i]['transportes'][j]['tipo'] + "\n" +  
              "   Localización: " + viajes[i]['transportes'][j]['localizacion'] + "\n" +
              "   Valoración: " + viajes[i]['transportes'][j]['valoracion'] + "\n" + 
              "   Hora de inicio: " + viajes[i]['transportes'][j]['hora_inicio'] + "\n" +
              "   Hora de fin: " + viajes[i]['transportes'][j]['hora_fin'] + "\n" +
              "   Precio: " + viajes[i]['transportes'][j]['precio'] + "\n";
          }

          mensaje += "Precio: " + viajes[i]['precio'];
        }
      }
    }

    else{
      mensaje += "¡ninguno! ¿No has pensado en darte un capricho?";
    }

    res.status(200).send(mensaje);
  }
}