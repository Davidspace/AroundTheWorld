var viajes = require('./viajes.json');

module.exports = (req, res) => {
  /* Solamente llevaremos a cabo el listado de los viajes del usuario si se nos pasa
    mediante una variable GET el username de dicho usuario */
  if (req.query.username != undefined){
    var mensaje = "Tus viajes son: ";

    var existen_viajes_usuario = 0;

    /* Comprobamos que haya viajes almacenados en el fichero JSON dedicado a ello para
      buscar en ellos los relacionados con el usuario */
    if (viajes.length > 0){
      username = req.query.username;  
      
      var i, j = 0;

      /* Recorremos todos los viajes en busca de los relacionados con el usuario */
      for (i = 0; i < viajes.length; i++){
        /* Si el campo usuario coincide con el username pasado por GET añadimos al listado 
          dicho viaje */
        if (viajes[i]['usuario'] === username){
          if (existen_viajes_usuario == 0){
            existen_viajes_usuario = 1;
          }

          mensaje += "\n\nUsuario: " + viajes[i]['usuario'] + "\n" +
            "Nombre del destino: " + viajes[i]['nombre_destino'] + "\n" +
            "Alojamientos:";

          /* Añadimos todos los alojamientos del viaje al listado */
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

          /* Añadimos todos los puntos de interés del viaje al listado */
          for (j = 0; j < viajes[i]['puntos_interes'].length; j++){
            mensaje += "   \nNombre: " + viajes[i]['puntos_interes'][j]['nombre'] + "\n" + 
              "   Descripción: " + viajes[i]['puntos_interes'][j]['descripcion'] + "\n" + 
              "   Localización: " + viajes[i]['puntos_interes'][j]['localizacion'] + "\n" + 
              "   Coordenadas: " + viajes[i]['puntos_interes'][j]['coordenadas'] + "\n" + 
              "   Valoración: " + viajes[i]['puntos_interes'][j]['valoracion'] + "\n" + 
              "   Precio: " + viajes[i]['puntos_interes'][j]['precio'] + "\n";
          }
          
          mensaje += "Transportes:";

          /* Añadimos todos los transportes del viaje al listado */
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

    /* Si no existen viajes relacionados con ese usuario */
    if (existen_viajes_usuario == 0){
      mensaje += "¡ninguno! ¿No has pensado en darte un caprichito?";
    }
    
    /* Devuelvo el string construido con todos los viajes  usuario junto al código de estado 200, 
      el cual indica que la petición recibido ha sido satisfactoriamente resuelta */
    res.status(200).send(mensaje);
  }
}
