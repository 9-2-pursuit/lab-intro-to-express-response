// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Activity Catchphrases Express
app.get("/terminator", (req, res) => {
  res.send("I'll be back. ----- Hasta la vista, baby");
  //   res.send("Hasta la vista, baby"); - causes error
});

app.get("/timgunn", (request, response) => {
  response.send("Make it work");
});

app.get("/SteveMcGarrett", (request, response) => {
  response.send("Book 'em Danno!");
});

app.get("/captainAmerica", (request, response) => {
  response.send("Avengers Assemble!");
});

app.get("/spiderman", (request, response) => {
  response.send("My Spider-Sense is tingling!");
});

app.get("/regis", (request, response) => {
  response.send("Is that your final answer?");
});

app.get("/rocky", (request, response) => {
  response.send("Yo, Adrian");
});

app.get("/steverogers", (request, response) => {
  response.send("I can do this all day");
});

app.get("/groot", (request, response) => {
  response.send("I am groot");
});

app.get("/drstrange", (request, response) => {
  response.send("Dormammu, I've come to bargain");
});

// Activity Magic 8 Ball

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

// EXPORT
module.exports = app;
