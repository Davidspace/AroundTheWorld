const usuarios = require('./usuarios.json')
const viajes = require('./viajes.json')

function viajesUsuario(username, password){
  var mensaje = "";

  if (username !== "" && password !== ""){
    mensaje += "Tus viajes son: ";
            
    for (i = 0; i < viajes.length; i++){
      if (viajes[i]['usuario'] === username){
        mensaje += "\n\nUsuario: " + viajes[i]['usuario'] + "\n" +
          "Nombre del destino: " + viajes[i]['nombre_destino'] + "\n" +
          "Alojamientos: " + viajes[i]['alojamientos'] + "\n" +
          "Puntos de interés: " + viajes[i]['puntos_interes'] + "\n" +
          "Transportes: " + viajes[i]['transportes'] + "\n" + 
          "Precio: " + viajes[i]['precio'];
      }
    }
  }

  else{
    mensaje = 'Aún no se ha identificado.';
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
      mensaje = '¡Hola! Este bot ha sido desarrollado con el propósito de mostrar a cada usuario\
        de la aplicación la lista de viajes con los que cuentan. Comienza identificándote mediante\
        tu nombre de usuario de la siguiente manera: Username: <username>. \n\nUsa el comando /help\
        para conocer todos los comandos disponibles.';
    }

    if (text == "/help"){
      mensaje = 'Debe iniciar sesión indicando sus credenciales primero mediante Username: <username> y\
        y después con Password: <password>. Si ya lo ha hecho, puede listar sus viajes mediante el\
        comando /viajes.';
    }

    var usuario_index = -1;

    if (text.startsWith('Username:')){
      username = text.split(" ").pop();

      var usuario_existe = False;
        
      for (i = 0; i < usuarios.length && !usuario_existe; i++){
        if (usuarios[i]['username'] === username){
          usuario_existe = True;

          usuario_index = i;
        }
      }

      if (usuario_existe){
        mensaje = 'Ahora, introduce tu contraseña de la siguiente manera: Password: <password>';
      }

      else{
        username = "";
        mensaje = 'El usuario que has indicado no existe. Inténtalo de nuevo.';
      }
    }

    if (text.startsWith("Password:")){
      password = text.split(" ").pop();

      var password_correcta = False;

      if (usuario_index != -1){
        if (usuarios[usuario_index]['password'] === password){
          password_correcta = True;
        }
      }

      else{
        password = "";
        mensaje = 'Aún no has introducido un usuario correcto.';
      }

      if (usuario_index != -1){
        if (password_correcta){
          mensaje = 'Te has identificado correctamente. Usa el comando /viajes para listar tus viajes.';
        }

        else{
          mensaje = 'La contraseña es incorrecta. Inténtalo de nuevo.';
        }
      }
    }

    if (text == "/viajes"){
      mensaje = viajesUsuario(username, password);
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