const express = require('express');
const { Router } = express

const firebase = require('firebase-admin');
const serviceAccount = require('../../dataBase/fireBase/baseDatos_Firebase.json')

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://segundapreentrega.firebaseio.com"
});  
const routerProductosFire = Router();

routerProductosFire.use(express.json());
routerProductosFire.use(express.urlencoded({ extended: true }));

const { totalProductos, productoId, borrarProducto,
        guardarProducto, actualizarProducto
    } = require('../../controllers/FireBase/productos')

routerProductosFire.get('/', totalProductos)
routerProductosFire.get('/:id', productoId)
routerProductosFire.delete('/:id', borrarProducto)
routerProductosFire.post('/', guardarProducto)
routerProductosFire.put('/:id', actualizarProducto)

module.exports = routerProductosFire