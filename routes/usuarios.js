const { Router } = require('express');
const { 
UsuariosGet,
UsuariosPost,
UsuariosPut,
UsuariosPatch,
UsuariosDelete 
} = require('../controllers/usuarios');

const router = Router();

// end-point GET ejemplo text
// Petición de recursos
// Borrar router.get('/api', (req,res) ruta , res.algo es controlador
// Cambiar por router.get('/', (req,res)
// UsuariosGet no estoy ejecutando la funcion estoy enviando la referencia a la misma
router.get('/', UsuariosGet );

// end-point PUT ejemplo text
// Para actualizar registros
// app6 agregar que haga algo con el envio del id
// podria insertar, eliminar o borrar algo del a base de datos por ejemplo
router.put('/:id', UsuariosPut );

// end-point POST ejemplo text
// Para crear nuevos recursos como un usuario
router.post('/', UsuariosPost );

// end-point DELETE ejemplo text
// Borrar algo, pero puede para el usuario que se borro
// pero a nivel de base de datos se actualizo
router.delete('/', UsuariosDelete );

// PATCH
router.patch('/', UsuariosPatch );

// end-point ejemplo text
router.get('/api', (req, res) => {
res.send('Hello Worl Text');
});

// end-point ejemplo json
router.get('/api2', (req, res) => {
res.json({
    ok: true,
    msg: 'get API2'
});
});

// end-point , 403 cuando se hace un llamado ilegal
// peticion o autorizada
router.get('/api3', (req, res) => {
res.status(403).json({
    ok: true,
    msg: 'get API3'
});
});

module.exports = router;