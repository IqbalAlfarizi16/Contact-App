//menggunakan package
const { type } = require("os");
const yargs = require("yargs");
const contacts = require('./contacts')


yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }, 
        noHP: {
            describe: 'Nomor Hndphone',
            demandOption: true,
            type: 'string',
        },
        Gender: {
            describe:'Gender kamu',
            demandOption: true,
            type: 'string',
        },
        Umur: {
            describe:'Umur',
            demandOption: false,
            type: 'string',
        },
        Alamat: {
            describe:'Alamat',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
    },
    //fungsi untuk memberitahu apa yg akan dilakukan ketika command dieksekusi
    handler(argv){
    contacts.simpanContact(argv.nama, argv.noHP, argv.Gender, argv.Umur, argv.Alamat, argv.email);  
    },
});


yargs.parse();


// const contacts = require('./contacts.js');
// //membuat function main
// const main = async () => { //fungsi ini adalah fungsi yg asyncronus
//     const nama = await contacts.pertanyaan('Masukan nama anda : '); //dimana tiap pertanyaan akan ditunggu sampai dijawab user (await)
//     const noHP = await contacts.pertanyaan('Masukan noHP anda : ');
//     const Gender = await contacts.pertanyaan('Masukan Gender anda : ');
//     const Umur = await contacts.pertanyaan('Masukan Umur anda : ');
//     const Alamat = await contacts.pertanyaan('Masukan Alamat anda : ');

//     contacts.simpanContact(nama, noHP, Gender, Umur, Alamat);    //panggil function
// };

// main();
