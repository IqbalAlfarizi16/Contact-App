const contacts = require('./contacts.js');
//membuat function main
const main = async () => { //fungsi ini adalah fungsi yg asyncronus
    const nama = await contacts.pertanyaan('Masukan nama anda : '); //dimana tiap pertanyaan akan ditunggu sampai dijawab user (await)
    const noHP = await contacts.pertanyaan('Masukan noHP anda : ');
    const Gender = await contacts.pertanyaan('Masukan Gender anda : ');
    const Umur = await contacts.pertanyaan('Masukan Umur anda : ');
    const Alamat = await contacts.pertanyaan('Masukan Alamat anda : ');

    contacts.simpanContact(nama, noHP, Gender, Umur, Alamat);    //panggil function
};

main();
