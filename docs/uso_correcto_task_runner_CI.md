# Uso correcto del task runner

El task runner **Gulp** es utilizado de manera correcta en ambos sistemas de integración continua añadidos al proyecto. **Travis** utiliza el contenedor Dockerpara ejecutar los tests, y como se puede observar al final del [Dockerfile](https://github.com/Davidspace/AroundTheWorld/blob/master/Dockerfile) utilizado para construir la imagen del contenedor, se llama por defecto a la tarea **test** programada en el fichero **gulpfile.js** para la ejecución de los tests mediante el uso del comando **gulp test**.

Por otra parte, en **Shippable** se utiliza tanto para la instalación de las dependencias del proyecto como para la ejecución de los tests de manera explícita.
