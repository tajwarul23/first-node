const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("Hello form nodemon Node")
});


const users =[
    {id:1,name:'Faiza',email:'f@gmail.com',phone:"00000000"},
    {id:2,name:'Usman',email:'u@gmail.com',phone:"023400598"},
    {id:3,name:'Rafid',email:'r@gmail.com',phone:"023454898"},
    {id:4,name:'Maroof',email:'m@gmail.com',phone:"04580598"},
    {id:5,name:'Lipi',email:'l@gmail.com',phone:"0234555598"},
    {id:6,name:'Taj',email:'t@gmail.com',phone:"32313131333"},
    {id:7,name:'Tajwarul',email:'tj@gmail.com',phone:"0235458"}
]

app.get('/users',(req,res)=>{
    if(req.query.name){
    const search =req.query.name.toLocaleLowerCase();
    const matched = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
    res.send(matched)
    }
    else{
        res.send(users)
    }
})

app.get('/user/:id',(req,res)=>{
   
    console.log(req.params);
    const id =parseInt(req.params.id);
    const user = users.find(u=>u.id ==id);
    res.send(user);
});

app.post('/user',(req,res)=>{
    console.log(req.body);
    const user =req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user)
})

app.listen(port,()=>{
    console.log("listening to the port",port)
})