const fs = require('fs');

// fs.readFile('notes.txt','utf-8',(err, data)=>{
//     console.log(err,data);
// });

// const a = fs.readFileSync('notes.txt');
// console.log(a.toString());

// fs.writeFile('myfile.txt',"this is data",()=>{
//     console.log("writing completed");
// })

const a = fs.writeFileSync('myfile.txt','this is data2');
console.log(a);
console.log('outside fs readfile function');