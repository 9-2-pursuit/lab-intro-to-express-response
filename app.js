const { response, request } = require("express");
const express = require("express");
const app = express();

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



app.get("/terminator", (request, response) => {
  response.send("I'll be back");
  response.send("Hasta la vista, baby");
});

app.get("/burgers", (request, response) => {
  response.send("It's burger time 🍔");
});

app.get("/hannibal", (request, response) => {
  response.send("Hannibal Smith - I love it when a plan comes together");
});

app.get("/jimlovell", (request, response) => {
  response.send("Houston, we have a problem");
});

app.get("/magic8", (request, response) => {
let magic8Answer  = magic8Responses[Math.floor(Math.random()*magic8Responses.length)];
  response.send(`<h1>${magic8Answer}</h1>`);
});

app.listen(3003, () => {
  //listen for requests on port 3003
  console.log("Listening for requests on port 3003");
});
