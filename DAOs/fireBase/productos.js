const AlmacenFireBase = require('../../utils/conteinerFireBase');

const firebase = require('firebase-admin');
const db = firebase.firestore();
const prods = db.collection("productos")


class ProductosFireBase extends AlmacenFireBase {
    constructor(){
        super(prods)
    }
}

module.exports = ProductosFireBase