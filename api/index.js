var viajesJson = require('./viajes.json');

module.exports = (req, res) => {
  var viajes = [];

  viajesJson.forEach(function(obj){
    viajes.push(obj);
  });

  var mensaje = "[";

  num_mensaje = 0;

  if (viajes.length !== 0){
    viajes.forEach(function(obj){
      mensaje += "{" + "Usuario: " + obj.usuario + ", " +
        "Apellidos: " + obj.apellidos + ", " +
        "Email: " + obj.email + ", " +
        "Username: " + obj.username + ", " +
        "Dirección: " + obj.direccion + ", " + 
        "Teléfono: " + obj.telefono + "}";

        mensaje += "\n\nUsuario: " + viajes[i]['usuario'] + "\n" +
                "Nombre del destino: " + viajes[i]['nombre_destino'] + "\n" +
                "Alojamientos: " + viajes[i]['alojamientos'] + "\n" +
                "Puntos de interés: " + viajes[i]['puntos_interes'] + "\n" +
                "Transportes: " + viajes[i]['transportes'] + "\n" + 
                "Precio: " + viajes[i]['precio'];

      if (num_mensaje < usuarios.length - 1){
        mensaje += ", ";

        num_mensaje += 1;
      }
    });

    mensaje += "]";
  }

  else{
    mensaje = "No existen viajes creados por este usuario de momento";
  }

  res.status(200).send(mensaje);
}