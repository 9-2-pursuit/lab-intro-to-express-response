// const { response } = require("express");
const express = require("express");

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back...");
});

app.get("/HomerSimpson", (req, res) => {
  res.send("D'Oh!");
});

app.get("/BruceBanner", (req, res) => {
  res.send("Don't make me angry...");
});

app.get("/JJevans", (req, res) => {
  res.send("Dy-no-myte!");
});

app.get("/Batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/Batman/I'm", (req, res) => {
  res.send("I'm Batman!");
});

app.get("/Batman/nana", (req, res) => {
  res.send(
    "NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA BATMAN!"
  );
});

app.get("/Hannbal/Smith", (req, res) => {
  res.send("I love it when a plan comes together...");
});

app.get("/Regis", (req, res) => {
  res.send("Is that your final answer?");
});

app.get("/Borg", (req, res) => {
  res.send("Resistance is futile");
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

// const magic8Answers = magic8Responses[Math.floor(Math.random() * 18)];

function mag8Answ() {
  return magic8Responses[Math.floor(Math.random() * 18)];
}

app.get("/magic8", (req, res) => {
  res.send(`<h1>${mag8Answ()}</h1>`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

module.exports = app;
