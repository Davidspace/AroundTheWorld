const usuarios = require('./usuarios.json');

exports.handler = async function(event, context){
  if (usuarios.length > 0){
    var mensaje = "["

    var num_mensajes = 0;

    for (var i = 0; i < usuarios.length; i++){
      mensaje += "{destino: " + usuarios[i]['nombre'] + ", " +
        "apellidos: " + usuarios[i]['apellidos'] + ", " +
        "email: " + usuarios[i]['email'] + ", " +
        "username: " + usuarios[i]['username'] + ", " +
        "password" + usuarios[i]['password'] + ", " +
        "direccion: " + usuarios[i]['direccion'] + ", " +
        "telefono: " + usuarios[i]['telefono'] + "}";

      if (num_mensajes != usuarios.length - 1){
        mensaje += ", ";

        num_mensajes += 1;
      }
    }

    mensaje += "]";
  }

  else{
    mensaje = "{mensaje: Aún no existen usuarios registrados en la aplicación}";
  }

  return{
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({usuarios: mensaje})
  };
}
