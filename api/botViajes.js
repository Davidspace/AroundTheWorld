usuarios = require('./usuarios.json')
viajes = require('./viajes.json')

module.exports = async (req, res) => {
  if (req.body != undefined){
    if (req.body.message.text != undefined){
      // Obtenemos el ID del chat de Telegram desde el que proviene el mensaje
      var IDChat = req.body.message.chat.IDChat;

      // Obtenemos el contenido del mensaje
      var text = req.body.message.text;

      username = "";

      password = "";

      mensaje = "";

      if (text == '/start'){
        mensaje = '¡Hola! Este bot ha sido desarrollado con el propósito de mostrar a cada usuario\
          de la aplicación la lista de viajes con los que cuentan. Comienza identificándote mediante\
          tu nombre de usuario de la siguiente manera: Username: <nickname>. \n\nUsa el comando /help\
          para conocer todos los comandos disponibles.'
      }

      usuario_index = -1;

      if (text.startsWith('Username:')){
        username = text.split(" ", 2);

        username = nickname.split(",").pop();

        usuario_existe = False;
        
        for (i = 0; i < usuarios.length && !usuario_existe; i++){
          if (usuarios[i]['username'] === username){
            usuario_existe = True;

            usuario_index = i;
          }
        }

        if (usuario_existe){
          mensaje = 'Ahora, introduce tu contraseña de la siguiente manera: Password: <password>'
        }

        else{
          mensaje = 'El usuario que has indicado no existe. Inténtalo de nuevo.'
        }
      }

      if (text.startsWith('Password:')){
        password = text.split(" ", 2);

        password = password.split(",").pop();

        password_correcta = False;

        if (usuario_index != -1)
          if (usuarios[usuario_index]['password'] === password){
            password_correcta = True;
          }
        }

        else{
          mensaje = 'Aún no has introducido un usuario correcto.'
        }

        if (usuario_index != -1)
          if (password_correcta){
            mensaje = 'Te has identificado correctamente. Usa el comando /viajes para listar tus viajes.'
          }

          else{
            mensaje = 'La contraseña es incorrecta. Inténtalo de nuevo.'
        }
      }

      if (text == '/viajes'){
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
      }
    }
  }
}