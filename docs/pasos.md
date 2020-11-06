## PASOS DADOS PARA COMPLETAR EL PROYECTO
En este documento se encuentran los pasos que he dado, agrupados en los hitos que se proponen cada semana, para llevar a cabo el desarrollo del proyecto en el que estoy inmerso. Como cabe esperar, los pasos que aqui aparecerán coincidirán en su mayoria con los objetivos planteados en cada hito para superarlo.

## Hito 0: Git y GitHub para entrega de hitos del proyecto.
- [Puesta a punto](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/configGit.md) de mi perfil de GitHub.

- Fork del repositorio de la asignatura.

- Creación de un par de claves pública-privada.

- Creación del repositorio de mi proyecto (README.md, LICENSE, .gitignore, docs).

- Descripción general del proyecto en el fichero [README.md](https://github.com/Davidspace/AroundTheWorld/blob/master/README.md).

- Configuración local de git.

## Hito 1: Estructura general del proyecto.
- Creación de [milestones](https://github.com/Davidspace/AroundTheWorld/milestones), [historias de usuario](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories) e [issues](https://github.com/Davidspace/AroundTheWorld/issues). 

- Determinar las [herramientas y servicios](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md) que voy a utilizar en mi proyecto.

- Creación de un [directorio para los códigos fuente](https://github.com/Davidspace/AroundTheWorld/tree/master/lib).

- Creación del boceto de la [estructura general del proyecto](https://github.com/Davidspace/AroundTheWorld/tree/master/lib).

- Creación del fichero [iv.yaml](https://github.com/Davidspace/AroundTheWorld/blob/master/iv.yaml) e introducción de la información requerida.

- Completar la [documentación](https://github.com/Davidspace/AroundTheWorld/blob/master/README.md) con la información disponible actualmente sobre el proyecto.

## Hito 2: Tests
- Creación del directorio en el que se almacenarán los [tests](https://github.com/Davidspace/AroundTheWorld/tree/master/test).

- Creación del fichero [package.json](https://github.com/Davidspace/AroundTheWorld/blob/master/package.json) para la instalación y arranque del microservicio.

- Adición a mi proyecto del [marco de testeo](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md) elegido para ser usado: [Mocha](https://mochajs.org/).

- Creación del [fichero fuente principal](https://github.com/Davidspace/AroundTheWorld/blob/master/src/index.js) de la aplicación.

- Elección y adición a mi proyecto de una [herramienta de construcción](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md) adecuada: [Gulp](https://gulpjs.com/).

- Incluidas las nuevas dependencias del proyecto al fichero [package.json](https://github.com/Davidspace/AroundTheWorld/blob/master/package.json).

- Creación del fichero [gulpfile.js](https://github.com/Davidspace/AroundTheWorld/blob/master/gulpfile.js), cuyo objetivo es automatizar las tareas de instalación y testeo.

- Desarrollo de las clases de mi proyecto, incluido la implementación de las funciones correspondientes a las [historias de usuario](https://github.com/Davidspace/AroundTheWorld/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories).

- Adición a mi proyecto de la libreria de aserciones elegida para ser usada junto a [Mocha](https://mochajs.org/): [Chai](https://www.chaijs.com/).

- Implementación de la automatización de las tareas de instalación de dependencias y ejecución de tests unitarios.

- Implementación de los tests unitarios.

- Completar la [documentación](https://github.com/Davidspace/AroundTheWorld/blob/master/README.md) con la información disponible actualmente sobre el proyecto.

## Hito 3: Creación de un contenedor para pruebas

- Llevar a cabo una [comparación entre diferentes imágenes base](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/comparacion_imagenes_base.md) basada en sus velocidades y tamaños.

- [Elección de la imagen base](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/comparacion_imagenes_base.md) más óptima para mi proyecto.

- Creación de un fichero [Dockerfile](https://github.com/Davidspace/AroundTheWorld/blob/master/Dockerfile) adaptado a las clases que se están testeando.

- Creación de la [documentación](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/dockerfile.md) del fichero Dockerfile.

- Creación de un [repositorio en Docker Hub](https://hub.docker.com/repository/docker/davidspace/aroundtheworld) y subida de la imagen a él.

- Activación de la actualización automática y su posterior [documentación](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/config_DockerHub.md).

- Actualizar el listado de [herramientas](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md) utilizadas.

- [Registro del contenedor](https://github.com/users/Davidspace/packages/container/package/aroundtheworld)

## Hito 4: Integración continua

- Añadir Travis y Shippable como sistemas de integración continua elegidos en mi [listado de herramientas utilizadas](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md) y añadir la justificación del porqué.

- Llevar a cabo la configuración en el sistema de integración continua Travis.

- Crear y añadir a mi repositorio el fichero de configuración [.travis.yml](https://github.com/Davidspace/AroundTheWorld/blob/master/.travis.yml).

- Llevar a cabo la configuración en el sistema de integración continua Shippable.

- Crear y añadir a mi repositorio el fichero de configuración [.shippable.yml](https://github.com/Davidspace/AroundTheWorld/blob/master/.shippable.yml).

- Documentar el [proceso](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/config_integracion_continua.md) llevado a cabo en ambas configuraciones

- Documentar el [correcto uso del gestor de tareas](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/uso_correcto_task_runner_CI.md) en ambos sistemas de CI.

- Documentar el [aprovechamiento del contenedor Docker](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/docker_ci.md) en ambos sistemas de CI.

- Creación de nuevas historias de usuario y avances en el [código](https://github.com/Davidspace/AroundTheWorld/tree/master/src) y [tests](https://github.com/Davidspace/AroundTheWorld/tree/master/test).

- Actualización del [README](https://github.com/Davidspace/AroundTheWorld/blob/master/README.md) con los nuevos avances.



