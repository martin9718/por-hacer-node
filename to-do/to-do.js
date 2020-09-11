const fs = require('fs');
const colors = require('colors');



let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar la tarea', err);
    });


}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = (completado) => {
    cargarDB();

    if (completado != 'all') {

        if (completado === 'true') completado = true;
        else if (completado === 'false' || completado === false) completado = false;
        else {
            listadoPorHacer = [];
            console.log(`El parametro ${ completado.green } no es válido`);
            return listadoPorHacer;
        }

        let nuevoListado = listadoPorHacer.filter(tarea => {
            return tarea.completado == completado;
        });
        listadoPorHacer = nuevoListado;
        return listadoPorHacer;
    } else return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}