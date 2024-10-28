const { response, request } = require('express');
// con el apps agregar un manejador de excepcion de req
// para recibir un objeto de parte del usuario que se
// envia en postman
// en apps agregarle params

// Trabajando app? , trabajo con insercion en Base de datos
const Usuario = require('../models/usuario');

const UsuariosGet = (req = request, res = response) => {
const { q, nombre = 'No name', apikey } = req.query;

res.json({
    ok: true,
    msg: 'get API - Controlador',
    q,
    nombre,
    apikey
});
};

// En el apps se agregar const {nombre, edad}
const UsuariosPost = async(req, res = response) => {
  // const {nombre, edad} = req.body; //viene con la info tal cual como el user la envia
  // despues hay que hacer una limpieza para que no tenga scripts o inyecciones
const body = req.body;
const usuario = new Usuario(body);

await usuario.save();

res.json({
    msg: 'post API - Controlador',
    usuario
});
};

const UsuariosPut = (req, res = response) => {
const { id } = req.params;

res.json({
    ok: true,
    msg: 'put API - Controlador',
    id
});
};

const UsuariosPatch = (req, res = response) => {
res.json({
    ok: true,
    msg: 'patch API - Controlador'
});
};

const UsuariosDelete = (req, res = response) => {
res.json({
    ok: true,
    msg: 'delete API - Controlador'
});
};

module.exports = {
UsuariosGet,
UsuariosPost,
UsuariosPut,
UsuariosPatch,
UsuariosDelete,
};