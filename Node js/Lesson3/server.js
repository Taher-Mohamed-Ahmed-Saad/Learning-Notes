const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('Request made');
});

server.listen(3000, 'localhost' , ()=>{
    console.log('listening on localhost:3000');
})