//menggunakan package
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
})
//menambahkan warning ketika hanya menjalankan perintah "node app"
.demandCommand();

//menampilkan daftar semua nama & noHP contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler(){
        contacts.listContact();
    },
});

//menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }, 
    },
    handler(argv){
        contacts.detailContact(argv.nama);
    },
});

//menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }, 
    },
    handler(argv){
        contacts.deleteContact(argv.nama);
    },
});


yargs.parse();
