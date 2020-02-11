const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');

}
//mandar argumentos mediante el process de node
//let argv = process.argv;

//let parametro = argv[2];

//console.log(argv2);

//split sirve para separar strings y convertirlas en arreglos
//let base = parametro.split('=')[1];