const express = require('express');
const { Router } = express

 
const routerCarritoFire = Router();

routerCarritoFire.use(express.json());
routerCarritoFire.use(express.urlencoded({ extended: true }));

const { totalCarrito, carritoId, borrarCarrito,
    guardarCarrito, actualizarCarrito
    } = require('../../controllers/FireBase/carrito')

routerCarritoFire.get('/', totalCarrito)
routerCarritoFire.get('/:id', carritoId)
routerCarritoFire.delete('/:id', borrarCarrito)
routerCarritoFire.post('/', guardarCarrito)
routerCarritoFire.put('/:id', actualizarCarrito)

module.exports = routerCarritoFire