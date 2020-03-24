const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        demand: false,
        alias: 'c',
        default: true
    }
};

const argv = require('yargs')
    .command('crear', 'Crear  una tarea por hacer', opts)
    .command('listar', 'Listado de tareas')
    .command('actualizar', 'Actualizar estado de una tarea', opts2)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
};