//core module
const fs = require('fs');       //import modul fs
const chalk = require ('chalk');
const validator = require ('validator');

//membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//membuat file contact.json jika belum ada
const dataPath = './data/contact.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}


//cara untuk menyimpan contact
const simpanContact = (nama, noHP, Gender, Umur, Alamat, email) => {
    const contact = { nama, noHP, Gender, Umur, Alamat, email }; //membuat object
    const file = fs.readFileSync('./data/contact.json', 'utf8');   //menggunakan modul fs 
    const contacts = JSON.parse(file); //apapun isi file nya akan dalam bentuk json, parse merubah sting jadi json 


    //cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(
            chalk.red.inverse.bold('Contact sudah terdaftar, Gunakan nama lain'));
        return false;
    }

    //Cek email
    if (email) {
        if (!validator.isEmail(email)) {
        console.log( 
            chalk.red.inverse.bold('Email tidak valid'));
        return false;
        }
    }

    //cek noHP
    if (noHP) {
        if (!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log( 
            chalk.red.inverse.bold('noHP tidak valid'));
        return false;
        };
    }
    // if(email){
    //     if(!validator.isEmail(email)){
    //         console.log(
    //             chalk.red.inverse.bold('Email tidak valid'));
    //         return false;
    //     }
    // }

    contacts.push(contact);

    fs.writeFileSync('./data/contact.json', JSON.stringify(contacts)); //mengubah json jadi string

    console.log(chalk.green.inverse.bold('Terimakasih sudah memasukan data'));
};

module.exports = {simpanContact};
