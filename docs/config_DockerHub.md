# Configuración de Docker Hub

Para llevar a cabo la configuración requerida en Docker Hub para subir correctamente mi contenedor y establecer la actualización automática he seguido los siguientes pasos:

1. He creado una cuenta en Docker Hub en la que el Docker ID coincide con mi nombre de usuario en GitHub.

2. A continuación, he creado un repositorio público en Docker Hub con mi nombre de usuario y el nombre de mi repositorio en GitHub, todo en minúscula. El nombre de dicho repositorio es **davidspace/aroundtheworld**

3. Acto seguido, he conectado mi cuenta de Docker Hub con mi cuenta de GitHub, de modo que desde Docker Hub pueda tener acceso a mi repositorio, permitiendo asi que se puedan llevar a cabo builds automáticos.

4. Una vez creado el repositorio público y conectadas ambas cuentas, el siguiente paso ha sido subir mi imagen. Para ello, en primer lugar me he logueado en Docker Hub desde la terminal mediante el comando `docker login`. Al ejecutar este comando me pedirán mi nombre de usuario y mi contraseña. Una vez dentro de mi cuenta ya puedo llevar a cabo la subida y bajada de imágenes. A continuación, establezco un tag para la imagen de la siguiente manera: `docker tag 4a6ad3ffd048 davidspace/aroundtheworld:latest` (4a6ad3ffd048 se trata del IMAGE ID de mi imagen. Cada imagen posee el suyo propio). Una vez está todo preparado, solo queda subir la imagen (hacerle push) mediante el comando `docker push davidspace/aroundtheworld:latest`

5. Una vez la imagen está subida, he llevado a cabo la configuración del build automático del repositorio creado con anterioridad en Docker Hub, de manera que cuando haga push a nuestro repositorio de GitHub se construya automáticamente la imagen con el Dockerfile en mi repositorio de Docker Hub. Para llevarla a cabo, me bastará con dirigirme a mi repositorio en Docker Hub, clickar en la pestaña **Builds**, en **Configure Automated Builds** y añadir una nueva regla de construcción (**Build rules**) que indique la fuente (**master**), el tag de Docker (**tests**), que la construcción debe ser automática (**Autobuild**) y el contexto de la construcción, es decir, el lugar en la jerarquia de directorios donde debe localizar el fichero Dockerfile (en este caso **/**). Por último, clickamos en **Save** y los cambios serán guardados y la configuración estará completada.

![Build rule](https://github.com/Davidspace/AroundTheWorld/blob/master/docs/imagenes/build_rule.png)
