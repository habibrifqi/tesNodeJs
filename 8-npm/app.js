const validator = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('rifqi@gmail.com'));

console.log(validator.isMobilePhone('0815366039','id-ID'));

const pesan = chalk`halloo bro, pe {bgRed kaber} luu`
console.log((`${pesan}`));

