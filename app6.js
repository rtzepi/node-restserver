//OBTENER DATOS DE UN POST, PUT.

require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen();

// Crear un respaldo en GitHub
// Crear .gitignore para agregar la línea node_modules/
//git init
//git add .
//git commit -m "Primer commit"
// Si se desea recuperar algo git checkout -- .
//git remote add origin https://github.com/tonyescobgt/node-restserver.git
//git branch -M main
//git push -u origin main
// Iniciará subir todos los archivos.
// Agregar un archivo que pide GitHub README.md
// Agregar en README.md

/* 
# WebServer + RestServer

Recuerden que deben de ejecutar ```npm install``` para reconstruir los módulos de Node

git add .
git commit "Segundo commit agregar README.md"
git push
*/

// Crear una versión del GitHub
//git tag -a v1.0.0 -m "Fin sección 8"
//git push --tags
// git editar el tag en github para que quede la nota
// ir a heroku
//heroku git:remote -a tonyescobgt-restserver
//git push heroku main
//https://tonyescobgt-restserver.herokuapp.com/ deployed to Heroku
// La app no funciona porque no le dijimos en el PackageJson cómo iniciar
// agregar en el package.json en script "start": "node app6"
//git add .
//git commit -m "Tercer archivo subido"
//git push heroku main probar y ya funciona.
