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

- Ordenar los comandos que generan las capas de menos frecuentemente modificados a los que más, de modo que la cache de construcción es reutilizable.

- Uso de múltiples lineas con RUN para reducir el número de capas generadas.

- Evitar el uso de root en la construcción del contenedor para fases que no lo necesitan, con lo que se evita vulnerabilidad en la aplicación.







 

