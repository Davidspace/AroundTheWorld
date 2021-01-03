# Microservicio

En este hito llevaré a cabo el diseño de un pequeño microservicio con el objetivo de permitir a los usuarios acceder a las funcionalidades que mi proyecto a través de Internet. Para ello diseñaré una API consistente en una serie de rutas, ya que seguiremos el estilo de arquitectura software REST (Representational state transfer). Esta API será testeada exhaustivamente usando tests de integración. También integrará un servicio de log externo que permita tener un seguimiento de las peticiones que vaya manejando a lo largo del tiempo.

## Framework web

Un framework o marco software web es un conjunto de herramientas, estilos y librerías dispuestas a través de una estructura o esqueleto base cuyo objetivo es facilitar al usuario el desarrollo de aplicaciones web más escalables y sencillas de mantener. El uso de esta herramienta me facilitará en gran medida el desarrollo de mi API, por lo que he analizado todos los disponibles para el lenguaje de mi proyecto, Node.js, y he elegido aquel que se adecua en mayor medida a mis necesidades: [Express](https://expressjs.com/es/). He basado mi decisión en varios motivos:

- En primer lugar, Express es el framework web más popular actualmente para el lenguaje Node.js. Tiene la mayor comunidad de entre todos los framework tomados en cuenta en la comparación, como por ejemplo Sails.js o Hapi.js, lo que facilitará en gran medida mi aprendizaje ya que todas las dudas que se me presenten tendrán rápida respuesta en uno de los muchos foros enfocados a esta herramienta.

- En la misma línea, es importante resaltar el hecho de que Express es el framework más maduro de todos, con más de 10 años de desarrollo, lo que me da grantías de que su funcionamiento estará muy pulido. Otros frameworks no me dan la misma seguridad, ya que por ejemplo **Koa** aún es inestable y se encuentra en desarrollo debido al uso de tecnologías más punteras pero menos testadas.

- Otro de los motivos de mi elección ha sido la baja curva de aprendizaje con la que cuenta Express. Otros frameworks como Sails.js se enfocan más en la estructura que en el código, utilizando la conocida estructura MVC para el desarrollo de los proyectos, lo que lo hace más viable para proyectos más amplios ya que los hace más escalables y estructurados. Sin embargo, actualmente no manejo un proyecto de esas características, por lo que la capacidad de customización que Express me ofrece al no ceñirse a una estructura en concreto es lo que necesito.

- Otro motivo es el enfoque "minimalista" con el que cuenta Express. No son tantas las funcionalidades que este framework añade a Node.js plano, sino las necesarias para crear una API totalmente funcional con varias opciones extras para añadirle nuevas utilidades. Esto realza la característica expuesta anteriormente sobre lo sencillo que resulta familiarizarse con Express respecto a otros frameworks, además de tener otra importante consecuencia: Express es uno de los frameworks más rapidos de entre todas las opciones disponibles.

- Tras el estudio de varias propiedades de los frameworks candidatos, pasé a dudar entre dos: **Koa** y **Express**. Aunque Koa haya sido expuesto como un framework no tan maduro y posiblemente más inestable, el hecho de que usase las tecnologías más punteras y que sea algo más ligero que Express eran puntos a favor para él ya que podría ser considerablemente más rápido. Por lo tanto, decidí llevar a cabo una comparación de tiempos para comprobar si la diferencia era tal como para cambiar mi decisión. Para ello creé la misma API en ambos frameworks y las sometí al recibimiento de un número determinado de peticiones. La API escrita en Express puede ser consultada [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/api/api.js) y la de Koa [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/api/apiKoa.js).

Mediante los siguientes comandos llevé a cabo las peticiones a ambas APIS y obtuve los datos necesarios para discernir cuál de ellos tiene un mejor rendimiento:

- `ab -n 1000 -c 1000 http://127.0.0.1:8080/usuarios/Davidspace` para obtener el usuario Davidspace

- `ab -p json.txt -n 1000 -c 1000 -T application/json http://localhost:8080/usuarios` para registrar al usuario cuyos datos están en formato JSON en el fichero **json.txt**

- `ab -u json.txt -n 1000 -c 1000 -T application/json http://localhost:8080/usuarios/Davidspace` para modificar los datos especificados en el fichero **json.txt** también en formato JSON.

**EXPRESS**

| Petición | Request per second | Time per request (ms) | Transfer rate (Kbytes/sec) |
| -------- | ------------------ | ---------------- | ------------- |
| Obtener un usuario | 7662.01 | 144.879 | 2321.14 |
| Registrar un usuario | 2210.29 | 433.742 | 398.77 received, 702.10 sent |
| Modificar un usuario | 3320.16 | 294.901 | 588.92 received, 579.55 sent |

**KOA**

| Petición | Request per second | Time per request (ms) | Transfer rate (Kbytes/sec) |
| -------- | ------------------ | ---------------- | ------------- |
| Obtener un usuario | 8229.84 | 121.509 | 2587.90 |
| Registrar un usuario | 2535.47 | 394.404 | 435.78 received, 740.34 sent |
| Modificar un usuario | 3777.19 | 264.747 | 649.20 received, 645.52 sent |

Como podemos observar, las diferencias de tiempos no son definitivas entre un framework y otro. Dado que el único punto en el que Express podía ceder ante Koa no significa una diferencia significativa, decidí mantener mi elección por **Express** basándome en los puntos expuestos anteriormente.

## Uso de buenas prácticas

### Logger

Los logs son ficheros en los que se almacenan cada uno de los eventos que suceden en un sistema operativo o en cualquier software. Estos eventos suelen ser llamadas a funciones, recibir una petición HTTP, dar una respuesta a estas... Este seguimiento que llevamos a cabo de las acciones que suceden en nuestra aplicación en orden cronológico hacen más sencilla la traza de errores y la compresión de como trabaja nuestro software.

Es por estas importantes necesidades que este servicio satisface que he decidido hacer uso en mi aplicación de una herramienta que genere logs sobre eventos que sucedan en ella, como por ejemplo el contenido de las peticiones que mi API recibe. Disponer de esta información en tiempo real agiliza el proceso de entendimiento de qué está sucediendo en mi aplicación y porqué. Esta herramienta de la que hablo es [morgan](https://github.com/expressjs/morgan), un logger para peticiones HTTP para Node. He seleccionado este logger debido a la simplicidad y eficiencia de este, ya que este no me provee de muchas funcionalidades ni opciones de configuración que no voy a necesitar, sino que hace una cosa y la hace muy bien, la cual es mostrar por consola el contenido de las peticiones que recibiré en mi API, para lo que cuenta con varios formatos de salida que muestran la información de las peticiones con más o menos detalle que pueden ser utilizados dependiendo de las necesidades que tenga en un momento dado.

En mi caso utilizaré el formato **dev**, que muestra la siguiente información:

`:method :url :status :response-time ms - :res[content-length]`

Se trata de información indicada para desarrolladores, y es justo la que necesito para ir trazando la funcionalidad de mi API. En cada log podemos observar que se mostrará el método HTTP de la petición recibida, la URL a la que va dirigida, el código de estado que mi API devuelve en la respuesta a dicha petición, el tiempo de respuesta en milisegundos y la longitud del contenido de la respuesta.

### Configuración distribuida

La configuración distribuida es uno de los patrones imprescindibles en la creación de aplicaciones nativas en la nube. Con el sistema de configuración distribuida elegido debemos tanto establecer la configuración (antes de lanzar la aplicación), como leer la configuración almacenada en algún lugar.

Para llevar a cabo este proceso he optado por usar [etcd](https://etcd.io/). Lo usaré en mi proyecto mediante la libreria [node-etcd](https://www.npmjs.com/package/node-etcd). Para utilizarlo de la forma que deseo he creado un nuevo fichero denominado [server.js], cuya función será la de establecer toda la configuración necesaria para que la aplicación funcione correctamente junto al posterior levantamiento del servidor. En mi caso, la única constante que deseo almacenar con este sistema es el valor del puerto a través del cuál el servidor escuchará las peticiones que se le hagan. Para ello, en primer lugar intento obtener el valor de una variable de entorno **port**, que puede o no existir, y que debería tener el valor del puerto deseado. En caso de que no exista, he establecido un valor por defecto que será el finalmente asignado.

### Middleware

No he usado ningún otro tipo de middleware además del ya mencionado **logger**, que he explicado en detalle con anterioridad y que es considerado como middleware ya que, en esencia, se trata de llamadas que se producen después de la activación de una ruta con el propósito de mostrar información sobre el resultado obtenido de dicha activación.

## Elementos del microservicio

En este apartado explicaré en detalle los componentes que forman la API que he creado para mi proyecto, cómo he establecido las rutas, qué implementa la clase que he creado para manejar los datos y las HUs que se abarcan.

### API

El fichero [api.js](https://github.com/Davidspace/AroundTheWorld/blob/master/api/api.js) contiene todo el código correspondiente a la API. En él creo en primer lugar una instancia de **Express**, la cual utilizaré para llevar a cabo toda la configuración de mi API, además de una instancia de la clase que he creado para almacenar y manejar los datos de la aplicación, denominada **Model**, que más adelante explicaré. A continuación indico que se utilice la función middleware **express.json**, la cual se encargará de trabajar únicamente con las peticiones cuyo Content-Type sea application/json, lo que me facilitará el trabajo a la hora de trabajar siempre con este tipo de objeto. Una vez cuento con la base para comenzar el desarrollo de mi API, he establecido ocho rutas que dan a los usuarios acceso desde Internet a ocho de las funcionalidades con las que mi proyecto cuenta. En concreto, [HU014](https://github.com/Davidspace/AroundTheWorld/issues/140), [HU015](https://github.com/Davidspace/AroundTheWorld/issues/141), [HU016](https://github.com/Davidspace/AroundTheWorld/issues/142), [HU017](https://github.com/Davidspace/AroundTheWorld/issues/143), [HU018](https://github.com/Davidspace/AroundTheWorld/issues/147), [HU019](https://github.com/Davidspace/AroundTheWorld/issues/148), [HU020](https://github.com/Davidspace/AroundTheWorld/issues/149) y [HU001](https://github.com/Davidspace/AroundTheWorld/issues/5).

- La primera historia de usuario indica que un usuario cualquiera debería ser capaz de registrarse en mi aplicación introduciendo sus datos. Para implementar esta funcionalidad he utilizado el método **POST** de HTTP y he establecido la ruta **/usuarios**. Todos los datos necesarios para el correcto registro del usuario (nombre, apellidos, email, username, password, dirección y teléfono) serán proporcionados al servidor mediante el cuerpo de la petición que se lleve a cabo a dicha ruta. En el caso de que falte alguno de ellos, el usuario recibirá como respuesta el código de estado 400 junto a un JSON que le indicará que, efectivamente, es necesario que todos los datos estén indicados. En caso contrario, se creará un nuevo objeto Usuario con los datos dados y se registrará a dicho usuario en la aplicación mediante el uso del método **registrar_usuario** de la clase Model. Por último, se enviará al usuario el código de estado 201 junto a un JSON que contendrá los datos del nuevo usuario, confirmando asi su correcto registro.

- La segunda historia de usuario indica que un usuario debería ser capaz de modificar sus datos. Para implementar esta funcionalidad he utilizado el método **PUT** de HTTP y he establecido la ruta **/usuarios/:username**. Como podemos ver, se indicará a traves de la URL el username del usuario cuyos datos deseamos modificar. Los campos a modificar junto a los nuevos valores vendrán dados en el cuerpo de la petición. Lo primero que se realiza es una comprobación de que el username dado está registrado en la aplicación mediante el método **username_valido** de la clase Model. En caso negativo, termina el manejo de la petición con el envio de un código de estado 404 junto a una respuesta JSON indicando que el username dado no es válido. En caso afirmativo se obtienen los campos a modificar y los nuevos valores de estos y son pasados como parámetros al método **modificar_usuario** de la clase Model. Este método devuelve el nuevo usuario modificado, el cual será devuelto como respuesta al usuario mediante un JSON junto al código de estado 200.

- La tercera historia de usuario indica que un usuario debería ser capaz de eliminar sus datos de la aplicación. Para implementar esta funcionalidad he utilizado el método **DELETE** de HTTP y he establecido la ruta **/usuarios/:username**. De nuevo, indico el username del usuario sobre el que se va a llevar a cabo una operación a través de la URL. En este caso es la única información necesaria para llevar a cabo el proceso oportuno. Tras comprobar si el username dado figura entre los registrados en la operación, obteniendo el mismo mensaje de error que el explicado anteriormente en caso negativo, se procede a borrar todos los datos referidos a dicho usuario de la aplicación mediante el método **borrar_usuario** de la clase Model. Por último, se envia como respuesta un JSON indicando que el borrado de datos se ha dado de manera correcta junto al código de estado 200.

- La cuarta historia de usuario indica que un usuario debería ser capaz de obtener sus datos almacenados en la aplicación. Para implementar esta funcionalidad he utilizado el método **GET** de HTTP y he establecido la ruta **/usuarios/:username**. De nuevo indico el username del usuario sobre el que se va a llevar a cabo una operación a través de la URL. Además, se debe indicar en el cuerpo de la petición la contraseña asociada a dicho usuario, ya que de no hacerlo cualquier usuario podría ver los datos de todos los demás. Si dicha contraseña no fuese la correcta, se devolvería el código de estado 404 junto a un JSON indicando lo sucedido. En caso contrario, se devolvería el código de estado 200 junto a un JSON con todos los datos relacionados con el usuario.

- La quinta historia de usuario indica que un usuario debería ser capaz de obtener todos los alojamientos registrados en la aplicación. Para implementar esta funcionalidad he utilizado el método **GET** de HTTP y he establecido la ruta **/alojamientos**. Se devuelve el código de estado 200 junto a un JSON con todos los datos relacionados con todos los alojamientos registrados.

- La sexta historia de usuario indica que un usuario debería ser capaz de obtener todos los puntos de interés registrados en la aplicación. Para implementar esta funcionalidad he utilizado el método **GET** de HTTP y he establecido la ruta **/puntos_interes**. Se devuelve el código de estado 200 junto a un JSON con todos los datos relacionados con todos los puntos de interés registrados.

- La séptima historia de usuario indica que un usuario debería ser capaz de obtener todos los transportes registrados en la aplicación. Para implementar esta funcionalidad he utilizado el método **GET** de HTTP y he establecido la ruta **/transportes**. Se devuelve el código de estado 200 junto a un JSON con todos los datos relacionados con todos los transportes registrados.

- La quinta historia de usuario indica que un usuario debería ser capaz de obtener todos los destinos registrados en la aplicación. Para implementar esta funcionalidad he utilizado el método **GET** de HTTP y he establecido la ruta **/destinos**. Se devuelve el código de estado 200 junto a un JSON con todos los datos relacionados con todos los destinos registrados.

### Manejador de datos

He creado un fichero llamado **model.js** en el que crearé una clase llamada **Model** en la que almaceno toda la información sobre los usuarios registrados e implemento todos los métodos que se encargan de llevar a cabo modificaciones y comprobaciones sobre ellos además de devolverlos para que el API los muestre al usuario. De esta manera libero a la API de la necesidad de implementar todas las funcionalidades relacionadas con el almacenamiento y el manejo de los datos, resultando asi en un código más limpio y estructurado.

- El almacenamiento de los usuarios registrados lo llevo a cabo mediante un array atributo de la clase llamada **usuarios**.

- El método **get_usuario** obtiene del array de usuarios aquel que tiene el username pasado por parámetro y devuelve todos sus datos en el caso de que la contraseña indicada por el usuario, también pasada como parámetro, coincida con la registrada.

- El método **registrar_usuario** añade al final del array del usuarios el nuevo usuario pasado por parámetro.

- El método **username_valido** recorre el array de usuarios y comprueba si el username de alguno de ellos coincide con el pasado por parámetro y devuelve un booleano que indica el resultado.

- El método **modificar_usuario** recibe por parámetros todos los campos del usuario, que serán strings vacios en el caso de que ese campo en concreto no tenga que ser modificado o el valor en cuestión que se quiere que sustituya al actual. Se obtiene el usuario que coincida con el username indicado también por oarámetros y se procede a cambiar de él los campos que cumplen las condiciones anteriormente expuestas. Tras este proceso, se devuelven los datos del usuario con las modificaciones ya llevadas a cabo.

- El método **borrar_usuario** busca en el array de usuarios aquel que tiene el username especificado por parámetros y lo borra.

- El método **get_alojamientos** que devuelve todos los alojamientos registrados.

- El método **get_puntos_interes** que devuelve todos los alojamientos registrados.

- El método **get_transportes** que devuelve todos los alojamientos registrados.

- El método **get_destinos** que devuelve todos los alojamientos registrados.

## Tests

Usaré tests de integración para testear convenientemente la API que he creado. Estos tests se encargarán de comprobar si el código de estado y el formato de texto recibidos son los esperados, factores suficientes para estar seguros de que la respuesta obtenida era la deseada. Para su implementación haré uso de la librería de aserciones [supertest](https://www.npmjs.com/package/supertest), la cual se especializa en tests relacionados con APIs y HTTP. Su ejecución se llevará a cabo de la misma manera que todos los demás: usando el comando **gulp test**, con el que el manejador de tareas comenzará la ejecución de los mismos. Los tests de la API se encuentran en el fichero [api.test.js](https://github.com/Davidspace/AroundTheWorld/blob/master/test/api.test.js).

Al principio de los tests indico que el servidor escuche en el puerto 8080. A continuación, en todos los tests compruebo que la respuesta recibida tiene un **código de estado**, un **Content-Type** y un **contenido en el body** especifico. La confirmación de la correción de estos tres datos me bastan para estar seguro de que el comportamiento que se está dando en la API es el que busco, ya que sé con certeza que la petición enviada ha sido resuelta con un resultado específico (2xx para peticiones correctas, 4xx para peticiones erróneas), que la respuesta tiene el formato que debe de tener y que los valores obtenidos de vuelta almacenados en el cuerpo de la respuesta son los esperados. Por último, al final de todos los tests cierro la conexión con el servidor.




