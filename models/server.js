const express = require('express')

//Creación del servidor web por medio de una clase
class Server{

    //Constructor para poder inicializar las proviedades del servidor
    constructor() {
        this.app = express();
        this.port = process.env.PORT; //port ahora es visible a toda la aplicación

        //Middelewares : Funciones que agrega mas funcionalidades
        this.middlewares();

        //LLamado de el método routes() para que se ejecute
        this.routes();
    }

    //--------------Area de Métodos--------------------

    //Middlewares sirver para darle mas funcionalidades al WebServer
    middlewares() {

        //Directorio Público
        this.app.use(express.static('public'));

    }

    //Este método servirá para habilitar las rutas de esta aplicación
    routes(){

        //end-point funcional si dejara solamente con la ruta pricipal no funcionaria
        //debido que implícitamente esa ruta principal se encuentra el this.app.use
        this.app.get('/api', (req,res) => {
            res.send('Hello Worl')
        });
    }

    //Este método sirve para controlar la escucha del servidor
    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto ',this.port);
        });

    }

}

//Exportacion de la clase Server para poder ser instanciada en el app que corresponda.
module.exports = Server;