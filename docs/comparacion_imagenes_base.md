# Comparativa entre las imágenes base candidatas para el contenedor Docker

## Elección de las imágenes base candidatas

La elección de la imagen base más óptima para nuestro contenedor es fundamental, ya que dependiendo de nuestras necesidades una imagen puede ser bastante mejor que las demás opciones, por ejemplo en términos de rendimiento o tamaño, o incluso necesaria debido a que incluya algunas funcionalidades que las demás no. 

En primer lugar, partimos del hecho de que el usar imágenes oficiales será casi siempre mejor opción que las no oficiales, ya que cuentan con una documentación extensa y clara, siguen las mejores prácticas y están diseñadas para los casos de uso más comunes. Por otro lado, usar las imágenes oficiales de un lenguaje es mucho más conveniente que usar la de un sistema operativo y posteriormente instalar el lenguaje y cualquier otra cosa que necesite, ya que nuestro proyecto se basa en un lenguaje específico, en este caso Node.js. Es por estos motivos que escogeremos las imágenes candidatas entre las oficiales de Node.js.

Entre las imágenes oficiales de Node.js encontramos varios tipos, que vienen indicados mediante **tags**:

- **Imagen oficial completa**: Se trata de la imagen basada en la versión del sistema operativo Debian más reciente. Es la imagen más completa ya que cuenta con todos los paquetes y, por lo tanto, la más segura de utilizar, ya que evitamos cualquier problema de dependencias o bugs. Sin embargo, esto conlleva que sea la de mayor tamaño, lo cual, en ciertos casos, puede ser un aspecto negativo que se sobreponga a sus ventajas. De igual manera, en según qué situaciones sus ventajas pueden no ser tan relevantes, como por ejemplo si tenemos claro qué paquetes vamos a necesitar y los demás son espacio utilizado innecesariamente.

- **Slim**: Las imágenes slim se tratan de una versión simplificada de la imagen oficial completa. Estas imagenes solo traen instalados los paquetes necesarios para ejecutar Node.js. Como consecuencia de esta reducción en el conjunto de funcionalidades disponibles, el tamaño de la imagen es sustancialmente menor.

- **Alpine**: Las imágenes con este tag están basadas en el proyecto Alpine Linux, el cual se trata de un sistema operativo que fue construido especificamente para ser usado dentro de contenedores. Actualmente se trata del tipo de imagen más popular debido a su pequeño tamaño. Sin embargo, puede dar problemas debido a que no contiene paquetes que podría necesitar. Sin embargo, si tenemos claro cuales son, podemos simplemente instalarlos.

- **stretch/buster/jessie**: Se tratan de imágenes basadas en distintas versiones de Debian (Buster -> 10.4, Stretch -> 9.x, Jessie -> 8.x)

- **windowsservercore**: Imágenes diseñadas para aplicaciones que solo pueden ser ejecutadas en Windows o Windows Server. Carecen de interés dadas mis necesidades actuales.

Elegiremos una imagen de cada uno de los principales tags y llevaremos a cabo las comparaciones entre ellas.


## Realización de pruebas a las imágenes base

He decidido basar mi decisión sobre qué imagen base usar en dos de sus aspectos más relevantes: la velocidad y el tamaño. El tamaño de cada imagen lo podemos consultar en la propia página web de Docker Hub, que será de donde descargue las imágenes. La velocidad, por otro lado, la consultaré mediante la observación del tiempo de ejecución de un sencillo script que hará que cada imagen lleve a cabo los tests 100 veces. Dicho script es el siguiente:

![Script de prueba](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/prueba_imagenes_base.png)


La **imagen oficial completa**, **latest**, ocupa 941MB y su tiempo de ejecución ha sido de **2 minutos y 46.327 segundos**.

![Tiempo de ejecución de la imagen base completa](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/complete.png)

La imagen con el tag **slim**, **14.15.0-buster-slim**, ocupa 181MB y su tiempo de ejecución ha sido de **2 minutos y 44.940 segundos**.

![Tiempo de ejecución de la imagen base slim](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/slim.png)

La imagen con el tag **alpine**, **14.15.0-alpine3.12**, ocupa 117MB y su tiempo de ejecución ha sido de **2 minutos y 46.610 segundos**.

![Tiempo de ejecución de la imagen base alpine](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/alpine.png)

Estudiando los resultados, podemos observar que el rendimiento de las tres imágenes seleccionadas es prácticamente el mismo, ya que la diferencia que observamos es de un máximo de dos segundos aún habiendo ejecutado los tests 100 veces, por lo que la velocidad pasa a ser un factor no determinante. Por lo tanto, basaré mi decisión exclusivamente en el espacio que ocupen en disco, buscando siempre que sea el menor posible. Dado esto, la imagen base que usaré en mi contenedor para tests será **14.15.0-alpine3.12**. He utilizado este tag en otras asignaturas y, como he mencionado anteriormente, es el tipo de imagen más popular actualmente debido a su reducido tamaño, por lo que no es de extrañar que tras este análisis haya sido la imagen escogida.







