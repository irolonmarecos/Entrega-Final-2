const AlmacenFireBase = require('../../utils/conteinerFireBase');

const firebase = require('firebase-admin');
const db = firebase.firestore();
const prods = db.collection("carrito")

class CarritoFireBase extends AlmacenFireBase {
    constructor(){
        super(prods)
    }
}

module.exports = CarritoFireBase