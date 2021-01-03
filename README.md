# AroundTheWorld
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Desarrollo de las rúbricas

- Rúbrica 1: Justificación técnica del framework elegido para el microservicio con documentación sobre cómo se usa en la práctica. Puede consultar la documentación sobre el framework elegido [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/microservicio.md#framework-web).

- Rúbrica 2: Diseño en general del API, las rutas (o tareas), tipos devueltos por las peticiones y estados devueltos por las mismas, tests y documentación de todo, justificando como se ajustan a las historias de usuario, de forma que reflejen correctamente un diseño por capas que desacopla la lógica de negocio del API. Puede acceder al fichero que contiene la API [en este enlace](https://github.com/Davidspace/AroundTheWorld/blob/master/api/api.js) y al fichero manejador de datos [desde aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/api/model.js). La documentación sobre ambos se encuentra [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/microservicio.md#elementos-del-microservicio)

- Rúbrica 3: Uso de buenas prácticas: configuración distribuida, logs, uso de middleware. Puede consultar la documentación sobre su uso [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/microservicio.md#uso-de-buenas-pr%C3%A1cticas).

- Rúbrica 4: Tests correctos y de acuerdo con las historias de usuario. Puede consultar los tests [en este enlace](https://github.com/Davidspace/AroundTheWorld/blob/master/test/api.test.js). La documentación sobre ellos se encuentra [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/microservicio.md#tests).

- Rúbrica 5: 2 puntos: concedidos por originalidad de la aplicación, grado de terminación, utilidad para la asignatura, cantidad de trabajo invertido, el hecho que se haya avanzado el proyecto, creación de una imagen Docker para desplegarlo, configuración correcta del gestor de tareas. Puede consultar todos las herramientas añadidas, las funcionalidades implementadas y los tests desarollados en la [documentación del microservicio](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/microservicio.md).

## Serverless

- [Despliegue](https://around-the-world-seven.vercel.app/) correcto y funcionando, con [documentación](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/Vercel.md#conexi%C3%B3n-entre-github-y-vercel-y-despliegue-de-mi-repo) de la conexión entre el repo en GitHub y Vercel para despliegue continuo.

- Integración dentro del proyecto general (es decir, como todo el código deberá tener sus issues y/o HU correspondientes). En esta rúbrica se valorará que se haya ido más allá del despliegue de un ejemplo. En mi caso he creado una función serverless que se integra en mi proyecto, la cual puedes consultar [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/api/viajesUsuario.js). Puedes consultar su documentación [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/Vercel.md#creaci%C3%B3n-de-una-funci%C3%B3n-serverless) y su HU correspondiente en este [enlace](https://github.com/Davidspace/AroundTheWorld/issues/127).

- Uso (e integración) de varias plataformas de despliegue (es decir, no repetir la misma función en todas las plataformas, sino crear funciones nuevas que también se integren en el proyecto). En mi caso he escogido **Netfily** como segunda plataforma de despliegue. Su documentación se encuentra [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/Netlify.md). La función desplegada en ella puede ser consultada [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/functions/usuarios.js) y su documentación en este [enlace](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/Netlify.md#creaci%C3%B3n-de-una-funci%C3%B3n-serverless)

- En conjunción con la rúbrica 2, se asigna por originalidad, buena integración dentro del proyecto, tener que programarlos en un lenguaje diferente al resto del proyecto (si es que el lenguaje en que está este no está soportado en el sistema serverless), integración con un front-end web/bot de Telegram/webhook de cualquier tipo que funcione en la práctica. En mi caso, he creado un bot de Telegram. La documentación puede ser consultada [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/Vercel.md#creaci%C3%B3n-de-un-bot-de-telegram) y la función serverless que lo maneja [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/api/botViajes.js).

## Integración continua

- [Integración continua](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/config_integracion_continua.md) funcionando y correcta justificación de la misma.

- Configuración de algún sistema de [integración continua adicional](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/config_integracion_continua.md#shippable) (justificado de la misma forma).

- [Uso correcto del gestor de tareas](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/uso_correcto_task_runner_CI.md) en todos los casos anteriores.

- [Aprovechamiento del contenedor de Docker](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/docker_ci.md) generado en el milestone anterior en alguno de los sistemas de CI, especialmente si hay un cambio o adaptación del mismo.

- [Tests significativos](https://github.com/Davidspace/AroundTheWorld/blob/master/test/viaje.test.js) y/o [avance del proyecto](https://github.com/Davidspace/AroundTheWorld/blob/master/src/viaje.js) en sí más allá del milestone anterior. 

## Código fuente
- Puede acceder al directorio que contiene el código fuente del microservicio clickando [en este enlace](https://github.com/Davidspace/AroundTheWorld/tree/master/src).

- La **clase principal** del proyecto es la clase **Destino**. Esta clase se puede consultar [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/src/destino.js).

- El **fichero fuente principal** del proyecto es el llamado **index.js**. El contenido de este puede ser consultado [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/src/index.js).

## Ficheros de test
- El directorio donde se localizan los ficheros de test se denomina [test](https://github.com/Davidspace/AroundTheWorld/tree/master/test).

- El fichero que contiene los tests relacionados con el fichero fuente principal se denomina [index.test.js](https://github.com/Davidspace/AroundTheWorld/blob/master/test/index.test.js).

- El fichero que contiene los tests relacionados con la clase principal se denomina [destino.test.js](https://github.com/Davidspace/AroundTheWorld/blob/master/test/destino.test.js).

- El fichero que contiene los tests relacionados con la clase que modela los viajes se denomina [viaje.test.js](https://github.com/Davidspace/AroundTheWorld/blob/master/test/viaje.test.js).

## Docker

- [Aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/comparacion_imagenes_base.md) puede consultar la comparativa realizada entre imágenes base y el por qué de la elección de la usada.

- Pinche en el siguiente enlace para acceder al [Dockerfile](https://github.com/Davidspace/AroundTheWorld/blob/master/Dockerfile). Para ver su documentación, [clicke aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/dockerfile.md).

- Para ver todo el proceso seguido para subir el contenedor a Docker Hub y activar la actualización automática, clicke en [este enlace](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/config_DockerHub.md).

- Para acceder a mi repositorio en Docker Hub, pulse [aquí](https://hub.docker.com/repository/docker/davidspace/aroundtheworld).

- Para ver todos los pasos dados para publicar mi contenedor en GitHub Container Registry [clicke aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/config_GHCR.md).

- Para acceder a mi paquete en GitHub Container Registry, pulse [aquí](https://github.com/users/Davidspace/packages/container/package/aroundtheworld).

- La documentación sobre el seguimiento de buenas prácticas en la optimización del tamaño y velocidad del contenedor resultante se encuentra [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/dockerfile.md#buenas-pr%C3%A1cticas-seguidas-en-el-desarrollo).

## Ejecución de los tests en un contenedor Docker

Para ejecutar los tests en un contenedor debe clonar este repositorio en su equipo local en primer lugar mediante el siguiente comando:

`git@github.com:Davidspace/AroundTheWorld.git`

A continuación debe descargarse la imagen desde alguno de las dos siguientes plataformas:

- **Docker Hub**: `docker pull davidspace/aroundtheworld`

- **GitHub Container Registry**: `docker pull ghcr.io/davidspace/aroundtheworld`

Una vez cumple estos dos requisitos, debe dirigirse al directorio del repositorio y ejecutar el siguiente comando:

<code>docker run -t -v \`pwd\`:/test davidspace/aroundtheworld</code>

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
- La **configuración de GitHub** puede ser comprobada [aquí](documentos/configGit.md).

- La **justificación sobre el uso de las herramientas** listadas con anterioridad puede consultarse [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md).

- Las **milestones** en las que se divide el desarrollo del proyecto pueden ser consultadas [aquí](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories).

- Las **historias de usuario** activas en este momento pueden consultarse [aquí](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories).

- Los **issues abiertos** en este momento del desarrollo del proyecto pueden ser consultados [aquí](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aopen+is%3Aissue).

- Los **issues cerrados** que han dado pie al estado actual del proyecto pueden ser consultados [aquí](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aissue+is%3Aclosed).

- Los **pasos seguidos en el desarrollo del proyecto** pueden ser examinados [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/pasos.md).

## Fichero iv.yaml
Clicke en el siguiente enlace para acceder al fichero [iv.yaml](https://github.com/Davidspace/AroundTheWorld/blob/master/iv.yaml), cuya finalidad es especificar ficheros y otros parámetros de configuración para test.

## Fichero para automatización de tareas
El fichero designado para configurar la **automatización de tareas** por parte de **Gulp** es el denominado **gulpfile.js**. Puede acceder a su contenido clickando [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/gulpfile.js).

## Autor
[David García Martínez](https://github.com/Davidspace)
