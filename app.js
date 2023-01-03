const express = require("express");
const magic8Responses = require("./magicResponses");

const app = express();

app.get("/terminator", (req, res) => res.send("I'll be back<br />Hasta la vista, baby"));
app.get("/tim-gunn", (req, res) => res.send("Make it work"));
app.get("/steve-mcgarrett", (req, res) => res.send("Book 'em Danno!"));
app.get("/coach-taylor", (req, res) => res.send("Clear eyes, full hearts, can't Lose"));
app.get("/Homer-Simpson", (req, res) => res.send("D'Oh"));
app.get("/Bruce-Banner", (req, res) => res.send("Don't make me angry"));
app.get("/batman", (req, res) => res.send("To the Batmobile!"));
app.get("/Regis", (req, res) => res.send("Is that your final answer?"));
app.get("/borg", (req, res) => res.send("Resistance is futile"));

app.get("/magic8", (req, res) => {
  const index = Math.floor(Math.random() * magic8Responses.length);
  console.log(index, magic8Responses.length);
   res.send(`<h1>${magic8Responses[index]}</h1>`)
})

const PORT = 3003;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));