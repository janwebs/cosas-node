// aqui estan nuestras variables de entorno
require('./config/config');

const express = require('express');

const app = express();

const puerto = process.env.PORT;

const bodyParser = require('body-parser');

//parse application/x-www-form-urlenconded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

app.get('/usuario/:id', (request, response) => {

    let id = request.params.id;

    response.json({
        id: id
    });

});

app.post('/usuario', (request, response) => {

    let body = request.body;

    if (body.nombre === undefined) {
        response.status(400).json({
            ok: false,
            mensaje: `El nombre es necesario`
        });
    } else {
        response.json({
            persona: body
        });
    }
});

app.put('/usuario', (request, response) => {

    response.json('put usuario');

});

app.delete('/usuario/:id', (request, response) => {

    let id = request.params.id;

    response.json('delete usuario');

});

app.listen(puerto, () => {
    console.log(`Escuchando peticiones por el puerto ${ puerto}`);
});