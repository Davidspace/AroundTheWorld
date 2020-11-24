module.exports = (req, res) => {
  var usuariosJson = require('./usuarios.json');

  var usuarios = [];

  usuariosJson.forEach(function(obj){
    usuarios.push(obj);
  });

  var mensaje = "[";

  if (usuarios.length !== 0){
    usuarios.forEach(function(obj){
      mensaje += "{" + "Destino: " + obj.nombre + ",\n" +
        "Apellidos: " + obj.apellidos + ",\n" +
        "Email: " + obj.email + ",\n" +
        "Username: " + obj.username + ",\n" +
        "Dirección: " + obj.direccion + ",\n" + 
        "Teléfono: " + obj.telefono + "}";

      if (num_mensaje < usuarios.length - 1){
        mensaje += ", ";

        num_mensaje += 1;
      }
    });

    mensaje += "]";
  }

  else{
    mensaje = "Aún no existen usuarios registrados en la aplicación";
  }

  res.status(200).json(mensaje);
}