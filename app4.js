//CORS
//Instalar cors para la seguridad de la aplicación
//Le decimos quien puede o no acceder a nuestro end-point o api
//Navegadores como Chrome o Firefox lo solicitan
//Es un middleware app.use para configurar algun sitio por default
//npm i cors

require('dotenv').config();

const Server = require('./models/server3');

const server = new Server();

server.listen();