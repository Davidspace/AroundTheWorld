# Aprovechamiento del contenedor de Docker en los sistemas de CI

El contenedor de Docker creado con anterioridad con el objetivo de ejecutar los tests en un entorno controlado ha sido de gran uso a la hora de introducir la ejecución de los tests como norma en cada actualización del repositorio. Los principales motivos que me han llevado a darle uso han sido los siguientes:

## Entorno idóneo para la ejecución de los tests

La opción más óptima era hacer que los sistemas de integración continua ejecutasen los tests dentro del contenedor, ya que se sigue tratando del entorno idóneo donde llevarlos a cabo gracias a que siempre contará con la misma configuración independientemente del número de ejecuciones que se lleven a cabo, evitando asi errores inesperados debido a cambios a priori seguros de cualquier otro elemento del equipo.

De este modo, Travis lleva a cabo automáticamente después de cualquier actualización del repositorio el pull de la imagen desde mi repositorio en Docker Hub, con la cual creará el contenedor en el que inmediatamente después se ejecutarán los tests.

## Entorno previamente preparado

Como se expone en el ejercicio [10](https://github.com/Davidspace/Ejercicios_IV/blob/main/TDD/Ejercicio%2010.md) del tema de TDD, en el cual justifico la configuración usada para Travis, el uso del contenedor de Docker me ofrece de por si un entorno de ejecución adecuado para la ejecución de los tests, lo que supone una ganancia sustancial en la eficiencia del uso de recursos, ya que no será necesario indicar en el fichero de configuración de Travis ni el lenguaje a utilizar ni las versiones de este sobre las que trabajaré.
