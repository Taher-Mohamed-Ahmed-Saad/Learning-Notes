const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine' , 'ejs');

// listen for requests
app.listen(8080);


const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];

app.get('/' , (req , res)=>{
    res.render('index' , {title :'home' ,blogs});    
});

app.get('/about' , (req , res)=>{
    res.render('about' , {title :'about'});  
});

app.get('/blogs/create', (req, res)=>{
    res.render('create' , {title :'createblog'});  
});

// 404 page
app.use((req ,res)=>{
    res.status(404).render('404' , {title :'404'});  
});

// int the ejs
// <%= %> when output dynamic data
// <%  %> when doing any logic but no output
// <%- %> when using functions (ex. include)
