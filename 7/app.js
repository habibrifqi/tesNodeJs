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
const rl = readline.createInterface({
    input :process.stdin,
    output: process.stdout,
});

rl.question('sape lu?' , (nama) =>{
    rl.question('nomer hp ?' , (nomer) =>{
        console.log(`oalahh ${nomer} `);
        console.log(`oalahh ${nama} `);
        fs.writeFile('contact/contact.json', `[{"nama": "${nama}","nomer": ${nomer}}]` , (err) => {
            if (err){
                fs.mkdirSync('contact', { recursive: true });
                fs.writeFile('contact/contact.json', `[{"nama": "${nama}","nomer": ${nomer}}]`, (err) => {});
                rl.close();
            }
            
            rl.close();
        });
        // rl.close();
    })    
    
    // rl.close();
});




