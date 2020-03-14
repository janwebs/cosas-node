const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Estado de la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('listar', 'lista las tareas')
    .command('actualizar', 'marca una tarea como completado', opts)
    .command('borrar', 'borrar una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}