# Microservicio

En este hito llevaré a cabo el diseño de un pequeño microservicio con el objetivo de permitir a los usuarios acceder a las funcionalidades que mi proyecto a través de Internet. Para ello diseñaré una API consistente en una serie de rutas, ya que seguiremos el estilo de arquitectura software REST (Representational state transfer). Esta API será testeada exhaustivamente usando tests de integración. También integrará un servicio de log externo que permita tener un seguimiento de las peticiones que vaya manejando a lo largo del tiempo.

## Herramientas utilizadas

### Framework web

Un framework o marco software web es un conjunto de herramientas, estilos y librerías dispuestas a través de una estructura o esqueleto base cuyo objetivo es facilitar al usuario el desarrollo de aplicaciones web más escalables y sencillas de mantener. El uso de esta herramienta me facilitará en gran medida el desarrollo de mi API, por lo que he analizado todos los disponibles para el lenguaje de mi proyecto, Node.js, y he elegido aquel que se adecua en mayor medida a mis necesidades: **Express**. He basado mi decisión en varios motivos:

- En primer lugar, Express es el framework web más popular actualmente para el lenguaje Node.js. Tiene la mayor comunidad de entre todos los framework tomados en cuenta en la comparación, como por ejemplo Sails.js o Hapi.js, lo que facilitará en gran medida mi aprendizaje ya que todas las dudas que se me presenten tendrán rápida respuesta en uno de los muchos foros enfocados a esta herramienta.

- En la misma línea, es importante resaltar el hecho de que Express es el framework más maduro de todos, con más de 10 años de desarrollo, lo que me da grantías de que su funcionamiento estará muy pulido. Otros frameworks han sido descartados por este motivo, ya que por ejemplo **Koa** aún es inestable y se encuentra en desarrollo debido al uso de tecnologías más punteras pero menos testadas, lo que no encaja con mis necesidades actuales, ya que no busco el framework más moderno sino el framework más estable y soportado.

- Otro de los motivos de mi elección ha sido la baja curva de aprendizaje con la que cuenta Express. Otros frameworks como Sails.js se enfocan más en la estructura que en el código, utilizando la conocida estructura MVC para el desarrollo de los proyectos, lo que lo hace más viable para proyectos más amplios ya que los hace más escalables y estructurados. Sin embargo, actualmente no manejo un proyecto de esas características, por lo que la capacidad de customización que Express me ofrece al no ceñirse a una estructura en concreto es lo que necesito.

- Otro motivo es el enfoque "minimalista" con el que cuenta Express. No son tantas las funcionalidades que este framework añade a Node.js plano, sino las necesarias para crear una API totalmente funcional con varias opciones extras para añadirle nuevas utilidades. Esto realza la característica expuesta anteriormente sobre lo sencillo que resulta familiarizarse con Express respecto a otros frameworks, además de tener otra importante consecuencia: Express es uno de los frameworks más rapidos de entre todas las opciones disponibles.

### Logger


## Microservicio

En este apartado explicaré en detalle los componentes que forman la API que he creado para mi proyecto, cómo he establecido las rutas, qué implementa la clase que he creado para manejar los datos y las HUs que se abarcan.

### API

El fichero [api.js](https://github.com/Davidspace/AroundTheWorld/blob/master/api/api.js) contiene todo el código correspondiente a la API. En él creo en primer lugar una instancia de **Express**, la cual utilizaré para llevar a cabo toda la configuración de mi API, además de una instancia de la clase que he creado para almacenar y manejar los datos de la aplicación, denominada **Model**, que más adelante explicaré. Acto seguido, establezco el puerto en el que el servidor escuchará las peticiones e indico que se utilice la función middleware **express.json**, la cual se encargará de trabajar únicamente con las peticiones cuyo Content-Type sea application/json, lo que me facilitará el trabajo a la hora de trabajar siempre con este tipo de objeto. Una vez cuento con la base para comenzar el desarrollo de mi API, he establecido cinco rutas que dan a los usuarios acceso desde Internet a cuatro de las funcionalidades con las que mi proyecto cuenta. En concreto, [HU14](https://github.com/Davidspace/AroundTheWorld/issues/140), [HU15](https://github.com/Davidspace/AroundTheWorld/issues/141), [HU16](https://github.com/Davidspace/AroundTheWorld/issues/142) y [HU17](https://github.com/Davidspace/AroundTheWorld/issues/143).

- La primera historia de usuario indica que un usuario cualquiera debería ser capaz de registrarse en mi aplicación introduciendo sus datos. Para implementar esta funcionalidad he utilizado el método **PUT** de HTTP y he establecido la ruta **/usuarios**. Todos los datos necesarios para el correcto registro del usuario (nombre, apellidos, email, username, password, dirección y teléfono) serán proporcionados al servidor mediante el cuerpo de la petición que se lleve a cabo a dicha ruta. En el caso de que falte alguno de ellos, el usuario recibirá como respuesta el código de estado 400 junto a un JSON que le indicará que, efectivamente, es necesario que todos los datos estén indicados. En caso contrario, se creará un nuevo objeto Usuario con los datos dados y se registrará a dicho usuario en la aplicación mediante el uso del método **registrar_usuario** de la clase Model. Por último, se enviará al usuario el código de estado 201 junto a un JSON que contendrá los datos del nuevo usuario, confirmando asi su correcto registro.

- La segunda historia de usuario indica que un usuario debería ser capaz de modificar sus datos. Para implementar esta funcionalidad he utilizado el método **POST** de HTTP y he establecido la ruta **/usuarios/:username**. Como podemos ver, se indicará a traves de la URL el username del usuario cuyos datos deseamos modificar. Los campos a modificar junto a los nuevos valores vendrán dados en el cuerpo de la petición. Lo primero que se realiza es una comprobación de que el username dado está registrado en la aplicación mediante el método **username_valido** de la clase Model. En caso negativo, termina el manejo de la petición con el envio de un código de estado 404 junto a una respuesta JSON indicando que el username dado no es válido. En caso afirmativo se obtienen los campos a modificar y los nuevos valores de estos y son pasados como parámetros al método **modificar_usuario** de la clase Model. Este método devuelve el nuevo usuario modificado, el cual será devuelto como respuesta al usuario mediante un JSON junto al código de estado 200.

- La tercera historia de usuario indica que un usuario debería ser capaz de eliminar sus datos de la aplicación. Para implementar esta funcionalidad he utilizado el método **DELETE** de HTTP y he establecido la ruta **/usuarios/:username**. De nuevo, indico el username del usuario sobre el que se va a llevar a cabo una operación a través de la URL. En este caso es la única información necesaria para llevar a cabo el proceso oportuno. Tras comprobar si el username dado figura entre los registrados en la operación, obteniendo el mismo mensaje de error que el explicado anteriormente en caso negativo, se procede a borrar todos los datos referidos a dicho usuario de la aplicación mediante el método **borrar_usuario** de la clase Model. Por último, se envia como respuesta un JSON indicando que el borrado de datos se ha dado de manera correcta junto al código de estado 200.

- La cuarta historia de usuario indica que un usuario debería ser capaz de obtener sus datos almacenados en la aplicación. Para implementar esta funcionalidad he utilizado el método **GET** de HTTP y he establecido la ruta **/usuarios/:username**. De nuevo indico el username del usuario sobre el que se va a llevar a cabo una operación a través de la URL. Además, se debe indicar en el cuerpo de la petición la contraseña asociada a dicho usuario, ya que de no hacerlo cualquier usuario podría ver los datos de todos los demás. Si dicha contraseña no fuese la correcta, se devolvería el código de estado 404 junto a un JSON indicando lo sucedido. En caso contrario, se devolvería el código de estado 200 junto a un JSON con todos los datos relacionados con el usuario.

### Manejador de datos

He creado un fichero llamado **model.js** en el que crearé una clase llamada **Model** en la que almaceno toda la información sobre los usuarios registrados e implemento todos los métodos que se encargan de llevar a cabo modificaciones y comprobaciones sobre ellos además de devolverlos para que el API los muestre al usuario. De esta manera libero a la API de la necesidad de implementar todas las funcionalidades relacionadas con el almacenamiento y el manejo de los datos, resultando asi en un código más limpio y estructurado.

- El almacenamiento de los usuarios registrados lo llevo a cabo mediante un array atributo de la clase llamada **usuarios**.

- El método **get_usuario** obtiene del array de usuarios aquel que tiene el username pasado por parámetro y devuelve todos sus datos en el caso de que la contraseña indicada por el usuario, también pasada como parámetro, coincida con la registrada.

- El método **registrar_usuario** añade al final del array del usuarios el nuevo usuario pasado por parámetro.

- El método **username_valido** recorre el array de usuarios y comprueba si el username de alguno de ellos coincide con el pasado por parámetro y devuelve un booleano que indica el resultado.

- El método **modificar_usuario** recibe por parámetros todos los campos del usuario, que serán strings vacios en el caso de que ese campo en concreto no tenga que ser modificado o el valor en cuestión que se quiere que sustituya al actual. Se obtiene el usuario que coincida con el username indicado también por oarámetros y se procede a cambiar de él los campos que cumplen las condiciones anteriormente expuestas. Tras este proceso, se devuelven los datos del usuario con las modificaciones ya llevadas a cabo.

- El método **borrar_usuario** busca en el array de usuarios aquel que tiene el username especificado por parámetros y lo borra.

## Tests

Usaré tests de integración para testear convenientemente la API que he creado. Estos tests se encargarán de comprobar si el código de estado y el formato de texto recibidos son los esperados, factores suficientes para estar seguros de que la respuesta obtenida era la deseada. Para su implementación haré uso de la librería de aserciones [supertest](https://www.npmjs.com/package/supertest), la cual se especializa en tests relacionados con APIs y HTTP. Su ejecución se llevará a cabo de la misma manera que todos los demás: usando el comando **gulp test**, con el que el manejador de tareas comenzará la ejecución de los mismos.




