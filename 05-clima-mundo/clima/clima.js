const axios = require('axios');

const getClimaLatLon = async(lat, lon) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=be59b618f0bb709d3443f53df7145872`,
    });

    const resp = await instance.get();

    const temperatura = resp.data.main.temp;

    //console.log(resp.data.main.temp);

    return temperatura;

}

module.exports = {
    getClimaLatLon,
}