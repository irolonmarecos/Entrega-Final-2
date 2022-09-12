const CarritoFireBase = require('../../DAOs/fireBase/carrito');
const carritoCompras = new CarritoFireBase


async function totalCarrito(req,res){
    try{
        const Total = await carritoCompras.getAll()
        res.json(Total)
    } catch(err){
        console.log(err);
    }
}

async function carritoId(req,res){
    try{
        const id = req.params.id;
        const result = await carritoCompras.getAll(id)
        res.json(result)
    } catch(err){
        console.log(err);
    }
}

async function borrarCarrito(req,res){
    try{
        const id = req.params.id;
        const _carrito = await carritoCompras.deleteById(id)
        console.log(_carrito);
        res.json(_carrito)
    } catch(err){
        console.log(err);
    }
}

async function guardarCarrito(req,res){
    try{
        const prods = req.body
        const nvoProd = await carritoCompras.save(prods)
        console.log(nvoProd);
        res.json(nvoProd)
    } catch(err){
        console.log(err);
    }
}

async function actualizarCarrito(req,res){
    try{
        const id = req.params.id;
        const modProds = req.body
        const result = await carritoCompras.updateById(id, modProds)
        res.json(result)
    } catch(err){
        console.log(err);
    }
}
 



module.exports = {
    totalCarrito,
    carritoId,
    borrarCarrito,
    guardarCarrito,
    actualizarCarrito
}
