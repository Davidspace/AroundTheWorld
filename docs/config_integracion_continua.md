# Integración continua

La integración continua es un tipo de acción que se ejecuta cuando sucede algún evento en un repositorio; en general, se tratará de hacer pasar tests sobre la base de código cada vez que se quiera incorporar algo a la rama máster. Este proceso permite a los desarrolladores de software evitar una larga y problemática fase de integración al final de un proyecto. 

La implementación de integración continua en mi proyecto puede facilitarse en gran medida con la ayuda de software específico, los llamados CI tools. El proceso que estas herramientas automatizarán serán o el de ejecutar directamente los tests tras instalar las dependencias necesarias o el de acceder a nuestro repositorio, clonarlo, crear un contenedor a partir de la imagen creada bajo las especificaciones de mi Dockerfile y ejecutar los tests que he desarrollado dentro de dicho contenedor. Cualquiera de las dos opciones se llevará a cabo cada vez que realice un cambio en el proyecto.

Las CI tools que he elegido para utilizar en mi proyecto han sido **Travis** y **Shippable**. Puede consultar la justificación de sus elecciones [aquí](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/herramientas.md).

## Travis

El proceso de configuración de esta herramienta de integración continua ha sido explicado paso a paso en los ejercicios 9 y 10 del tema de TDD.

- El ejercicio [9](https://github.com/Davidspace/Ejercicios_IV/blob/main/TDD/Ejercicio%209.md) cubre la parte del proceso en la que me doy de alta en el sistema de Travis enlazándolo con mi cuenta de GitHub y activo el repositorio en el que se va a aplicar la integración continua.

- El ejercicio [10](https://github.com/Davidspace/Ejercicios_IV/blob/main/TDD/Ejercicio%2010.md) cuenta con la explicación de la información que debe tener el fichero de configuración para que se ejecute la integración junto al contenido del que añadiré a mi repositorio.

## Shippable

El proceso de configuración de Shippable es bastante parecido al de Travis. Por ello lo dividiré, de igual forma que él, en tres fases:

### Darse de alta

El primer paso para trabajar con Shippable es darse de alta en él. Para ello he dado los siguientes pasos:

1. Clicko en **Get started for free**

![Comienzo del registro](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable1.png)

2. Selecciono GitHub como plataforma con la que quiero llevar a cabo el registro.

![Selección de plataforma](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable2.png)

3. Autorizo a Shippable para enlazarse con mi cuenta de GitHub.

![Autorización de enlace](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable3.png)

4. De modo adicional, debo aceptar la petición de Shippable de poseer los permisos que lista en la siguiente imagen:

![Listado de permisos](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable4.png)

### Activación del repositorio del proyecto

Una vez dado de alta, procedo a activar el repositorio en el que se va a aplicar la integración continua. Al igual que Travis, puedo llevar a cabo este proceso desde mi propio perfil en la página web de Shippable:

1. Accedo al listado de repositorios públicos con los que cuento en mi cuenta de GitHub desde Shippable

![Listado de repositorios](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable5.png)

2. Habilito la integración continua en el repositorio de mi proyecto, **AroundTheWorld**.

![!Habilitar IC](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable6.png)

### Creación del fichero de configuración .shippable.yml

El fichero **.shippable.yml** debe contener el mismo tipo de información que el fichero **.travis.yml** mediante la misma estructura. Sin embargo, al contrario que mi fichero de configuración de Travis, el cual aprovecha el uso del contenedor para no especificar ninguna versión de Node debido a que el propio contenedor tiene instalada una (en mi caso, v14.15.0), en este fichero **si** especificaré distintas versiones de Node, con el objetivo de ejecutar mis tests bajo todas ellas y asi poder comprobar cuales son las versiones mínimas y máximas con las que mi aplicación puede funcionar. Por lo tanto, quedaría de la siguiente forma:

```
language:
  - node_js

node_js:
  - "12.19.0" # Versión LTS
  - "14.13.0" # Versión de mi PC
  - "14.15.0" # Versión de mi contenedor (LTS)
  - "15.1.0" # Versión más reciente

install:
  - npm install
  - npm install -g gulp

script:
  - gulp test
```

En el fichero final me quedo con unas pocas versiones de todas las posibles, que son las que suelo utilizar. Sin embargo, he ido llevando a cabo pruebas con más versiones con el objetivo de, como ya he expuesto anteriormente, averiguar las versiones mínimas y máximas de Node que mi aplicación soporta. Las pruebas han arrojado los siguientes resultados:

![Desde v4 a v9](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippablev2.png)

![Desde v10 a v15.1](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippablev1.png)

Gracias a estas pruebas he sido capaz de conseguir una información valiosa sobre los límites de uso de mi aplicación: es capaz de funcionar sin problemas con una **versión de Node igual o superior a la 8**.

Con esto, la configuración de Shippable está completa y lleva a cabo la ejecución de los tests de manera correcta cada vez que sucede un cambio en el contenido de mi repositorio.

### Build exitoso

![Build](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable7.png)

![Log del build - 1](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable8.png)

![Log del build - 2](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/shippable9.png)
