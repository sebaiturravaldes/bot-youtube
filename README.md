# Bot Youtube
Este bot permite ver una URL en youtube N veces.

## Instalación
Se deberán instalar los paquetes necesarios, para esto se debe ejecutar el siguiente comandos:

    npm install 

## Configuración
Se debe copiar el archivo `.env.example` a `.env`, esto se puede hacer con el siguiente comando:

    cp .env.example .env.

Luego se debe abrir y modificar el archivo `.env` seteando en la variable URL, la URL que quieres que se repita, por ejemplo:

URL, Es la url que quieres aumentar las visitas.
VISITS, La cantidad de visitas que quieres realizar.
VIDEO_TIME, La duración del video.

    URL=https://www.youtube.com/watch?v=
    VISITS=https://www.youtube.com/watch?v=
    VIDEO_TIME=https://www.youtube.com/watch?v=

## Ejecución
Para ejecutar el software basta con ejecutar el siguiente comando:

    npm run dev