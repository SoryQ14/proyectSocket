
var express = require('express'); 
var app = express(); 

/** Como trabajaremos con socket, es recomendable usar el modulo HTTP para upasarle la app a express y manekar bien http */
var server = require ('http').Server(app); 

/** Aqui estará toda la funcionallidad de los sockets se requiere la libreria socket.io, se pasa la variable Server que tiene la app express y HTTP */
var io = require('socket.io')(server); 

app.get('/',function(req, res){
    res.status(200).send("Hola Mundo :)"); 
}); 

server.listen(3009, function(){
    console.log("El servidor está corriendo en el http://localhost:3009");
}); 