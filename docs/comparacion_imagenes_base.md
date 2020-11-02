# Comparativa entre las imágenes base candidatas para el contenedor Docker

## Elección de las imágenes base candidatas

La elección de la imagen base más óptima para nuestro contenedor es fundamental, ya que dependiendo de nuestras necesidades una imagen puede ser bastante mejor que las demás opciones, por ejemplo en términos de rendimiento o tamaño, o incluso necesaria debido a que incluya algunas funcionalidades que las demás no. 

En primer lugar, partimos del hecho de que el usar imágenes oficiales será casi siempre mejor opción que las no oficiales, ya que cuentan con una documentación extensa y clara, siguen las mejores prácticas y están diseñadas para los casos de uso más comunes. Por otro lado, usar las imágenes oficiales de un lenguaje es mucho más conveniente que usar la de un sistema operativo y posteriormente instalar el lenguaje y cualquier otra cosa que necesite, ya que mi proyecto se basa en un lenguaje específico, en este caso Node.js.

Entre las imágenes oficiales de Node.js encontramos varios tipos, que vienen indicados mediante **tags**:

- **Imagen oficial completa**: Se trata de la imagen basada en la versión del sistema operativo Debian más reciente. Es la imagen más completa ya que cuenta con todos los paquetes y, por lo tanto, la más segura de utilizar, ya que evitamos cualquier problema de dependencias o bugs. Sin embargo, esto conlleva que sea la de mayor tamaño, lo cual, en ciertos casos, puede ser un aspecto negativo que se sobreponga a sus ventajas. De igual manera, en según qué situaciones sus ventajas pueden no ser tan relevantes, como por ejemplo si tenemos claro qué paquetes vamos a necesitar y los demás son espacio utilizado innecesariamente.

- **Slim**: Las imágenes slim se tratan de una versión simplificada de la imagen oficial completa. Estas imagenes solo traen instalados los paquetes necesarios para ejecutar Node.js. Como consecuencia de esta reducción en el conjunto de funcionalidades disponibles, el tamaño de la imagen es sustancialmente menor.

- **Alpine**: Las imágenes con este tag están basadas en el proyecto Alpine Linux, el cual se trata de un sistema operativo que fue construido especificamente para ser usado dentro de contenedores. Actualmente se trata del tipo de imagen más popular debido a su pequeño tamaño. Sin embargo, puede dar problemas debido a que no contiene paquetes que podría necesitar. Sin embargo, si tenemos claro cuales son, podemos simplemente instalarlos.

- **stretch/buster/jessie**: Se tratan de imágenes basadas en distintas versiones de Debian (Buster -> 10.4, Stretch -> 9.x, Jessie -> 8.x)

Elegiremos una imagen de cada uno de los principales tags.

Aún dados los motivos anteriores por los que es más óptimo escoger una imagen oficial del lenguaje que vamos a utilizar, voy a seleccionar dos imágenes oficiales de dos sistemas operativos diferentes a las cuales les instalaremos **npm** y **node** con el objetivo de testear sus rendimientos y observar sus tamaños. Estas dos imágenes serán:

- Imagen base de la distribución de Linux **Debian**.

- Imagen base de la distribución de Linux **Fedora**.

Para la creación de la imagen sobre la imagen base de **Debian** añadiré al Dockerfile los comandos necesarios para, como he dicho con anterioridad, instalar **npm** y **node**. Estos comandos son:

`apt update`\
`apt -y install nodejs npm`

De igual forma, en el Dockerfile en el que incluiré la imagen base de **fedora** añadiré los siguientes comandos:

`dnf -y install nodejs npm`\
`npm -g install npm`\
`npm -g install n`\
`n stable`

## Realización de pruebas a las imágenes base

He decidido basar mi decisión sobre qué imagen base usar en dos de sus aspectos más relevantes: la velocidad y el tamaño. El tamaño de cada imagen lo consultaré mediante el comando `docker images`, el cual muestra un listado de las imágenes que hay en mi equipo. La velocidad, por otro lado, la consultaré mediante la observación del tiempo de ejecución de un sencillo script que descarga la imagen del repositorio de Docker Hub y hará que lleve a cabo los tests 100 veces. Dicho script es el siguiente:

![Script de prueba](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/prueba_imagenes.png)


La imagen generada sobre la **imagen oficial completa**, **latest**, ocupa **940MB** y su tiempo de ejecución ha sido de **5 minutos y 10.706 segundos**. Si no es necesario descargar la imagen y únicamente se ejecutan los tests el tiempo de ejecución es de **2 minutos y 47.221 segundos**.

![Tiempo de ejecución de la imagen base completa](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/node-latest.png) ![Tiempo de ejecución de la imagen base completa ya descargada](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/node-latest-downloaded.png)
 

La imagen generada sobre la imagen con el tag **slim**, **14.15.0-buster-slim**, ocupa **209MB** y su tiempo de ejecución ha sido de **3 minutos y 26.279 segundos**. Si no es necesario descargar la imagen el tiempo de ejecución es de **2 minutos y 48.271 segundos**.

![Tiempo de ejecución de la imagen base slim](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/slim.png) ![Tiempo de ejecución de la imagen base slim ya descargada](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/slim-downloaded.png)


La imagen generada sobre la imagen con el tag **alpine**, **14.15.0-alpine3.12**, ocupa **145MB** y su tiempo de ejecución ha sido de **3 minutos y 16.441 segundos**. Si no es necesario descargar la imagen el tiempo de ejecución es de **2 minutos y 50.868 segundos**.

![Tiempo de ejecución de la imagen base alpine](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/alpine.png) ![Tiempo de ejecución de la imagen base alpine ya descargada](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/alpine-downloaded.png)


La imagen generada sobre la imagen del sistema operativo **Debian**, **debian:10.6**, ocupa **535MB** y su tiempo de ejecución ha sido de **6 minutos y 19.522 segundos**. Si no es necesario descargar la imagen el tiempo de ejecución es de **4 minutos y 51.428 segundos**.

![Tiempo de ejecución de la imagen base Debian](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/debian.png) ![Tiempo de ejecución de la imagen base Debian ya descargada](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/debian-downloaded.png)


La imagen generada sobre la imagen del sistema operativo **Fedora**, **fedora:32**, ocupa **775MB** y su tiempo de ejecución ha sido de **5 minutos y 19.846 segundos**. Si no es necesario descargar la imagen el tiempo de ejecución es de **2 minutos y 47.554 segundos**.

![Tiempo de ejecución de la imagen base fedora](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/fedora.png) ![Tiempo de ejecución de la imagen base fedora ya descargada](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/fedora-downloaded.png)


Estudiando los resultados, podemos observar que el tiempo de ejecución **varía bastante** en el caso de que la imagen base **no esté almacenada localmente** y sea necesario descargarla de Docker Hub. Dicho tiempo de ejecución será directamente proporcional al **tamaño de la propia imagen base** (con algunas varianzas debido a la irregularidad de la conexión a internet).

Sin embargo, lo común es que tengamos almacenada la imagen base con la que vamos a construir nuestra imagen cada vez que queramos ejecutar los tests. En dicho caso, exceptuando el caso de Debian, cuyo tiempo de ejecución es 2 minutos mayor, el resto de imágenes base tienen **tiempos de ejecución muy similares**, ya que la diferencia que observamos es de un máximo de dos segundos aún habiendo ejecutado los tests 100 veces, por lo que la **velocidad** pasa a ser un **factor no determinante**. 

Por lo tanto, basaré mi decisión exclusivamente en el **espacio que ocupen en disco**, buscando siempre que sea el menor posible. Dado esto, la imagen base que usaré en mi contenedor para tests será **14.15.0-alpine3.12**. He utilizado este tag en otras asignaturas y, como he mencionado anteriormente, es el tipo de imagen más popular actualmente debido a su reducido tamaño, por lo que no es de extrañar que tras este análisis haya sido la imagen escogida.
