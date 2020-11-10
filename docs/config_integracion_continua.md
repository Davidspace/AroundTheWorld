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

El fichero **.shippable.yml** debe contener el mismo tipo de información que el fichero **.travis.yml** mediante la misma estructura. Sin embargo, en este caso no voy a utilizar el contenedor Docker para la ejecución de los tests. Por lo tanto, al contrario que mi fichero de configuración de Travis, el cual aprovecha el uso del contenedor para no especificar ninguna versión de Node debido a que el propio contenedor tiene instalada una (en mi caso, v14.15.0), en este fichero **si** podré y especificaré distintas versiones de Node, con el objetivo de ejecutar mis tests bajo todas ellas. Gracias a estas pruebas también podré comprobar cuales son las versiones mínimas y máximas con las que mi aplicación puede funcionar. 

Además, el no utilizar el contenedor Docker en este caso me obliga a llevar a cabo la instalación manual del task runner, con el que posteriormente instalaré todas las dependencias del proyecto y ejecutaré los tests. 

Un problema con el que me he encontrado es el hecho de que no se encuentren los módulos instalados de manera global. Dado esto, me he visto obligado a darle un nuevo valor a la variable de entorno **NODE_PATH**, el cual será la ruta hacia el directorio donde se almacenarán dichos módulos.

Por lo tanto, el fichero de configuración quedaría de la siguiente forma:

```
# Lenguaje de la aplicación
language:
  - node_js

# Versiones utilizadas del lenguaje
node_js:
  - "12.19.0" # Versión LTS
  - "14.13.0" # Versión de mi PC
  - "14.15.0" # Versión de mi contenedor (LTS)
  - "15.1.0" # Versión más reciente

# Indico en la variable de entorno NODE_PATH la ruta donde se localizan los módulos instalados de manera global
env:
  - NODE_PATH="/root/.nvm/versions/node/v12.19.0/lib/node_modules"

# Acto seguido, instalo el task runner junto a los paquetes que necesita para su funcionamiento
before_install:
  - npm install -g gulp gulp-mocha gulp-run

# Mediante el task runner instalo todas las dependencias del proyecto
install:
  - gulp install

# Mediante el task runner ejecuto los tests
script:
  - gulp test
```

En el fichero final me quedo con unas pocas versiones de todas las posibles:

- **v12.19.0** es LTS, por lo que su uso será apropiado ya que sigue siendo soportada y está bastante extendida.

- **v14.13.0** es usada ya que es con la que cuenta mi PC, por lo que si funciona en Shippable, funciona en mi local.

- **v14.15.0** es usada en mi contenedor (además de ser LTS), por lo que si funciona en Shippable, funciona en mi contenedor.

- **v15.1.0** es la versión más reciente del lenguaje, por lo que es importante testear si mi proyecto funcionará bajo las características más recientes del lenguaje.

Sin embargo, he ido llevando a cabo pruebas con más versiones con el objetivo de, como ya he expuesto anteriormente, averiguar las versiones mínimas y máximas de Node que mi aplicación soporta. Las pruebas han arrojado los siguientes resultados:

![Desde v4 a v9](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippablev2.png)

![Desde v7.0 a v7.9](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippablev3.png)

![Desde v10 a v15.1](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippablev1.png)

Gracias a estas pruebas he sido capaz de conseguir una información valiosa sobre los límites de uso de mi aplicación: es capaz de funcionar sin problemas con una **versión de Node igual o superior a la 8**.

Con esto, la configuración de Shippable está completa y lleva a cabo la ejecución de los tests de manera correcta sobre distintas versiones de Node cada vez que sucede un cambio en el contenido de mi repositorio.

### Build exitoso

![Build](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable7.png)

![Log del build - 1](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable8.png)

![Log del build - 2](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable9.png)
