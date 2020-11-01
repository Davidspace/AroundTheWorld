# Indico la imagen que utilizaré como base en mi contenedor
FROM fedora:32

# Documento el creador de la imagen
LABEL version = "1.0" maintainer = "David García Martínez <dgarmar@gmail.com>"

# Creación de grupo y usuario node
RUN useradd node && groupadd node && adduser node node

# Copio los ficheros que almacenan las dependencias del proyecto
COPY package*.json ./

RUN dnf -y install nodejs npm && npm -g install npm && npm -g install n && n stable

# Instalo el task runner
RUN npm install -g gulp-cli

# Usaré node como usuario, ya que no necesito permisos de superusuario para ejecutar los tests
USER node

# Instalo las dependencias, limpio la cache y elimino el fichero de dependencias
RUN npm install --no-optional && npm cache clean --force && rm ./package*.json

# Establezco el valor de la variable de entorno PATH para que encuentre el directorio node_modules
ENV PATH=/node_modules/.bin=$PATH

# Establezco una variable de entorno con la ruta al directorio que contiene los tests
ENV DIR="/test"

# Cambio el directorio de trabajo al que almacena los tests
WORKDIR $DIR



# Comandos del proceso de inicio que serán usados si no se indica uno al iniciar el contenedor. Estos comandos ejecutarán los tests
CMD ["gulp", "test"]








