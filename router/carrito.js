const express = require('express');
const { Router } = express

const routerCarritoMongo = Router();
routerCarritoMongo.use(express.json());
routerCarritoMongo.use(express.urlencoded({ extended: true }));

const { 
    totalCarrito,
    CarritoId,
    borrarCarrito,
    guardarCarrito,
    actualizarCarrito
} = require('../controllers/carrito')

routerCarritoMongo.get('/',totalCarrito)
routerCarritoMongo.get('/:id',CarritoId)
routerCarritoMongo.delete('/:id',borrarCarrito)
routerCarritoMongo.post('/',guardarCarrito)
routerCarritoMongo.put('/:id',actualizarCarrito)

module.exports = routerCarritoMongo
