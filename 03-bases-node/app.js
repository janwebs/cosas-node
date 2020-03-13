//requires
const fs = require('fs');
//const fs = require('express');
//const fs = require('./myfile');

let base = 2;
let data = '';
for (let i = 1; i <= 10; i++) {
    //console.log(base + ' * ' + i + ' = ' + base * i);
    console.log(`${base} * ${i} = ${base * i}`);
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`./archivos/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`el archivo tabla-${base}.txt ha sido creado`);
});