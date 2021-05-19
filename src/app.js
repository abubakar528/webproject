const { static } = require('express');
const express = require('express');

const path = require('path');
const app = express();


const address = path.join(__dirname, "../publuc")
app.set("view engine", "hbs");
app.use(express.static(address));
// app.get("/",(req, res) => {
//     res.render('index.hbs');
// })

app.get("/", (req, res)=>{
    res.send("hello i am learning express by youtube");

})
app.get("/about", (req, res)=>{
    res.send("<h1>this is about pafge off my application in express </h1>");

})
app.get("/temp", (req, res)=>{
    res.send({
        Id:1,
        name:"jia",
    });

})
app.get("/home", (req, res)=>{
    res.send("hi this contemt is from my homepage of application in express");

})
    app.listen(5000, ()=>{
        console.log("the port is listing at 5000")
    })