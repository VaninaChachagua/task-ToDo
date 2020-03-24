const fs = require('fs');

let listadoPorHacer = [];

const guargarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }



};

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guargarDB();
    return porHacer;
};

let getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guargarDB();
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion) => {
    cargarDB();
    let nuevoEstado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (listadoPorHacer.length === nuevoEstado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoEstado;
        guargarDB();
        return true;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};