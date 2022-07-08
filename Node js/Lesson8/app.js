const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine' , 'ejs');
// app.set('views', 'myviews');  if we want to change the name from views


// listen for requests
app.listen(8080);


// app.use((req, res , next)=>{
//     console.log('new request');
//     console.log(req.hostname);
//     console.log(req.path);
//     console.log(req.method);
//     next();
// });

// middleware for stati files static files
app.use(express.static('public')); // define where the static data is found

// third party middleware to log data in the console
app.use(morgan('dev'));

app.get('/' , (req , res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    
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
