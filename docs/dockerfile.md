# Dockerfile

## Comandos utilizados

El primer comando que he utilizado, como en la gran mayoria de Dockerfiles, me ha servido para fijar la versión de la imagen base, cuya elección argumento en este [documento](). Dicho comando es el siguiente:

`FROM node:14.15.0-alpine3.12`

El siguiente comando me sirve para añadirle etiquetas al Dockerfile, es decir, metadatos que servirán para identificar, como establezco en este caso, la versión del Dockerfile y el creador del mismo.

`LABEL version = "1.0" maintainer = "David García Martínez <dgarmar@gmail.com>"`

En el tercer comando me encargo de copiar el fichero que almacena las dependencias de mi proyecto dentro del contenedor, de modo que pueda instalarlas dentro de él posteriormente sin problemas. 

`COPY package*.json ./`

La siguiente linea contiene la instrucción RUN, que se encarga de ejecutar cualquier comando que se le indique como argumento. Dicha linea aúna varios comandos que serán ejecutados uno tras otro en el siguiente orden:

1. `npm install` Instala las dependencias localizadas en los ficheros copiados en el anterior comando.

2. `npm install -g gulp-cli` Instala el task runner utilizado en mi proyecto, Gulp.

3. `npm cache clean --force` Fuerzo a llevar a cabo a limpieza de la cache de npm, liberando espacio.

4. `rm package*.json` Borro los ficheros de dependencias copiados con anterioridad, ya que han cumplido su objetivo y su borrado no supone ningún problema, además de que obtenemos una ganancia de espacio.

Establezco el valor de la variable de entorno PATH para que encuentre el directorio node_modules y otra variable de entorno DIR con la ruta al directorio que contiene los tests. 

`ENV PATH=/node_modules/.bin=$PATH && ENV DIR="/test"`

Cambio el directorio de trabajo al que almacena los tests.

`WORKDIR $DIR`

En el siguiente comando cambio el usuario que utilizo a node, un usuario que viene por defecto en todas las imágenes base de node y que no tiene permisos de superusuario, ya que no los necesito para ejecutar los tests y hacerlo con ellos proporcionaría vulnerabilidad a la aplicación.

`USER node`

La última linea del Dockerfile contiene los comandos del proceso de inicio que serán usados si no se indica uno al iniciar el contenedor. La ejecución de estos comandos ejecutarán los tests

`CMD ["gulp", "test"]`

## Buenas prácticas seguidas en el desarrollo

En la creación del Dockerfile he intentado seguir las mejores prácticas indicadas para ella, las cuales aseguran que el rendimiento, el tamaño y la optimización del contenedor resultante sean los mejores posibles. Dichas prácticas son:

- Uso de una imagen base oficial

- Uso de una imagen base minimizada

- Utilización de los recursos estrictamente necesarios, de modo que el contenedor generador sea tan "efímero" como sea posible, de modo que pueda ser destruido y posteriormente rebuildeado y reemplazado con la mínima configuración posible.

- Uso de un fichero .dockerignore

- Ordenar los comandos que generan las capas de menos frecuentemente modificados a los que más, de modo que la cache de construcción es reutilizable.

- Uso de múltiples lineas con RUN para reducir el número de capas generadas.

- Evitar el uso de root en la construcción del contenedor para fases que no lo necesitan, con lo que se evita vulnerabilidad en la aplicación.

## Optimización de la imagen

La optimización de las imágenes que genere mediante mis Dockerfiles es algo que siempre debo de hacer, ya que esta se puede llevar a cabo simplemente modificado algunos comandos y añadiendo otros y los resultados pueden ser notorios. Gran parte de la optimización llevada a cabo ha sido citada anteriormente en las buenas prácticas seguidas, pero aquí indicaré los comandos concretos:

### Instalación de los recursos estrictamente necesarios

Mediante el comando `npm install` junto a la opción `--no-optional`, indico que únicamente instale las dependencias obligatorias para el funcionamiento de los tests, excluyendo a las opcionales. 

### Eliminar ficheros innecesarios

Otra manera de optimizar la imagen es hacer que no ocupe más tamaño del necesario. Por lo tanto, intentaré borrar todos los ficheros que no cumplan un rol específico para la realización de los tests, como es el caso del fichero de dependencias una vez instaladas estas o el caché de npm tras su uso.

`RUN rm ./package*.json && npm cache clean --force`

### Generación de las mínimas capas posibles

El uso de ĺa instrucción RUN junto a varios comandos, en lugar de un solo comando por instrucción RUN, me permite reducir el número de capas generadas en la creación de la imagen, ya que cada uso de la instrucción genera una de ellas. En mi caso evito crear tres capas adicionales:

`RUN npm install --no-optional && npm install -g gulp-cli && npm cache clean --force && rm package*.json`

en lugar de

`RUN npm install --no-optional`\
`RUN npm install -g gulp-cli`\
`RUN npm cache clean --force`\
`RUN rm package*.json`

### Uso del fichero .dockerignore

El fichero .dockerignore tiene un funcionamiento muy similar a .gitignore. En él indico los ficheros que queremos que Docker ignore a la hora de generar una imagen a través de Dockerfile. Siguiendo las [mejores prácticas de Node](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/), incluiré en él las siguientes lineas, de modo que evito que mis módulos locales y logs de debug sean copiadas dentro de mi imagen y posiblemente sobreescribiendo módulos instalados dentro de la imagen:

`node_modules`\
`npm-debug.log`

### Uso de docker-squash

Docker-squash es una herramienta que "aplasta" múltiples capas de una imagen docker en una con el objetivo de crear una nueva imagen con menos capas y más pequeñas. La imagen "aplastada" funcionará de la misma manera que la original, ya que se mantienen comandos como PORT y ENV. Además, los ficheros eliminados en las últimas capas son purgados de la imagen cuando esta es "aplastada".

Existen varias formas de utilizar esta herramienta, aunque yo voy a utilizar la opción `--squash` de `docker build`. Para utilizar esta opción es necesario activar el modo experimental de Docker, lo cual no es inmediato. Para ello, crearé un fichero en **/etc/docker/daemon.json** mediante el comando `sudo nano /etc/docker/daemon.json`, y en él escribiré el siguiente contenido:

![Docker experimental](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/docker_experimental.png)

Una vez activado, primero ejecutaré `docker build AroundTheWorld/ -t davidspace/aroundtheworld:latest` para crear una imagen sin "aplastar", y acto seguido, `docker build --squash AroundTheWorld/ -t davidspace/aroundtheworld:squashed`, creando una imagen "aplastada".

Gracias a la orden `docker history` podemos consultar el historial de una imagen, el cual nos dará información sobre las diferencias entre las dos imágenes.

`docker history davidspace/aroundtheworld:latest`

![Historial de la imagen no aplastada](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/docker_historial_latest.png)

`docker history davidspace/aroundtheworld:squashed`

![Historial de la imagen aplastada](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/docker_historial_squashed.png)

Podemos observar como en la segunda imagen, la correspondiente con el historial de la imagen "aplastada", todas las capas han sido mergeadas en una sola. Sin embargo, no he conseguido reducir el tamaño de la imagen mediante esta herramienta.



