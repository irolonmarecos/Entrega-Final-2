const express = require('express');

const {Server:HTTPServer} = require('http');


const app = express();
const httpServer = new HTTPServer(app);
const routerProductosFire = require('./router/FireBase/productos')
const routerCarritoFire = require('./router/FireBase/carrito')
const routerProductosMongo = require('./router/productos');
const routerCarritoMongo = require('./router/carrito')
const connection = require('./dataBase')
connection()

app.use(express.json());
app.use(express.static( __dirname+'/public/'));
app.use(express.urlencoded({extended:true}));
app.use('/mongo/productos',routerProductosMongo);
app.use('/mongo/carrito',routerCarritoMongo);

app.use('/firebase/productos',routerProductosFire);
app.use('/firebase/carrito',routerCarritoFire);





app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

const PORT = process.env.PORT || 2030
httpServer.listen(PORT, ()=>{
    console.log(`El servidor se esta ejecutando en el puerto ${PORT}`);
})
httpServer.on("error", error => `Error: ${error}`);