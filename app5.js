//Separar rutas y el controlador de la clase
//crear en el directorio raiz una carpeta que se llame routes
//crear dentro de routes el archivo user.js
//este archivo mantendra las rutas y su controlador


require('dotenv').config();

const Server = require('./models/server4');

const server = new Server();

server.listen();