const usuarios = require('./usuarios.json')
const viajes = require('./viajes.json')

function viajesUsuario(username, password){
  var mensaje = "";

  mensaje += "Tus viajes son: ";

  var existen_viajes = -1;
            
  for (i = 0; i < viajes.length; i++){
    if (viajes[i]['usuario'] === username){
      mensaje += "\n\nUsuario: " + viajes[i]['usuario'] + "\n" +
        "Nombre del destino: " + viajes[i]['nombre_destino'] + "\n" +
        "Alojamientos: " + viajes[i]['alojamientos'] + "\n" +
        "Puntos de interés: " + viajes[i]['puntos_interes'] + "\n" +
        "Transportes: " + viajes[i]['transportes'] + "\n" + 
        "Precio: " + viajes[i]['precio'];

      if (existen_viajes == -1){
        existen_viajes = 1;
      }
    }
  }

  if (existen_viajes == -1){
    mensaje += "¡ninguno! ¿No has pensado en darte un capricho?";
  }

  return mensaje;
}

module.exports = async (req, res) => {
  if (req.body != undefined){
    // Obtenemos el ID del chat de Telegram desde el que proviene el mensaje
    var chatID = req.body.message.chat.id;

    // Obtenemos el contenido del mensaje
    var text = req.body.message.text;

    var username = "";

    var password = "";

    var mensaje = "";

    if (text == "/start"){
      mensaje = '¡Hola! Este bot ha sido desarrollado con el propósito de mostrar a cada usuario ' +
        'de la aplicación la lista de viajes con los que cuentan. Para ello, identifiquese de la ' +
        'siguiente manera: Username: <username> Password: <password>. Si sus credenciales son correctos, ' +
        'le serán mostrados sus viajes.';
    }

    if (text == "/help"){
      mensaje = 'Debe iniciar sesión indicando sus credenciales mediante Username: <username> ' +
        'Password: <password>. Automáticamente después se le mostrarán sus viajes.';
    }

    var usuario_index = -1;

    if (text.startsWith('Username:')){
      username = text.split(" ")[1];
        
      for (i = 0; i < usuarios.length && usuario_index == -1; i++){
        if (usuarios[i]['username'] === username){
          usuario_index = i;
        }
      }

      if (usuario_index != -1){
        password = text.split(" ").pop();

        var password_correcta = -1;

        if (usuarios[usuario_index]['password'] === password){
          password_correcta = 1;
        }
          
        if (password_correcta == 1){
          mensaje = 'Te has identificado correctamente. Tus viajes, en el caso de que existan, van a ser ' + 
            'listados a continuación.\n\n';

          mensaje += viajesUsuario(username, password);
        }

        else{
          mensaje = 'La contraseña es incorrecta. Inténtalo de nuevo.';
        }
      }

      else{
        mensaje = 'El usuario que has indicado no existe. Inténtalo de nuevo.';
      }
    }

    var res_json = {text: mensaje, method: "sendMessage", chat_id: chatID};
    res.setHeader("Content-Type","application/json");
    res.status(200).json(res_json);
  }

  else{
    res.setHeader("Content-Type","text/plain");
    res.status(200).send('Iniciando el bot del proyecto AroundTheWorld');
  }
}