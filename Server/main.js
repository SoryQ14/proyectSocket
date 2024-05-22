var express = require('express'); 
var app = express();
var server = require ('http').Server(app); 
var io = require('socket.io')(server,{
    cors: {
        origin:'*', //pa que acepte cualquier direccion 
        methods: ['GET', 'POST']
    }
}); 
const cors = require('cors');  


var messages = [{
    id: 1,
    texto: "Hola soy un mensaje",
    Autor: "Soraja Quintana",
}]; 

/**Usamos un diffleware para usar elementos estaticos en las seccion publica  */
app.use(express.static('public'));

const corsOptions ={
    origin: '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Conyent-Type', 'Authorizacion'],
}; 
app.use(cors(corsOptions)); 


app.get('/',function(req, res){
    res.status(200).send("Hola Mundo :)"); 
}); 

io.on('connection', function(socket){
    console.log('Alguien conectado con socket')
    socket.emit('messages', messages); 
    socket.on('new-message', function(data){
    messages.push(data); 
    //queremos que todos los mensajes se manden a todos los clientes
    io.sockets.emit('messages', messages); 
    }); 
});

server.listen(3009, function(){
    console.log("El servidor está corriendo en el http://localhost:3009");
}); 