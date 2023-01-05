const express = require('express');

const app = express();
const PORT = 3003;

app.get('/', (req,res) => {
    res.send('Hello, world!')
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back. Hasta la vista, baby");
});

app.get("/timgunn", (req, res) => {
  res.send("Make it work");
});

app.get("/SteveMcGarrett", (req, res) => {
  res.send("Book 'em Danno!");
});

app.get("/captainAmerica", (req, res) => {
  res.send("Avengers Assemble!");
});

app.get("/spiderman", (req, res) => {
  res.send("My Spider-Sense is tingling!");
});

app.get("/regis", (req, res) => {
  res.send("Is that your final answer?");
});

app.get("/rocky", (req, res) => {
  res.send("Yo, Adrian");
});

app.get("/steverogers", (req, res) => {
  res.send("I can do this all day");
});

app.get("/groot", (req, res) => {
  res.send("I am groot");
});

app.get("/drstrange", (req, res) => {
  res.send("Dormammu, I've come to bargain");
});

const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic8", (req, res) => {
  res.send(`<h1>${magic8Responses[Math.floor(Math.random() * 19)]}</h1>`);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

module.exports = app;