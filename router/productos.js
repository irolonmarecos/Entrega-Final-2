const express = require('express');
const { Router } = express

const routerProductosMongo = Router();
routerProductosMongo.use(express.json());
routerProductosMongo.use(express.urlencoded({ extended: true }));

const { totalProductos, productoId, borrarProducto,
        guardarProducto, actualizarProducto
    } = require('../controllers/productos')

routerProductosMongo.get('/', totalProductos)
routerProductosMongo.get('/:id', productoId)
routerProductosMongo.delete('/:id', borrarProducto)
routerProductosMongo.post('/', guardarProducto)
routerProductosMongo.put('/:id', actualizarProducto)

module.exports = routerProductosMongo