const http = require('http');
const fs = require('fs');
const _ = require('lodash'); 

const server = http.createServer((req, res)=>{

    // lodash
    const randNum = _.random(0, 100);
    console.log(randNum);

    const greet  = _.once(()=>{
        console.log('hello');
    })

    greet();
    // doesn't execute
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){

        case '/' :
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        // redirect to another page
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location' , '/about');
            res.end();
            break;
        default :
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send html page
    fs.readFile(path , (err , data)=>{
        if (err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
            // res.end(data) is equivelant to both of those lines in case
            // we send one argument
        }
    })
 
});

server.listen(8080, 'localhost' , ()=>{
    console.log('listening on localhost:8080');
})


// npm install -g nodemon
// npm i --save lodash