module.exports = (req, res) => {
  var usuariosJson = require('./usuarios.json');

  var usuarios = [];

  usuariosJson.forEach(function(obj){
    usuarios.push(obj);
  });

  var mensaje = "[";

  num_mensaje = 0;

  if (usuarios.length !== 0){
    usuarios.forEach(function(obj){
      mensaje += "{" + "Destino: " + obj.nombre + ",\n" +
        "Apellidos: " + obj.apellidos + ",\n" +
        "Email: " + obj.email + ",\n" +
        "Username: " + obj.username + ",\n" +
        "Dirección: " + obj.direccion + ",\n" + 
        "Teléfono: " + obj.telefono + "}";

      if (num_mensaje < usuarios.length - 1){
        mensaje += ",\n\n";

        num_mensaje += 1;
      }
    });

    mensaje += "\n]";
  }

  else{
    mensaje = "Aún no existen usuarios registrados en la aplicación";
  }

  res.status(200).json(JSON.stringify(mensaje));
}