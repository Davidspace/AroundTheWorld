const usuarios = require('./usuarios.json');

exports.handler = async function(event, context){
  if (usuarios.length > 0){
    var mensaje = "Los usuarios registrados en el sistema son los siguientes:\n\n";

    for (var i = 0; i < usuarios.length; i++){
      mensaje += "Destino: " + usuarios[i]['nombre'] + "\n" +
        "Apellidos: " + usuarios[i]['apellidos'] + "\n" +
        "Email: " + usuarios[i]['email'] + "\n" +
        "Username: " + usuarios[i]['username'] + "\n" +
        "Password" + usuarios[i]['password'] + "\n" +
        "Dirección: " + usuarios[i]['direccion'] + "\n" +
        "Teléfono: " + usuarios[i]['telefono'] + "\n" +
    }
  }

  else{
    mensaje = "Aún no existen usuarios registrados en la aplicación";
  }

  return{
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({usuarios: mensaje})
  };
}
