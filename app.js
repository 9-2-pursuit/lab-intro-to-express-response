const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Hello");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
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
  const random = Math.floor(Math.random() * magic8Responses.length);
  const randomRes = magic8Responses[random];
  res.send(`<h1>${randomRes}<h1>`);
});

module.exports = app;
