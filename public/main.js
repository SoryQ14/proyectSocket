/**Creamos la variable que permitira al frontend conectarse a nuestro backend */

const { text } = require("express");

var socket = io.connect('http://localhost:3009',{'forceNew': true}); 

/**Esto manda al servidor el mensaje de conect y aparece en console.log */
/**El cliente manejara datos mediante mensajes, esto se llamaran eventos y se mostraran por consola en el navegado */
socket.on('messages', function(data){
    console.log(data); 
    render(data); 
}); 

/**Creamos un template para que nos imprima el conenido */
function render(data){
    //aqui se inicia el manejo de variables string que viene en EM6 se usan estas comillas ``
    //Las variables se colocan con el signo de $ y entre {}
    var html = `<div>
                    <strong> ${data.Autor}</strong>
                    <em>${data.texto}</em>
                </div>`;
                document.getElementById('messages').innerHTML = html; 
}
//cada ves que alguien precione el boton enviar en el formulario
//El cliente emite un nuevo mensaje y manda el payload
function addMessage(e){
    var payload ={
        Autor: document.getElementById(username).value, 
        texto: document.getElementById(texto).value
    }; 
    socket.emit('new-message',payload); 
    return false; 
}