# Aprovechamiento del contenedor de Docker en los sistemas de CI

El contenedor de Docker creado con anterioridad con el objetivo de ejecutar los tests en un entorno controlado ha sido de gran uso a la hora de introducir la ejecución de los tests como norma en cada actualización del repositorio. Los principales motivos que me han llevado a darle uso han sido los siguientes:

## Entorno de ejecución de los tests

La opción más óptima era hacer que los sistemas de integración continua ejecutasen los tests dentro del contenedor, ya que toda la configuración estaba hecha y se sigue tratando del entorno idóneo donde llevarlos a cabo. De este modo, Travis llevan a cabo automáticamente después de cualquier actualización del repositorio la construcción de la imagen a partir del Dockerfile de mi repositorio y la posterior creación del contenedor a partir de dicha imagen, en el cual se indica que deben ejecutarse los tests.

## Entorno previamente preparado

En la estructura general del fichero de configuración de Travis se indican tanto el lenguaje de programación que se va a usar como las versiones de este con las que se va a trabajar:

```
language:
  - node_js

node_js:
  - "13"
  - "14"
  - "15"
```

Además, también es necesario programar la instalación del task runner para su posterior uso, junto a todas las dependencias con las que cuenta el proyecto:

```
before_install:
  - npm install -g grunt-cli
  - npm install
```

Sin embargo, podemos observar que, en vista de la utilización del contenedor como entorno de ejecución de los tests, proporcionar esta información resulta redundante, ya que dentro del propio contenedor han sido instaladas todas las dependencias necesarias que el proyecto necesita para su correcto funcionamiento, entre las cuales se incluye el lenguaje junto a sus versiones y el task runner.

Dado esto, en Travis se nos abre la posibilidad de prescindir de dar esta información. Sin embargo, ante la falta de la especificación de un lenguaje determinado, Travis toma Ruby como lenguaje por defecto. Es aqui cuando, tras una breve búsqueda por la documentación, he encontrado una opción que casa perfectamente con mis necesidades actuales: el uso de la imagen **minimal**. Esta imagen no está enfocada en ningún lenguaje en particular, por lo que no se ejecutarán comandos de instalación o scripts por defecto propios de un lenguaje determinado que no aporten nada en el contexto actual debido a la situación expuesta. Esto me permite reducir los recursos necesarios para poner en funcionamiento la integración continua en mi proyecto y, por tanto, optimizar su uso gracias al uso del contenedor de Docker.

```
language:
  - minimal

before_install:
- docker build -t davidspace/aroundtheworld .

script:
  - docker run -t -v `pwd`:/test davidspace/aroundtheworld
```
