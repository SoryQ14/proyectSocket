var express = require('express'); 
var app = express();
var server = require ('http').Server(app); 
var io = require('socket.io')(server); 

/**Usamos un diffleware para usar elementos estaticos en las seccion publica  */
app.use(express.static('public')); 

app.get('/',function(req, res){
    res.status(200).send("Hola Mundo :)"); 
}); 

io.on('connection', function(socket){
    console.log('Alguien conectado con socket')
    /**Aqui controlamos los evento del cliente mediante sockets */
    socket.emit('messages',{
        id: 1,
        texto: "Hola soy un mensaje",
        Autor: "Soraja Quintana",
    });
});

server.listen(3009, function(){
    console.log("El servidor está corriendo en el http://localhost:3009");
}); 