const {Schema, model} = require('mongoose');

const CarritoSchema = new Schema({
    productos: {type:Array , default:[]}
},{timestamps:true});

const carrito = model ('carrito', CarritoSchema);

module.exports = {
    carrito,
    CarritoSchema
}