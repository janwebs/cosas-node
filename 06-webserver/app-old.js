const http = require('http');

http.createServer((request, response) => {

        response.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Janluis',
            edad: 38,
            url: request.url
        }

        response.write(JSON.stringify(salida));
        //response.write('hola');

        response.end();

    })
    .listen(8080);

console.log('escuchando por el puerto 8080');