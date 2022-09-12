const AlmacenMongo = require('../../utils/conteinerMongo');
const {carrito} = require('../../schema/carrito');

class CarritoMongo extends AlmacenMongo {
    constructor(){
        super(carrito);
    }
}

module.exports = CarritoMongo;