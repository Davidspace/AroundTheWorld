# AroundTheWorld
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Desarrollo del hito 3

- En este [enlace](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/pasos.md) puede observar los pasos dados para la realización del hito 3.

- En este [enlace](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md) puede observar el listado de herramientas con las que el proyecto cuenta hasta el momento.

## Docker

- [Aqui](https://github.com/Davidspace/AroundTheWorld/tree/master/docs) puedes consultar la comparativa realizada entre imágenes base y el por qué de la elección de la usada.

- Pincha en el siguiente enlace para acceder al [Dockerfile](https://github.com/Davidspace/AroundTheWorld/blob/master/Dockerfile). Para ver su documentación, [clicke aqui](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/dockerfile.md).

- Para ver todo el proceso seguido para subir el contenedor a Docker Hub y activar la actualización automática, clicke en [este enlace](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/config_DockerHub.md).

- Para acceder a mi repositorio en Docker Hub, pulse [aqui](https://hub.docker.com/repository/docker/davidspace/aroundtheworld).

- Para ver todos los pasos dados para publicar mi contenedor en GitHub Container Registry [clicke aqui](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/config_GHCR.md).

- Para acceder a mi paquete en GitHub Container Regostry, pulse [aqui](https://github.com/users/Davidspace/packages/container/package/aroundtheworld).

- La documentación sobre el seguimiento de buenas prácticas en la optimización del tamaño y velocidad del contenedor resultante se encuentra [aqui](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/dockerfile.md).

## Ejecución de los tests en un contenedor Docker

Para ejecutar los tests en un contenedor debe clonar este repositorio en su equipo local en primer lugar mediante el siguiente comando:

`git@github.com:Davidspace/AroundTheWorld.git`

A continuación debe descargarse la imagen desde alguno de las dos siguientes plataformas:

- **Docker Hub**: `docker pull davidspace/aroundtheworld`

- **GitHub Container Registry**: `docker pull ghcr.io/davidspace/aroundtheworld`

Una vez cumple estos dos requisitos, debe dirigirse al directorio del repositorio y ejecutar el siguiente comando:

<code>docker run -t -v \`pwd\`:/test davidspace/aroundtheworld</code>

## Código fuente
- Puedes acceder al directorio que contiene el código fuente del microservicio clickando [en este enlace](https://github.com/Davidspace/AroundTheWorld/tree/master/src).

- La **clase principal** del proyecto es la clase **Destino**. Esta clase se puede consultar [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/src/destino.js).

- El **fichero fuente principal** del proyecto es el llamado **index.js**. El contenido de este puede ser consultado [aqui](https://github.com/Davidspace/AroundTheWorld/blob/master/src/index.js).

## Ficheros de test
- El directorio donde se localizan los ficheros de test se denomina [test](https://github.com/Davidspace/AroundTheWorld/tree/master/test).

- El fichero que contiene los tests relacionados con el fichero fuente principal se denomina [index.test.js](https://github.com/Davidspace/AroundTheWorld/blob/master/test/index.test.js).

- El fichero que contiene los tests relacionados con la clase principal se denomina [destino.test.js](https://github.com/Davidspace/AroundTheWorld/blob/master/test/destino.test.js).

## Instalación
La propia aplicación cuenta con una herramientas de construcción, **Gulp**, la cual automatiza el proceso de instalación de la misma en su equipo. Para llevar a cabo este proceso, debe ejecutar la siguiente orden:

`gulp install`

## Testeo
De la misma forma, es la ya mencionada herramienta de construcción la que automatiza la ejecución de los tests unitarios desarrollados con el fin de comprobar que el funcionamiento de la aplicación es el correcto. Para llevar a cabo dicha ejecución, debe ejecutar la siguiente orden:

`gulp test`

## Motivación
En el preciso momento en el que decidimos hacer un viaje nos asaltan tantas dudas que a menudo nos hacen desistir de llevarlo a cabo o hacen el proceso de preparar dicho viaje muy agobiante. 

- ¿Dónde voy? 
- ¿Cómo llego? 
- ¿Dónde me alojo? 
- ¿Qué hago una vez alli? 
- ¿Qué necesito para hacer las actividades que he planeado? 
- ¿Cómo vuelvo?

El listado de dudas sigue y sigue. En una sociedad tan globalizada como la nuestra, en la que los viajes son cada vez más frecuentes por muchos motivos, conseguir facilitar al usuario todas las tareas que debe llevar a cabo es algo que dispone de mucho valor para el cliente. Por lo tanto, considero que este microservicio que me propongo implementar abordará un problema cuya solución será útil para la gran mayoria de la sociedad. Un alcance de esta magnitud me asegura que mi microservicio tendrá cabida en el mercado si es desarrollado siguiendo las normas de calidad de desarrollo de software.

## Descripción
**AroundTheWorld** es un microservicio que pretende dar respuesta a todas las preguntas que asaltan a cualquier persona que se dispone a emprender un viaje a cualquier localización. Para ello, **AroundTheWorld** se encargará de proporcionar a sus clientes toda la información relevante relacionada con el destino escogido, como pueden ser los alojamientos disponibles junto a sus valoraciones y características, los puntos de mayor interés de dicha localización, los métodos de transporte disponibles para desplazarse, etc.

## Herramientas
- **Lenguaje de programación:** [JavaScript](https://www.javascript.com/).

- **Entorno de ejecución:** [Node.js](https://nodejs.org/es/)

- **Framework para aplicaciones web:** [Sails](https://sailsjs.com/). 

- **Framework de testeo:** [Mocha](https://mochajs.org/).

- **Libreria de aserciones:** [Chai](https://www.chaijs.com/)

- **Base de datos:** [PostgreSQL](https://www.postgresql.org/).

- **Servicio de log:** [Winston](https://github.com/winstonjs/winston).

- **Herramienta de construcción:** [Gulp](https://gulpjs.com/).

- **Gestor de contenedores:** [Docker](https://www.docker.com/).

## Documentación
- La **configuración de GitHub** puede ser comprobada [aqui](documentos/configGit.md).

- La **justificación sobre el uso de las herramientas** listadas con anterioridad puede consultarse [aqui](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md).

- Las **milestones** en las que se divide el desarrollo del proyecto pueden ser consultadas [aqui](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories).

- Las **historias de usuario** activas en este momento pueden consultarse [aqui](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories).

- Los **issues abiertos** en este momento del desarrollo del proyecto pueden ser consultados [aqui](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aopen+is%3Aissue).

- Los **issues cerrados** que han dado pie al estado actual del proyecto pueden ser consultados [aqui](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aissue+is%3Aclosed).

- Los **pasos seguidos en el desarrollo del proyecto** pueden ser examinados [aqui](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/pasos.md).

## Fichero iv.yaml
Clicka en el siguiente enlace para acceder al fichero [iv.yaml](https://github.com/Davidspace/AroundTheWorld/blob/master/iv.yaml), cuya finalidad es especificar ficheros y otros parámetros de configuración para test.

## Fichero para automatización de tareas
El fichero designado para configurar la **automatización de tareas** por parte de **Gulp** es el denominado **gulpfile.js**. Puedes acceder a su contenido clickando [aqui](https://github.com/Davidspace/AroundTheWorld/blob/master/gulpfile.js).

## Autor
[David García Martínez](https://github.com/Davidspace)
