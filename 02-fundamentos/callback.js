/*
setTimeout(() => {
    console.log('Hola mundo');
}, 3000);
*/

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Janluis',
        id: id
    }

    callback(usuario);

    if (id === 20) {
        callback(`el usurio con id ${id}, no existe en la BD`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(20, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);

});