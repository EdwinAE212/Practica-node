# Descripción de la Practica
Se creó una base de datos en mongodb donde se utilizó la misma estructura y datos que se encuentran en https:/swapi.info/ esto a través de un script, después con node.js junto a express se creó una conexión a esa base de datos para extraerlos gracias a los endpoints que fueron solicitados en el documento, para probar esta practica es necesario llamar a los endpoint en aplicaciones como Insomnia o Postman donde se ingresan las urls de los endpoints y se trabaja con JSON.

# Herramientas Utilizadas
- Node.js
- MongoDB
- Librerías Express, Cors, Mongoose, Dotenv

# Como probar la practica
- Primero deberán clonar el proyecto con el siguiente comando en la carpeta donde lo quieren: git clone https://github.com/EdwinAE212/Practica-node.git
- Una vez clonado deben de encontrarse en la raíz del proyecto e instalar las dependencias con: npm install
- para terminar, en la raíz se deberá crear el archivo .env el que contendrá información que pasare por privado.
- ya con eso ejecutas con el comando: node app.js en la terminal y quedaría listo para probarlo.
