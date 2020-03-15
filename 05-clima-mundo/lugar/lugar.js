const axios = require('axios');

const getLugarLatLon = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodedUrl,
        timeout: 1000,
        headers: {
            'X-RapidAPI-Key': '107d016c24msh7764c070110f14dp11919ejsn4bf8ea5fa6d4',
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    //console.log(data.lat, data.lon);

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon,
}