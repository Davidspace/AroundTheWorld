# Integración continua

La integración continua es un tipo de acción que se ejecuta cuando sucede algún evento en un repositorio; en general, se tratará de hacer pasar tests sobre la base de código cada vez que se quiera incorporar algo a la rama máster. Este proceso permite a los desarrolladores de software evitar una larga y problemática fase de integración al final de un proyecto. 

La implementación de integración continua en mi proyecto puede facilitarse en gran medida con la ayuda de software específico, los llamados CI tools. El proceso que estas herramientas automatizarán serán o el de ejecutar directamente los tests tras instalar las dependencias necesarias o el de acceder a nuestro repositorio, clonarlo, crear un contenedor a partir de la imagen creada bajo las especificaciones de mi Dockerfile y ejecutar los tests que he desarrollado dentro de dicho contenedor. Cualquiera de las dos opciones se llevará a cabo cada vez que realice un cambio en el proyecto.

Las CI tools que he elegido para utilizar en mi proyecto han sido **Travis** y **Shippable**.

## Travis

La justificación sobre la elección de esta herramienta puede ser consultada [aqui](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md).

El ejercicio [10](https://github.com/Davidspace/Ejercicios_IV/blob/main/TDD/Ejercicio%2010.md) cuenta con la explicación de la información que debe tener el fichero de configuración para que se ejecute la integración junto al contenido del que añadiré a mi repositorio y la justificación de porqué dicho contenido.

## Shippable

La justificación sobre la elección de esta herramienta puede ser consultada [aqui](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md).

El proceso de configuración de Shippable es bastante parecido al de Travis. Tras darme de alta y activar la integración en el repositorio que contiene mi proyecto, procedo a crear el fichero de configuración de este sistema de CI.

### Creación del fichero de configuración .shippable.yml

El fichero **.shippable.yml** debe contener el mismo tipo de información que el fichero **.travis.yml** mediante la misma estructura. Sin embargo, en este caso no voy a utilizar el contenedor Docker para la ejecución de los tests, sino que lo haré de manera directa mediante el task runner.

El no utilizar contenedor Docker en este caso me obliga a llevar a cabo la instalación manual del task runner junto a los paquetes que necesita, con el que posteriormente instalaré todas las dependencias del proyecto y ejecutaré los tests. Esto lo llevaré a cabo mediante el comando `npm install -g gulp gulp-mocha gulp-run`.

Un problema con el que me he encontrado es el hecho de que no se encuentran los módulos instalados de manera global con las rutas por defecto. Por ejemplo, tras la instalación del task runner, la llamada a `gulp install` con el objetivo de instalar las dependencias devuelve el siguiente error:

![Error en gulp install](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippableerr2.png)

Esto es debido a que los módulos instalados globalmente no se encuentran en la ruta que aparece, en la cual se buscan. Dado esto, me he visto obligado a darle un nuevo valor a la variable de entorno **NODE_PATH**, el cual será la ruta hacia el directorio donde se almacenarán dichos módulos:

`env: NODE_PATH="/root/.nvm/versions/node/v14.13.0/lib/node_modules"`

Este hecho resulta un problema debido a que desde el fichero YAML de configuración no existe forma de crear una variable de entorno a partir del valor de otra. Dado que la ruta que debemos asignar a la variable de entorno depende de la versión de Node que se esté utilizando en ese build concreto (en el ejemplo, v14.13.0), si indicamos varias versiones en el fichero de configuración deberíamos ir variando el valor de NODE\_PATH en cada build de cada versión distinta. Este problema podría ser solventado mediante la variable de entorno $SHIPPABLE_NODE_VERSION, la cual almacena la versión de Node que se está utilizando en el build actual. Podriamos usarla para construir la ruta necesaria en cada build de la siguiente manera:

`env: NODE_PATH="/root/.nvm/versions/node/v${SHIPPABLE_NODE_VERSION}/lib/node_modules"`

Sin embargo, como he indicado al comienzo de la exposición de este problema, la cadena asignada a NODE\_PATH incluye de manera literal ${SHIPPABLE_NODE_VERSION} en lugar de, por ejemplo, v14.13.0, por lo que programar este comportamiento no me será posible. He intentado utilizar la instrucción `eval` de shell para resolver el valor de la variable de entorno y poder conseguir el comportamiento que deseo de la siguiente manera:

`NODE_PATH=eval "/root/.nvm/versions/node/v${SHIPPABLE_NODE_VERSION}/lib/node_modules"`

El problema es que lo que se encuentre dentro del campo **env** no se ejecutará como comandos shell, sino que solo admite asignaciones de variables de entorno del tipo `FOO=BAR`.

![Variable de entorno no muestra su valor](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippableerr1.png)

Por lo tanto, tengo dos opciones: utilizar **Gulp** para instalar las dependencias y ejecutar los tests pero solo sobre una versión de Node, o utilizar el comando `npm install`, el cual si funciona sin problemas de localización de módulos, para la instalación de las dependencias, **Gulp** para ejecutar los tests y, esta vez si, sobre varias versiones de Node. Dado que el estudio de las versiones mínimas y máximas no tiene que darse en cada ejecución y puedo llevarlo a cabo con una configuración distinta, me es más interesante utilizar de manera correcta el task runner, por lo que finalmente el fichero de configuración quedaría de la siguiente manera:

```
# Lenguaje de la aplicación
language: node_js

# Versiones utilizadas del lenguaje
node_js: "14.13.0" # Versión de mi PC

# Indico en la variable de entorno NODE_PATH la ruta donde se localizan los módulos instalados de manera global
env: NODE_PATH="/root/.nvm/versions/node/v14.13.0/lib/node_modules"

# Acto seguido, instalo el task runner junto a los paquetes que necesita para su funcionamiento
before_install: npm install -g gulp gulp-mocha gulp-run

# Mediante el task runner instalo todas las dependencias del proyecto
install: gulp install

# Mediante el task runner ejecuto los tests
script: gulp test
```
La elección de esta versión se debe a que coincide con la de mi PC, de modo que la ejecución correcta de los tests mediante Shippable me confirma su también correcta ejecución en mi local.

Por último, al contrario que mi fichero de configuración de Travis, el cual aprovecha el uso del contenedor para no especificar ninguna versión de Node debido a que el propio contenedor tiene instalada una (en mi caso, v14.15.0), en este fichero **si** podré y especificaré distintas versiones de Node, con el objetivo de ejecutar mis tests bajo todas ellas. Gracias a estas pruebas también podré comprobar cuales son las versiones mínimas y máximas con las que mi aplicación puede funcionar. 

En las pruebas con distintas versiones he utilizado varias minors. Su elección tan particular se debe a los siguientes motivos:

- **v12.19.0** es LTS, por lo que su uso será apropiado ya que sigue siendo soportada y está bastante extendida.

- **v14.13.0** es usada ya que es con la que cuenta mi PC, por lo que si funciona en Shippable, funciona en mi local.

- **v14.15.0** es usada en mi contenedor (además de ser LTS), por lo que si funciona en Shippable, funciona en mi contenedor.

- **v15.1.0** es la versión más reciente del lenguaje, por lo que es importante testear si mi proyecto funcionará bajo las características más recientes del lenguaje.

Sin embargo, he ido llevando a cabo pruebas con más versiones con el objetivo de, como ya he expuesto anteriormente, averiguar las versiones mínimas y máximas de Node que mi aplicación soporta. Las pruebas han arrojado los siguientes resultados:

![Desde v4 a v9](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippablev2.png)

![Desde v7.0 a v7.9](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippablev3.png)

![Desde v10 a v15.1](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippablev1.png)

Gracias a estas pruebas he sido capaz de conseguir una información valiosa sobre los límites de uso de mi aplicación: es capaz de funcionar sin problemas con una **versión de Node igual o superior a la 8**.

[Aquí](https://app.shippable.com/github/Davidspace/AroundTheWorld/runs/95/1/console) puede consultar un build exitoso.
