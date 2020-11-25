# Vercel

En este fichero documentaré el proceso que he realizado para importar mi repositorio en Vercel y desplegarlo correctamente, además de la creación de una función serverless y un bot de Telegram que la utilizará.

## Conexión entre GitHub y Vercel y despliegue de mi repo

Los pasos a seguir han sido los siguientes:

1. Una vez dado de alta en la plataforma, enlazo mi cuenta de GitHub con mi cuenta de Vercel, de modo que cualquier commit subido a mi cuenta personal de GitHub actualizará automáticamente el despliegue correspondiente de mi cuenta personal de Vercel.

![GitHub enlazado con Vercel](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/vercel0.png)

2. Una vez hecho esto, procedo a importar el repositorio de mi proyecto en Vercel.

![Importar proyecto](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/vercel1.png)

3. Facilito la URL del repositorio que quiero importar.

![URL del repositorio](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/vercel2.png)

4. Selecciono el directorio raiz de mi repositorio, que en mi caso se trata del directorio de mayor nivel.

![Directorio raiz](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/vercel3.png)

5. Elijo el nombre del proyecto que voy a crear en Vercel a partir de mi repositorio y comienzo la importación de mi repositorio y su despliegue en la plataforma

![Nombre del proyecto](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/vercel4.png)

6. Tras el correcto despliegue, me dirijo a **Settings** para asegurarme de que, como hemos visto antes, está activado el despliegue continuo (cada push a mi repo provocará automáticamente un nuevo despliegue) gracias a la conexión entre el repo en GitHub y Vercel.

![Despliegue continuo](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/vercel5.png)

7. Con todo comprobado, solo queda comprobar que el proyecto creado figura en mi perfil y que el despliegue generado hace unos momentos es accesible y funcional.

![Proyecto de Vercel](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/vercel6.png)

![Despliegue](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/vercel7.png)

## Creación de una función serverless

Para la creación y despliegue de una función serverless en Vercel he seguido el siguiente proceso:

1. He creado el directorio [api](https://github.com/Davidspace/AroundTheWorld/tree/master/api) en el directorio raiz de mi repositorio, en el cual almacenaré los ficheros de datos necesarios y el fichero que contendrá a la función. Esto debe ser asi ya que es un directorio con este **nombre exacto** el que Vercel busca a la hora de localizar las funciones serverless con las que contamos.

2. He creado la [historia de usuario](https://github.com/Davidspace/AroundTheWorld/issues/127) y los issues correspondientes a la creación de una función que estará integrada dentro del proyecto general (no se trata de un ejemplo genérico).

3. Como se puede observar en la propia historia de usuario, la función serverless a implementar llevará a cabo el listado de todos los viajes correspondientes a un usuario determinado registrado en el sistema. Todos estos viajes, al igual que todos los usuarios registrados en el sistema, estarán alamcenados en ficheros JSON llamados, respectivamente, [viajes.json](https://github.com/Davidspace/AroundTheWorld/blob/master/api/viajes.json) y [usuarios.json](https://github.com/Davidspace/AroundTheWorld/blob/master/api/usuarios.json).

4. La función lee del archivo JSON [viajes.json](https://github.com/Davidspace/AroundTheWorld/blob/master/api/viajes.json) los viajes asociados a un usuario determinado, el cual le es proporcionado mediante una variable GET que será asignada por el bot de Telegram, lo cual veremos más adelante.

5. Una vez obtenidos todos los viajes de dicho usuario, los introduce dentro de una cadena y la devuelve junto al código de estado **200**, el cual indica que la petición que hemos recibido ha sido procesada correctamente.

Clickando en este [enlace](https://around-the-world.davidspace.vercel.app/api/viajesUsuario?username=Davidspace) puede observar el correcto funcionamiento de la función. En este caso he introducido manualmente en la URL la variable GET correspondiente al usuario **Davidspace**, el cual cuenta con un solo viaje registrado en la aplicación.

## Creación de un bot de Telegram

He dotado a la función serverless de una interfaz desde la que poder seleccionar de qué usuario queremos visualizar los viajes y poder obtener dicho listado de una forma estética y estructurada mediante un **bot de Telegram**. El proceso que he seguido para su creación ha sido el siguiente:

1. He creado y desplegado un fichero llamado [botViajes.js](https://github.com/Davidspace/AroundTheWorld/blob/master/api/botViajes.js) dentro del ya mencionado directorio [api](https://github.com/Davidspace/AroundTheWorld/tree/master/api) en el cual introduciré una nueva función serverless que en este caso se encargará de gestionar el comportamiento del bot de Telegram.

2. Para la propia creación del bot de Telegram dentro de la plataforma he utilizado el bot llamado [BotFather](https://telegram.me/BotFather), el cual nos facilita un sencillo proceso a través del cual podemos crear nuestro propio bot. Dicho proceso consiste en lo siguiente:

 - Enviamos el comando **/newbot** con el que indicamos que queremos crear un nuevo bot.
 - Tras la respuesta de **BotFather** pidiéndonos su nombre, contesto con **AroundTheWorld**.
 - **BotFather** requiere el nombre de usuario del bot. Contesto con **viajesAroundTheWorld_bot**
 - Tras esto, el bot ha sido creado y nos envia un mensaje con el enlace para comenzar un chat con él. Además, nos proporciona un token para acceder a su HTTP API y poder configurarlo.

3. Una vez creado el bot me dirijo a mi repositorio y clicko en **Settings** -> **Webhook**. Mi objetivo es crear un webhook con el que poder comunicar la función serverless que se encargará de manejar el comportamiento del bot con la HTTP API del bot. Por lo tanto, en el campo **Payload URL** introduzco la siguiente URL: **https://api.telegram.org/bot<tokenbot>/setwebhook?url=<url-de-la-funcion>**

4. Una vez creado el webhook procederé a realizar el desarrollo de la función serverless dentro del ya mencionado fichero [botViajes.js](https://github.com/Davidspace/AroundTheWorld/blob/master/api/botViajes.js) y a desplegarla de nuevo en Vercel cuando ya esté terminada y operativa. Lo que realizaré en esta función será indicar las respuestas que el bot debe dar en función de los mensajes que le sean enviados. Dichos mensajes recibidos son recogidos por la función mediante el parámetro `req`, el cual almacena toda la información relacionada con la petición que invoca a la función (en mi caso, un mensaje al bot). A través de la instrucción `req.body.message.text` accedo a dicho mensaje.

Por otro lado, también debo recoger el ID del chat que mantiene el bot con el usuario que lo está utilizando, el cual también viene recogido en el parámetro `req` y al cual accedo mediante la instrucción `req.body.message.from.id`.

Si el usuario que está utilizando el bot es capaz de proporcionar unas credenciales registradas en mi fichero JSON [usuarios.json](https://github.com/Davidspace/AroundTheWorld/blob/master/api/usuarios.json), esta función invocará a la función serverless encargada de obtener todos los viajes de un usuario determinado pasándole como parámetro dicho usuario. Recibirá el listado de dichos viajes y los incluirá en la cadena que será mostrada por el bot.

Una vez obtenidos estos datos, debemos construir un JSON que estará formado por tres campos: **text**, cuyo valor será el mensaje que el bot enviará; **method**, que indicará que método utilizaremos para proporcionar dicha información y cuyo valor será **sendMessage** y **chat_id**, cuyo valor será el ID del chat anteriormente obtenido. Estableceremos una cabecera con el valor **Content-Type","application/json** indicando que la respuesta contiene un variable JSON y devolvemos dicha variable JSON junto al código de estado 200.

Clickando en este [enlace](t.me/viajesAroundTheWorld_bot) podrá comenzar un chat con mi bot **AroundTheWorld**. Puede utilizar como crendenciales **Username: Davidspace Password: password1**.

Clickando en este [enlace](https://around-the-world-glnuapbng.vercel.app/api/botViajes) puede acceder a la función desplegada en Vercel. Por defecto muestra un mensaje de inicialización del bot ya que en este caso el parámetro `req` no cuenta con ningún mensaje.


