const fs = require('fs');

// reading files
// reading files is async but it also doesn't block the code below it
// once the reading is done it fires th function

fs.readFile('./docs/blog1.txt', (err, data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('end');

// writing files

fs.writeFile('./docs/blog1.txt','overrittend data' ,  (err)=>{   
    if (err){
        console.log(err);
    }
    console.log('done');
});

fs.writeFile('./docs/blog2.txt','create file' ,  (err)=>{  
    if (err){
        console.log(err);
    }     
    console.log('done');
});

// directories

if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if (err){
            console.log(err);
        }
        console.log('folder created');
    })
} else{
    fs.rmdir('./assets' , (err)=>{
        if (err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files

if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if (err){
            console.log(first);
        }
        console.log('file deleted');
    })
}
