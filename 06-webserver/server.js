const express = require('express');

const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const puerto = process.env.PORT || 3000;

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {

    response.render('home', {
        nombre: 'janluis alarcon'
    });
});

app.get('/about', (request, response) => {

    response.render('about', {
        nombre: 'janluis alarcon'
    });
});

/*
app.get('/', (request, response) => {

    response.render('home', {
        nombre: 'Janluis Alarcon',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (request, response) => {

    response.render('about', {
        nombre: 'Janluis Alarcon',
        anio: new Date().getFullYear()
    });
});
*/

app.listen(puerto, () => {
    console.log(`Escuchando peticiones por el puerto ${ puerto}`);
});

//console.log('escuchando por el puerto 3000');