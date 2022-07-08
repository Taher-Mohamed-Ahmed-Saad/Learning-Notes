const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(8080);

app.get('/' , (req , res)=>{
    // res.send('<p>home</p>');
    res.sendFile('./views/index.html', {root : __dirname});
});


app.get('/about' , (req , res)=>{
    // res.send('<p>about</p>');
    res.sendFile('./views/about.html', {root : __dirname});
});


// redirects
app.get('/home', (req, res)=>{
    res.redirect('/');
});

// 404 page
app.use((req ,res)=>{
    res.status(404).sendFile('./views/404.html', {root : __dirname});
});