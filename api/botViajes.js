const usuarios = require('./usuarios.json')
const viajes = require('./viajes.json')

function viajesUsuario(username){
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

      mensaje += "Puntos de interés:\n";
        " Nombre: " + viajes[i]['puntos_interes']['nombre'] + "\n" + 
        " Descripción: " + viajes[i]['puntos_interes']['descripcion'] + "\n" + 
        " Localización: " + viajes[i]['puntos_interes']['localizacion'] + "\n" + 
        " Coordenadas: " + viajes[i]['puntos_interes']['coordenadas'] + "\n" + 
        " Valoración: " + viajes[i]['puntos_interes']['valoracion'] + "\n" + 
        " Precio: " + viajes[i]['puntos_interes']['precio'] + "\n";
      
      mensaje += "Transportes:\n";
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

  return mensaje;
}

module.exports = async (req, res) => {
  if (req.body.message != undefined){
    // Obtenemos el ID del chat de Telegram desde el que proviene el mensaje
    var chat_id = req.body.message.from.id;

    // Obtenemos el contenido del mensaje
    var text = req.body.message.text;

    var username = "";

    var password = "";

    var mensaje = "";

    if (text === "/start"){
      mensaje = '¡Hola! Este bot ha sido desarrollado con el propósito de mostrar a cada usuario ' +
        'de la aplicación la lista de viajes con los que cuentan. Para ello, identifiquese de la ' +
        'siguiente manera: Username: <username> Password: <password>. Si sus credenciales son correctos, ' +
        'le serán mostrados sus viajes.';
    }

    else{
      if (text === "/help"){
        mensaje = 'Debe iniciar sesión indicando sus credenciales mediante Username: <username> ' +
          'Password: <password>. Automáticamente después se le mostrarán sus viajes.';
      }

      else{
        if (text.startsWith('Username:')){
          var usuario_index = -1;

          username = text.split(" ")[1];
            
          for (i = 0; i < usuarios.length && usuario_index == -1; i++){
            if (usuarios[i]['username'] === username){
              usuario_index = i;
            }
          }

          if (usuario_index !== -1){
            password = text.split(" ").pop();

            if (usuarios[usuario_index]['password'] === password){
              mensaje = 'Te has identificado correctamente. A continuación se van a listar tus viajes ' +
                'en el caso de que cuentes con alguno.\n\n';

              mensaje += viajesUsuario(username);
            }

            else{
              mensaje = 'La contraseña es incorrecta. Inténtalo de nuevo.';
            }
          }

          else{
            mensaje = 'El usuario que has indicado no existe. Inténtalo de nuevo.';
          }
        }

        else{
          mensaje = 'Este mensaje no corresponde a ninguna acción. Utiliza el comando /help ' + 
            'para saber qué debes de hacer.';
        }
      }
    }

    var res_json = {text: mensaje, method: "sendMessage", chat_id: chat_id};
    res.setHeader("Content-Type","application/json");
    res.status(200).json(res_json);
  }

  else{
    res.setHeader("Content-Type","text/plain");
    res.status(200).send('Iniciando el bot del proyecto AroundTheWorld');
  }
}