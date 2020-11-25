# Netlify

En este fichero documentaré el proceso que he realizado para importar mi repositorio en Netlify y desplegarlo correctamente, además de la creación y despliegue de una función serverless.

## Conexión entre GitHub y Netlify y despliegue de mi repo

Los pasos a seguir han sido los siguientes:

1. Una vez dado de alta en la plataforma, enlazo mi cuenta de GitHub con mi cuenta de Vercel, de modo que cualquier commit subido a mi cuenta personal de GitHub actualizará automáticamente el despliegue correspondiente de mi cuenta personal de Netlify.

![GitHub enlazado con Netlify](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/netlify0.png)

2. Una vez hecho esto, procedo a importar el repositorio de mi aplicación en Netlify.

![Importar proyecto](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/netlify1.png)

3. Indico el repositorio que quiero enlazar con Netlify. Como se puede observar, me indica que el despliegue continuo está configurado por defecto.

![Elección del repositorio](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/netlify2.png)

4. Completo la configuración de despliegue de mi repositorio y procedo a desplegar el repositorio.

![Configuración de despliegue](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/netlify3.png)

## Creación de una función serverless

Para la creación y despliegue de una función serverless en Netlify he seguido el siguiente proceso:

1. He creado el directorio [functions](https://github.com/Davidspace/AroundTheWorld/tree/master/functions) en el directorio raiz de mi repositorio, en el cual almacenaré los ficheros de datos necesarios y el fichero que contendrá a la función.

2. He creado la [historia de usuario](https://github.com/Davidspace/AroundTheWorld/issues/128) y los issues correspondientes a la creación de una función que estará integrada dentro del proyecto general (no se trata de un ejemplo genérico).

3. Como se puede observar en la propia historia de usuario, la función serverless a implementar llevará a cabo el listado de todos los usuarios registrados en el sistema. Todos los usuarios registrados en el sistema estan almacenados en el fichero JSON llamado [usuarios.json](https://github.com/Davidspace/AroundTheWorld/blob/master/functions/usuarios.json).

4. La función lee del archivo JSON [usuarios.json](https://github.com/Davidspace/AroundTheWorld/blob/master/functions/usuarios.json) todos los usuarios de los que existen registros.

5. Una vez obtenida la información de todos los usuarios, los introduce dentro de un objeto JSON y lo devuelve junto al código de estado **200**, el cual indica que la petición que hemos recibido ha sido procesada correctamente.

Clickando en este [enlace](https://around-the-world-app.netlify.app/.netlify/functions/usuarios) puede observar el correcto funcionamiento de la función.

