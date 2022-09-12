const { Types } = require('mongoose');
const {producto} = require('../schema/productos');
const ProductoMongo = require('../DAOs/mongo/daoProductos');
const prod = new ProductoMongo;

async function totalProductos(req,res){
    try{
        const Total = await prod.getAll();
        res.json(Total);
    } catch(err){
        console.log(err);
    }
}

async function productoId(req,res){
    try{
        let id = req.params.id;
        id = Types.ObjectId(id);
        const _producto = await prod.getById(id);
        res.json(_producto);
    } catch(err){
        console.log(err);
    }
}

async function borrarProducto(req,res){
    try{
        let id = req.params.id;
        id = Types.ObjectId(id);
        const _producto = await prod.deleteById({_id: id});
        res.json(_producto);
    } catch(err){
        console.log(err);
    }
}

async function guardarProducto(req,res){
    try{
        const {nombre,descripcion,codigo,stock,precio,foto} = req.body;
        const _producto = new producto({nombre,descripcion,codigo,stock,precio,foto});
        const resultado = await prod.save(_producto);
        res.json(resultado);
    } catch(err){
        console.log(err);
    }
}

async function actualizarProducto(req,res){
    try{
        let id = req.params.id;
        id = Types.ObjectId(id);
        const {nombre,descripcion,codigo,stock,precio,foto} = req.body;
        const prodMod = {nombre,descripcion,codigo,stock,precio,foto};
        const resultado = await prod.updateById({_id: id},prodMod);
        res.json(resultado);
    } catch(err){
        console.log(err);
    }
}
 
module.exports = {
    totalProductos,
    productoId,
    borrarProducto,
    guardarProducto,
    actualizarProducto
}
