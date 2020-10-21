//ahora lo que vamos a hecer es mandar un mensaje desde el cliente a nuestro servidor





//este archivo va a ser nuestro backend Server

//ya instalamos la parte del socket io.

const express = require('express'); //=> aqui vamos a poner la libreria de express
const path = require('path');

require('dotenv').config();


//App de Express
const app = express();  //=> nos creamos nuestra aplicacion

//Creacion del Node Server

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

//vamos a mandar a llamar el archivo donde esta la comunicacion de los sockets para que no haya
//ningun tipo de problema

require('./sockets/sockets');


//bien ahora vamos a agregar las cosas que nos faltan para dejar listo la aplicacion



const publicPath = path.resolve( __dirname, 'public');


app.use( express.static(publicPath));





server.listen( process.env.PORT, ( err ) => {

    if( err ) throw new Error(err);

    console.log('Servidor Corriendo en el puerto', process.env.PORT);

}); 