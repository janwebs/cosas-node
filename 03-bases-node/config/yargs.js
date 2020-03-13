const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'tabla de multiplicar y crea el archivo', opts)
    .help()
    .argv;

module.exports = {
    argv
}