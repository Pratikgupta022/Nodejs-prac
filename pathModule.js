const path = require('path'); 

a1 = path.basename('C:\\temp\\myfile.html');
a2 = path.dirname('C:\\temp\\myfile.html');
a3 = path.extname(__filename);

console.log(a1);
console.log(a2);
console.log(__filename ,a3);