## CONFIGURACION DE GITHUB

### Configuración inicial
En primer lugar establezco mi nombre, mi correo y mi editor por defecto en la configuración mediante los siguientes comandos:

![Comandos para la configuración inicial](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/comandosConfigLocal.png)

### Clonado del repositorio del proyecto
A continuación, llevo a cabo la clonación del repositorio de mi proyecto en mi memoria para poder trabajar con él de manera local y actualizar el repositorio remoto cuando lleve a cabo los cambios correctos

![Clonado del repositorio del proyecto](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/clonadoProyecto.png)

Observamos que el repositorio remoto origen coincide con el repositorio del proyecto

![Repositorio origen](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/remote.png)

Y comprobamos que la configuración es la correcta

![Configuración local](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/configLocal.png)

### Par de claves pública-privada
El siguiente paso será llevar a cabo la generación de un par de claves pública-privada, las cuales me permitirán trabajar con GitHub sin necesidad de introducir mi email y mi contraseña cada vez que envie un cambio realizado en mi repositorio clonado al repositorio remoto

![Generación del par de claves pública-privada](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/claves1.png)

Agrego las claves recien generadas al ssh agent

![Agregar claves al ssh agent](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/claves2.png)

Una vez cuento con el par de claves pública-privada, el último paso es agregarla a mi cuenta de GitHub mediante Settings -> SSH and GPG keys -> New SSH key

![Agregar clave a GitHub](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/claveGitHub.png)

Como podemos observar, está indicado que la clave ya ha sido utilizada, ya que he llevado a cabo cambios en el repositorio remoto mediante SSH
