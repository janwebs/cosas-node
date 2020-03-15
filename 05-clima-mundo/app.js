const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*
lugar.getLugarLatLon(argv.direccion)
    .then(console.log);
*/
/*
clima.getClimaLatLon(40.750000, -74.000000)
    .then(console.log);
*/

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLon(direccion);
        const temperatura = await clima.getClimaLatLon(coordenadas.lat, coordenadas.lon);
        return `El clima de ${direccion} es de ${temperatura}.`;
    } catch (e) {
        return `No se pudo encontrar el clima de ${direccion}.`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)