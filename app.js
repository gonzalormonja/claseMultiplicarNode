const argv = require('./config/yargs.js').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => {
                console.log("listo");
            })
            .catch(err => {
                console.log(err);
            });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`archivo creado ${archivo}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log("comando no conocido");
        break;

}