const { Types } = require('mongoose');
const {carrito} = require('../schema/carrito');

const CarritoMongo = require('../DAOs/mongo/daoCarrito');
const carritoCompras = new CarritoMongo;

async function totalCarrito(req,res){
    try{
        const Total = await carritoCompras.getAll();
        res.json(Total);
    } catch(err){
        console.log(err);
    }
}

async function CarritoId(req,res){
    try{
        let id = req.params.id;
        id = Types.ObjectId(id);
        const _carrito = await carritoCompras.getById(id);
        res.json(_carrito);
    } catch(err){
        console.log(err);
    }

}

async function borrarCarrito(req,res){
    try{
        let id = req.params.id;
        id = Types.ObjectId(id);
        const _carrito = await carritoCompras.deleteById({_id: id});
        res.json(_carrito);
    } catch(err){
        console.log(err);
    }
}

async function guardarCarrito(req,res){
    try{
        const {productos} = req.body;
        const nvoProd = new carrito({productos: productos})
        console.log(nvoProd);
        const resultado =  await carritoCompras.save(nvoProd)
        res.json(resultado);
    } catch(err){
        console.log(err);
    }
}

async function actualizarCarrito(req,res){
    try{
        let id = req.params.id;
        id = Types.ObjectId(id);
        const {productos} = req.body;
        const modProd = {productos: productos}
        const resultado = await carritoCompras.updateById({_id: id}, modProd);
        res.json(resultado)
    } catch(err){
        console.log(err);
    } 
}

module.exports = {
    totalCarrito,
    CarritoId,
    borrarCarrito,
    guardarCarrito,
    actualizarCarrito
}