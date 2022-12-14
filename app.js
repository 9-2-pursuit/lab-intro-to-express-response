const express = require("express");
const app = express();
const PORT = 3003

app.get("/",(req,res) =>{
  //
  res.send("hello world");
});

app.get("/react",(req,res) =>{
  //
  res.status(418).send("<div><h1>I am a teapot!</h1></div>");
});



// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})