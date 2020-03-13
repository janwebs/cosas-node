const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.yellow);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor de base ${base}`);
            return;
        }

        if (!Number(limite)) {
            reject(`el valor de limite ${base}`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`.blue);
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`./archivos/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-limite-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}