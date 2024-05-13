/**Creamos la variable que permitira al frontend conectarse a nuestro backend */

//const { text } = require("express");

var socket = io.connect('http://localhost:3009',{'forceNew': true}); 

/**Esto manda al servidor el mensaje de conect y aparece en console.log */
/**El cliente manejara datos mediante mensajes, esto se llamaran eventos y se mostraran por consola en el navegado */
socket.on('messages', function(data){
    console.log(data); 
    render(data); 
}); 

/**Creamos un template para que nos imprima el conenido */
function render(data){
    //reestructuremos esta seccion ara que se maneje el array, elem es conjunto de cosas 
    //con map recorremos el array
    var html = data.map(function(elem, index){
        return(`<div>
                    <strong>${elem.Autor}</strong>: 
                    <em>${elem.texto}</em>
                    </div>`);
    }).join(" "); 
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