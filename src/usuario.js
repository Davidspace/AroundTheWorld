class Usuario{
  
  /**
   * Constructor básico de la clase Usuario.
   * @param {String} nombre - Nombre del usuario
   * @param {String} apellidos - Apellidos del usuario
   * @param {String} email - E-mail del usuario
   * @param {String} usernick - Nombre de usuario dentro de la aplicación del usuario
   * @param {String} direccion - Dirección del usuario
   * @param {String} telefono - Número de teléfono del usuario
   */

  constructor(nombre, apellidos, email, usernick, direccion, telefono){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.usernick = usernick;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  /**
   * Métodos get de la clase Usuario
   */

  get _nombre(){
    return this.nombre;
  }

  get _apellidos(){
    return this.apellidos;
  }

  get _email(){
    return this.email;
  }

  get _usernick(){
    return this.usernick;
  }

  get _direccion(){
    return this.telefono;
  }

  /**
   * Métodos set de la clase Usuario
   */

  set _nombre(nuevo_nombre){
    this.nombre = nuevo_nombre;
  }

  set _apellidos(nuevos_apellidos){
    this.apellidos = nuevos_apellidos;
  }

  set _email(nuevo_email){
    this.email = nuevo_email;
  }

  set _usernick(nuevo_usernick){
    this.usernick = nuevo_usernick;
  }

  set _direccion(nueva_direccion){
    this.direccion = nueva_direccion;
  }

  set _telefono(nuevo_telefono){
    this.telefono = nuevo_telefono;
  }
}

module.exports = Usuario;