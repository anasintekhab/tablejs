// var fs = require('fs');

// fs.readFile('./info.txt', function(err, data) {
//     console.log("File read successfully!! contents are : " + data);
// });

// console.log("The file will read ")

// var fs = require('fs');

// const data = fs.readFileSync('./info.txt', 'utf-8');

// console.log(data);
// console.log("The file will be read!!");

var fs = require('fs');

fs.readFile('./info.txt', 'utf-8', function(err, data) {
    console.log(data);
});

console.log("The file will be read!!");