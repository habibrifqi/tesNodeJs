const fs = require('fs');
const { text } = require('stream/consumers');

// console.log(fs);

//menuliskan string ke file secara cycronus

// try{
//     fs.writeFileSync('data/text.txt','hello word rifqi secara syncronous');
// }catch(e){
//     console.info(e);
// }


//menuliskan string ke file secara ascyronous

// fs.writeFile('data/text.txt', 'hello shu' , (err) => {
//     console.info(err);
// });

//membaca isi file secara cycronus

// const data = fs.readFileSync('data/text.txt', 'utf-8');
// console.info(data);

//membaca isi file secara ascycronus
// fs.readFile('data/text.txt', 'utf-8', function(err,data){
//       if (err) {
//         throw err;
//       }
//     // Display the file content
//     console.log(data);
// });


//readline
const readline = require('readline');
const { json } = require('node:stream/consumers');

const rl = readline.createInterface({
    input :process.stdin,
    output: process.stdout,
});

//membuat folder contact jika belum ada
const dirPath = "./contact";
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

//membuat file contact json jika belum ada
const filePath = "contact/contact.json";
if (!fs.existsSync(filePath)) {
    // fs.writeFileSync(dirPath, '[]', 'utf-8');
    fs.writeFileSync(filePath,'[]','utf8');
}

rl.question('sape lu?' , (nama) =>{
    rl.question('nomer hp ?' , (nomerHp) =>{
       const contact = {nama : nama, nomerHp};
        // console.log(`oalahh ${contact.nama} `);
        // console.log(contact);
        const file = fs.readFileSync('contact/contact.json','utf8');
        // console.log(file);
        const contacts = JSON.parse(file);
        

        contacts.push(contact);
        console.info(JSON.stringify(contacts));
        fs.writeFileSync('contact/contact.json',JSON.stringify(contacts));

        
        rl.close();
    })    
    
    // rl.close();
});




