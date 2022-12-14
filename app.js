const express = require("express");
const app = express();

// ROUTES
// app.get("/", (request, response) => {
//   response.send("Hello, world!");
// });


app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})


// app.get('/', (request, response) => {
//     response.status(418).send('Hello, world!')
// })


app.get("/terminator", (req, res) => {
  res.send("I'll be back!!!");
  //   res.send("Hasta la vista, baby");
  //I see one message in the browser which would be the first one and a error in the console.
});

app.get("/gotcha", (req, res) => {
  res.send("Why the labs keep saying gotcha?");
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

app.get("/module4", (req, res) => {
  res.send("We made it to the 4th module.");
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
  "Very doubtful",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const magic8Answer = magic8Responses[getRandomInt(19)];

// const magic8Answer= magic8Responses[(cap => Math.floor(Math.random() * cap))(19)]

app.get("/magic8", (req, res) => {
  res.send(`<h1>${magic8Answer}</h1>`);
});

// LISTEN
// app.listen(3010);

// EXPORT
module.exports = app;
