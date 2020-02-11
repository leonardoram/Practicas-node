const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => new Promise((resolve, reject) => {
    if (!Number(base)) {
        reject('no es un numero');
        return;
    }
    let data = "";
    for (i = 1; i <= limite; i++) {
        data += (`${base} * ${i} = ${base * i}\n`);
    }
    fs.writeFile(`archivos/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(`tabla-${base}-al-${limite}.txt`);
        }
    });
})

let listarTabla = (base, limite = 10) => {

    console.log('--------------------------'.green);
    console.log(`----tabla de ${base}------`.green);
    console.log('--------------------------'.green);
    for (i = 1; i <= limite; i++) {
        console.log((`${base} * ${i} = ${base * i}\n`));
    }
}

//forma de exportar una funcion 
module.exports = {
    crearArchivo,
    listarTabla
};