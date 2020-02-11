const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crea un archivo de txt con la tabla de multiplicar con base y limite ', opts)
    .help()
    .argv;

module.exports = {
    argv
}