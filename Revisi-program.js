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
const pertanyaan = () => {
    return new Promise((resolve, reject) => {
        rl.question('masukan nama anda : ', (nama) => {
            resolve(nama);
        });
    }); 
};

//membuat function main
const main = async () => { //fungsi ini adalah fungsi yg asyncronus
    const nama = await pertanyaan('Masukan nama anda'); //dimana tiap pertanyaan akan ditunggu sampai dijawab user (await)
    const noHP = await pertanyaan('Masukan noHP anda');
    const Gender = await pertanyaan('Masukan Gender anda');
    const Umur = await pertanyaan('Masukan Umur anda');
    const Alamat = await pertanyaan('Masukan Alamat anda');

    const contact = { nama, noHP, Gender, Umur, Alamat }; //membuat object
    const file = fs.readFileSync('./data/contact.json', 'utf8');   //menggunakan modul fs 
    const contacts = JSON.parse(file); //apapun isi file nya akan dalam bentuk json, parse merubah sting jadi json 

    contacts.push(contact);

    fs.writeFileSync('./data/contact.json', JSON.stringify(contacts)); //mengubah json jadi string

    console.log('Terimakasih sudah memasukan data');
    rl.close();
};

main();

//menggunakan promise

//(resolve : ketika promise selesai, reject : ketika promise gagal)
// const pertanyaan1 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('masukan nama anda : ', (nama) => {
//             resolve(nama);
//         });
//     }); 
// };

// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan NoHP anda : ', (noHP) => {
//             resolve(noHP);
//         });
//     }); 
// };

// const pertanyaan3 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan Gender anda : ', (Gender) => {
//             resolve(Gender);
//         });
//     }); 
// };

// const pertanyaan4 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan Umur anda : ', (Umur) => {
//             resolve(Umur);
//         });
//     }); 
// };

// const pertanyaan5 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan Alamat anda : ', (Alamat) => {
//             resolve(Alamat);
//         });
//     }); 
// };

// //membuat function main
// const main = async () => { //fungsi ini adalah fungsi yg asyncronus
//     const nama = await pertanyaan1(); //dimana tiap pertanyaan akan ditunggu sampai dijawab user (await)
//     const noHP = await pertanyaan2();
//     const Gender = await pertanyaan3();
//     const Umur = await pertanyaan4();
//     const Alamat = await pertanyaan5();

//     const contact = { nama, noHP, Gender, Umur, Alamat }; //membuat object
//     const file = fs.readFileSync('./data/contact.json', 'utf8');   //menggunakan modul fs 
//     const contacts = JSON.parse(file); //apapun isi file nya akan dalam bentuk json, parse merubah sting jadi json 

//     contacts.push(contact);

//     fs.writeFileSync('./data/contact.json', JSON.stringify(contacts)); //mengubah json jadi string

//     console.log('Terimaksih sudah memasukan data');
//     rl.close();
// };

// main();




// menggunakan calback

// membuat pertanyaan dengan modul readline(rl), dan menulis file menggunakan modul file system(fs), 

// rl.question('masukan nama anda : ', (nama) => {
//     rl.question('NoHP anda : ', (noHP) => {
//         rl.question('Gender anda : ', (Gender) => {
//             rl.question('Umur anda : ', (Umur) => {
//                 rl.question('Alamat anda : ', (Alamat) => {
//                 const contact = { nama, noHP, Gender, Umur, Alamat }; //membuat object
//                 const file = fs.readFileSync('./data/contact.json', 'utf8');   //menggunakan modul fs 
//                 const contacts = JSON.parse(file); //apapun isi file nya akan dalam bentuk json, parse merubah sting jadi json 

//                 contacts.push(contact);

//                 fs.writeFileSync('./data/contact.json', JSON.stringify(contacts)); //mengubah json jadi string

//                 console.log('Terimaksih sudah memasukan data');
//                 rl.close();
//                 });
//             });
//         });
//     });
// })
    