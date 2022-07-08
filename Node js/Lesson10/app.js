const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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


// app.use((req, res , next)=>{
//     console.log('new request');
//     console.log(req.hostname);
//     console.log(req.path);
//     console.log(req.method);
//     next();
// });

// middleware for static files 
app.use(express.static('public')); // define where the static data is found
app.use(express.urlencoded({extended : true}));
// third party middleware to log data in the console
app.use(morgan('dev')); 


// mongoose and mongo sandbox  routes
app.get('/add-blog', (req, res)=>{

    const blog = new Blog({
        title:'new2',
        snippet:'s2',
        body:'b2'
    });

    blog.save()
        .then((result)=> res.send(result))
        .catch((err)=> console.log(err ));
});

app.get('/all-blogs' , (req, res)=>{
    Blog.find()
        .then((result)=> res.send(result))
        .catch((err)=> console.log(err));
});

app.get('/single-blog' , (req, res)=>{
    Blog.findById('6202c52940bfe501bd674e6d')
        .then((result)=> res.send(result))
        .catch((err)=> console.log(err));
});


app.get('/' , (req , res)=>{
    res.redirect('/blogs');    
});

app.get('/about' , (req , res)=>{
    res.render('about' , {title :'about'});  
});

app.get('/blogs', (req, res)=>{
    Blog.find().sort({createdAt :-1 })
        .then(result=> res.render('index' , {title: 'All blogs', blogs:result }))
        .catch(err=> console.log(err));
});

app.post('/blogs', (req ,res)=>{
    const blog = new Blog(req.body);
    blog.save()
        .then(result =>res.redirect('/blogs'))
        .catch(err => console.log(err));
});

app.get('/blogs/:id', (req, res)=>{
    const id = req.params.id;
    Blog.findById(id)
        .then( result => res.render('details', {title: 'details page', blog :result}))
        .catch( err => console.log(err));
});

app.delete('/blogs/:id', (req, res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        // we can't use redirect when the request from the front end 
        // is an ajax request (using fetch)
        .then( result => res.json({redirect: '/blogs'}))
        .catch( err => console.log(err));
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
