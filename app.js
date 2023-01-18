const express = require("express");
const app = express();


app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})



app.get("/terminator", (req, res) => {
  res.send("I'll be back!!!");
});

app.get("/jj evans", (req, res) => {
  res.send("Dy-no-myte!");
});

app.get("/drake", (req, res) => {
  res.send("Is anything im doing brand new?");
});

app.get("/backpack", (req, res) => {
  res.send("Too many glocks in this ... backpack backpack");
});

app.get("/players", (req, res) => {
  res.send("Cause girls is players too!");
});

app.get("/lab", (req, res) => {
  res.send("Today we are learning about express.");
});

app.get("/tech", (req, res) => {
  res.send("I'm apart of the tech world.");
});

app.get("/dog", (req, res) => {
  res.send("What is your favorite type of dog?");
});

app.get("borg", (req, res) => {
  res.send("Resistance is futile");
});

app.get("/future", (req, res) => {
  res.send("Still waiting for that 90k to hit");
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
  "Very doubtful"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const magic8Answer = magic8Responses[getRandomInt(19)];


app.get("/magic8", (req, res) => {
  res.send(`<h1>${magic8Answer}</h1>`);
});

module.exports = app;