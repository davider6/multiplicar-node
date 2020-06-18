let fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) ||  !Number(limite)) {
            reject('Tanto la base como el límite deben ser valores numéricos.');
        }

        console.log('=================='.green);
        console.log(`== tabla del ${ base } ==`.green);
        console.log('=================='.green);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ ( base * i ) }\n`;
        }

        resolve(data);

    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) ||  !Number(limite)) {
            reject('Tanto la base como el límite deben ser valores numéricos.');
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${(base * i)}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, err => {

            if (err) {
                reject(err);
            } else {
                resolve `tabla${base}.txt`;
            }
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}