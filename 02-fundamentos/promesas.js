let empleados = [{
    id: 1,
    nombre: 'Juan'
}, {
    id: 2,
    nombre: 'Pedro'
}, {
    id: 3,
    nombre: 'Jose'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
            //console.log(empleadoDB);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
            //console.log(salarioDB);
        if (!salarioDB) {
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(2).then(empleado => {
    //console.log('empleado de base de datos ', empleado);
    getSalario(empleado).then(resp => {
        console.log(`el salario de ${resp.nombre} es de $${resp.salario}`);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
})