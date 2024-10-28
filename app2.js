/**
 * -----------Ejercicio - Express con clases----
 * Este ejercicio de creara una clase para que el app.js se pueda utilizar
 * de forma más sencilla
 */
/**
 * 1-Crear en el directorio principal carpeta models y dentro el archivo server.js
 * En esta archivo se plantea el servido web y su puerto, tambié plantean la
 * habilitación de rutas, midllewares, etc. 
 * 2-Crear carpeta public en la raíz y dentro archivo index.html con mensaje de 
 * "Acceso Denegado"
 * 
 * 
 */
//crear carpeta models 
//dentro de la carpeta models crear server.js
//crear carpeta publica
//index.html dentro de public
//configurar milddware y /api y routes en server.js
//probar con postman http://localhost:8080/api y analizar

//Importaciones de terceros no tan importantes
require('dotenv').config();

//Importaciones importantes
const Server = require('./models/server');

//Instanciar la clase Server de models/server
const server = new Server();

//Ejecutar el servidor con el método listen
server.listen();


module.exports = Server
/**
 * Para ejecutar la aplicación con      node app2.js
 * Probar la ruta http://localhost:8080    -  Accedo denegado
 * Probar la ruta http://localhost:8080/api    -  Hello Werld
 * Probar la ruta http://localhost:8080/invalidad   -  Ruta invalida
 */