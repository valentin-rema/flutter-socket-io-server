


const { io } = require('../index');


//mensajes de sockets
io.on('connection', client => {
    console.log('Cliente Conectado');


    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });

    client.on('mensaje', ( payload ) =>{
        //aqui vamos a recibir lo que nos mando el cliente
        console.log('mensaje', payload);

        //ahora vamos a mandar un mensaje a todos los clientes que se encuentren conectados en el socket

        io.emit('mensaje', { admin: 'Nuevo Usuario'});

    });


  });