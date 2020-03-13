/*
let getNombre = () => {
    return 'Janluis';
};

console.log(getNombre());
*/

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Janluis');
        }, 3000);
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
})