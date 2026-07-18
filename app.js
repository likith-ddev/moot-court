
const express=require("express");
const app=express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));


app.get("/",(req,res)=>{
    res.render("homepage.ejs");
})
app.get("/register",(req,res)=>{
    res.send("please fill the form");
})
app.listen(8080,()=>{
    console.log("listenign from port 8080");
})