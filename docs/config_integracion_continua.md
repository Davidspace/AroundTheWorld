# Integración continua

La integración continua es un tipo de acción que se ejecuta cuando sucede algún evento en un repositorio; en general, se tratará de hacer pasar tests sobre la base de código cada vez que se quiera incorporar algo a la rama máster. Este proceso permite a los desarrolladores de software evitar una larga y problemática fase de integración al final de un proyecto. 

La implementación de integración continua en mi proyecto puede facilitarse en gran medida con la ayuda de software específico, los llamados CI tools. El proceso que estas herramientas automatizarán será la de acceder a nuestro repositorio, clonarlo, crear un contenedor a partir de la imagen creada bajo las especificaciones de mi Dockerfile y ejecutar los tests que he desarrollado dentro de dicho contenedor cada vez que realice un cambio en el proyecto.

Las CI tools que he elegido para utilizar en mi proyecto han sido Travis y .... Puede consultar la justificación de sus elecciones [aquí]().

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

...




