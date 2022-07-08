const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk)=>{
//     console.log('------------------------------------ NEW -------------------------------');
//     console.log('------------------------------------ NEW -------------------------------');
//     console.log('------------------------------------ NEW -------------------------------');
//     console.log(chunk);
//     writeStream.write('\n------------------------------------ NEW -------------------------------\n');
//     writeStream.write('\n------------------------------------ NEW -------------------------------\n');
//     writeStream.write('\n------------------------------------ NEW -------------------------------\n');
//     writeStream.write(chunk);
// })

// alternative way to do the above code

// piping
readStream.pipe(writeStream);
