# Configuración de GitHub Container Registry

Para llevar a cabo la configuración requerida en GitHub Container Registry para subir mi imagen a dicha plataforma he llevado a cabo los siguientes pasos:

1. Como indica la [documentación](https://docs.github.com/en/free-pro-team@latest/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images), en primer lugar debo crear un nuevo token de acceso personal (PAT) con los scopes apropiadas para las tareas que quiero llevar a cabo. Dichas tareas, en mi caso, son descargar, subir y eliminar imagenes. Por lo tanto, he clickado en **Settings**, **Developer settings** y en **Personal access tokens**. Una vez allí, he clickado en **Generate new token** y he seleccionado los siguientes scopes: `read:packages`, `write:packages` y `delete:packages`. Por último, clicko en **Generate token**.

2. Justo a continuación aparece el token (código alfanumérico de 40 caracteres), el cual no volverá a ser mostrado una vez salga de esta página. Para trabajar con él, como nos recomiendan en la ya citada [documentación](https://docs.github.com/en/free-pro-team@latest/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images), lo guardaré en una variable de entorno mediante el comando `export CR_PAT=MY_TOKEN`.

3. Una vez he creado correctamente mi token, me es posible iniciar sesión en el servicio de GitHub Container Registry, que está en ghcr.io, mediante el comando `echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin`.

4. El siguiente paso es preparar la imagen para su subida. Para ello, añado un nuevo tag a dicha imagen con un comando que tiene este aspecto: `docker tag davidspace/aroundtheworld:latest ghcr.io/davidspace/aroundtheworld:3.0.0`.

5. La imagen ya está lista para ser subida a la plataforma. Por tanto, mediante el comando `docker push ghcr.io/davidspace/aroundtheworld:3.0.0` llevo a cabo dicha subida.

6. Cuando publicamos por primera vez un paquete, la visibilidad por defecto es privada. Por lo tanto, debo dirigirme a mi perfil, clickar en **Packages**, buscar y seleccionar mi paquete, clickar en **Package settings** y, por último, clickar en **Make public**.

7. Por último, debo enlazar mi nuevo paquete a mi repositorio. Para ello, selecciono mi paquete como en el anterior paso y clicko en **Connect repository**, eligiendo el repositorio correspondiente a mi proyecto.
