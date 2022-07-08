const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://taher:taher@taher.jyl2f.mongodb.net/Node-course?retryWrites=true&w=majority'
mongoose.connect(dbURI , {useNewUrlParser : true , useUnifiedTopology: true})
    .then((result)=> app.listen(8080))
    .catch((err)=> console.log(err));


// register view engine
app.set('view engine' , 'ejs');
// app.set('views', 'myviews');  if we want to change the name from views

// middleware for static files 
app.use(express.static('public')); // define where the static data is found
app.use(express.urlencoded({extended : true}));
// third party middleware to log data in the console
app.use(morgan('dev')); 

app.get('/' , (req , res)=>{
    res.redirect('/blogs');    
});

app.get('/about' , (req , res)=>{
    res.render('about' , {title :'about'});  
});

// blogs
app.use('/blogs' , blogRoutes);

 
// 404 page
app.use((req ,res)=>{
    res.status(404).render('404' , {title :'404'});  
});

// int the ejs
// <%= %> when output dynamic data
// <%  %> when doing any logic but no output
// <%- %> when using functions (ex. include)
