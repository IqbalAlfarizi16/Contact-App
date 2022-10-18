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

const loadContact = () => {
    const file = fs.readFileSync('./data/contact.json', 'utf8');   //menggunakan modul fs 
    const contacts = JSON.parse(file); //apapun isi file nya akan dalam bentuk json, parse merubah sting jadi json 
    return contacts;
}

//cara untuk menyimpan contact
const simpanContact = (nama, noHP, Gender, Umur, Alamat, email) => {
    const contact = { nama, noHP, Gender, Umur, Alamat, email }; //membuat object
    // const file = fs.readFileSync('./data/contact.json', 'utf8');   //menggunakan modul fs 
    // const contacts = JSON.parse(file); //apapun isi file nya akan dalam bentuk json, parse merubah sting jadi json 
    const contacts = loadContact();

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

    contacts.push(contact);

    fs.writeFileSync('./data/contact.json', JSON.stringify(contacts)); //mengubah json jadi string

    console.log(chalk.green.inverse.bold('Terimakasih sudah memasukan data'));
};

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak :'));
    contacts.forEach((contact, i) => { //looping telusuri isi dari contacts untuk mengambil nama & no hp, (contactt, index)
        console.info(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    });
};

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
    );

    if (!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    }
    
    console.log(chalk.cyan.inverse.bold(contact.nama));
    //jika emailnya ada tampilkan email 
    console.log(contact.noHP);
    if(contact.email){
        console.info(contact.email);
    }
};

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    );

    if (contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    }

    fs.writeFileSync('./data/contact.json', JSON.stringify(newContacts)); //mengubah json jadi string

    console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus`));

};


module.exports = {simpanContact, listContact, detailContact, deleteContact};
