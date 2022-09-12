const ProductoFireBase = require('../../DAOs/fireBase/productos')
const productos = new ProductoFireBase


async function totalProductos(req,res){
    try{
        const Total = await productos.getAll()
        res.json(Total)
    } catch(err){
        console.log(err);
    }
}

async function productoId(req,res){
    try{
        let id = req.params.id;
        const producto = await productos.getById(id)
        console.log( producto);
        res.json(producto)
    } catch(err){
        console.log(err);
    }
}

async function borrarProducto(req,res){
    try{
        const id = req.params.id;
        const _producto = await productos.deleteById(id)
        console.log(_producto);
        res.json(_producto)
    } catch(err){
        console.log(err);
    }
}

async function guardarProducto(req,res){
    try{
        const {nombre,descripcion,codigo,stock,precio,foto} = req.body;
        let prueba = {nombre,descripcion,codigo,stock,precio,foto}
        const nvoProd = await productos.save(prueba)
        console.log(nvoProd);
        res.json(nvoProd)
    } catch(err){
        console.log(err);
    }
}

async function actualizarProducto(req,res){
    try{
        const id = req.params.id;
        const {nombre,descripcion,codigo,stock,precio,foto} = req.body;
        const prodMod = {nombre,descripcion,codigo,stock,precio,foto};
        const result = await productos.updateById(id,prodMod)
        res.json(result)
       // console.log({nombre,descripcion,codigo,stock,precio,foto} );
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
