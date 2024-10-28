// uso del CORS
// separar rutas y controladores
// crear carpeta routes, dentro usuarios.js
// crear carpeta cotrollers para lo que esta dentro de la ruta pasar a esta carpeta
// dentro de controllers crear el archivo usuarios.js

const express = require('express');
const cors = require('cors');

class Server {
constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api0/usuarios'; // agregarlo como un simple string.

    // Middlewares : Funciones que agrega mas funcionalidades
    this.middlewares();

    // Rutas de mi aplicacion
    this.routes();
}

middlewares() {
    // CORS
    this.app.use(cors());

    // Directorio Publico
    this.app.use(express.static('public'));
}

routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
    // Para que funcion visitar http://localhost:8080/api0/usuarios
    // Probar get, post, put, delete
}

listen() {
    this.app.listen(this.port, () => {
    console.log('Servidor corriendo en puerto', this.port);
    });
}
}

module.exports = Server;