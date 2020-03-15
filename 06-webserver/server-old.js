const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');

/*
app.get('/', function(request, response) {
    response.send('Hola Express');
});
*/
/*
app.get('/', (request, response) => {
    //response.send('Hola Express');
    let salida = {
        nombre: 'Janluis',
        edad: 38,
        url: request.url
    };

    response.send(salida);
});
*/
app.listen(3000, () => {
    console.log('escuchando peticiones por el puerto 3000');
});

//console.log('escuchando por el puerto 3000');