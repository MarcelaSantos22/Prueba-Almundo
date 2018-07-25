var express = require('express');
var json = require('./data/data');

var app = express();

app.get('/hoteles', function(req, resp) {
    resp.send(json);
});

// let name = req.param('name');
// let filtro = [];
// if (name) {
//     for (var i in json) {
//         busqueda = json[i].name;
//         if (busqueda.toLowerCase().indexOf(name.toLowerCase()) != -1) {
//             filtro.push(json[i]);
//         }
//     }
//     resp.send(filtro);
// } else {
//     resp.send(json);
// }

app.listen(8100);

/* Aplicacion Node.js pura
var http = require('http');
var servidor = http.createServer();

function respuesta(peticion, resp){
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola, Marcela');
    resp.end();
}
servidor.on('request', respuesta);
servidor.listen(8080);
*/