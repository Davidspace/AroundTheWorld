# Indico la imagen que utilizaré como base en mi contenedor
FROM node:14.15.0-alpine3.12

# Documento el creador de la imagen
LABEL version = "1.0" maintainer = "David García Martínez <dgarmar@gmail.com>"

# Si instalamos paquetes con npm, este intenta instalarlos por defecto en
# usr/local/lib/node_modules. Jest y Gulp se encuentran en bin 
# por lo que voy a darle permisos al usuario por defecto node
RUN chown -R node /node_modules && chown -R node /usr/local/lib/node_modules && chown -R node /usr/local/bin

# Copio los ficheros que almacenan las dependencias del proyecto
COPY package*.json ./

# Usaré node como usuario, ya que no necesito permisos de superusuario para el resto de operaciones
USER node

# Instalo las dependencias, instalo el task runner, limpio la cache y elimino el fichero de dependencias
RUN npm install --no-optional && npm install -g gulp-cli && npm cache clean --force && rm ./package*.json

# Establezco el valor de la variable de entorno PATH para que encuentre el directorio node_modules
ENV PATH=/node_modules/.bin:$PATH

# Establezco una variable de entorno con la ruta al directorio que contiene los tests
ENV DIR="/test"

# Cambio el directorio de trabajo al que almacena los tests
WORKDIR $DIR

# Comandos del proceso de inicio que serán usados si no se indica uno al iniciar el contenedor. Estos comandos ejecutarán los tests
CMD ["gulp", "test"]








