/*
const options = {
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}
*/
const argv = require('yargs')
    .options({
        direccion: {
            demand: true,
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima'
        }
    }).argv;
//.command('listar', 'lista las tareas')
//.command('actualizar', 'marca una tarea como completado', opts)
//.command('borrar', 'borrar una tarea', opts)
//.help()
//.argv;

module.exports = {
    argv
}