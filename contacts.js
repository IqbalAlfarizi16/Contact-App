//core module
const fs = require('fs');       //import modul fs
const readline = require('readline');   //import modul readline

const rl = readline.createInterface({
    input :process.stdin,
    output:process.stdout,
});

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

//lebih rapih
//(resolve : ketika promise selesai, reject : ketika promise gagal)
const pertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    }); 
};


//cara untuk menyimpan contact
const simpanContact = (nama, noHP, Gender, Umur,Alamat) => {
    const contact = { nama, noHP, Gender, Umur, Alamat }; //membuat object
    const file = fs.readFileSync('./data/contact.json', 'utf8');   //menggunakan modul fs 
    const contacts = JSON.parse(file); //apapun isi file nya akan dalam bentuk json, parse merubah sting jadi json 

    contacts.push(contact);

    fs.writeFileSync('./data/contact.json', JSON.stringify(contacts)); //mengubah json jadi string

    console.log('Terimakasih sudah memasukan data');
    rl.close();
};

module.exports = {pertanyaan, simpanContact};
