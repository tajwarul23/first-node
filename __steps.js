/**
 * 1.Create a folder((manually or mkdir)
 * 2.npm init
 * 3.npm install express
 * 4.create index.js
 * 
 * 
 * -----------------------------
 * For express/node server
 * ------------------------------
 * 
 * 1.const express = require('express');
const app =express();
const port =process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.listen(port, ()=>{
    console.log("listening to port",port);
})in index.js
*2.npm index.js


  


 */
