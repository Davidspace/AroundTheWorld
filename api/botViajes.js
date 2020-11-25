const usuarios = require('./usuarios.json')
var fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.body != undefined){
    if (req.body.message != undefined){
      // Obtenemos el ID del chat de Telegram desde el que proviene el mensaje
      var chat_ID= req.body.message.from.id;

      // Obtenemos el contenido del mensaje
      var text = req.body.message.text;

      var viajesUsuario_URL = "https://around-the-world.davidspace.vercel.app/api/viajesUsuario";

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

                var URL_query = '?username=' + username;
                var viajesUsuario_URL = viajesUsuario_URL + URL_query;

                var viajes_usuario = await fetch(viajesUsuario_URL)
                                      .then(res => res.text())
                                      .then(mensaje => {return mensaje});

                mensaje += viajes_usuario;
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

      var res_json = {text: mensaje, method: "sendMessage", chat_id: chat_ID};
      res.setHeader("Content-Type","application/json");
      res.status(200).json(res_json);
    }
  }

  else{
    res.setHeader("Content-Type","text/plain");
    res.status(200).send('Iniciando el bot del proyecto AroundTheWorld');
  }
}