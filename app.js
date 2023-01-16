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

app.get("/", (request, response) => {
  response.send("rp quotes");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back."); //Will be shown
  // response.send("Hasta la vista baby!"); Causes an error.  Only one response per request.
});

app.get("/batman", (request, response) => {
  response.send("I'm the GODDAMN BATMAN.");
});

app.get("/homersimpson", (request, response) => {
  response.send("D'oh!");
});

app.get("/dynamo", (request, response) => {
  response.send("You must be busy dying all the time.");
});

app.get("/vegeta", (request, response) => {
  response.send("I AM THE HYPE!");
});

app.get("/trunks", (request, response) => {
  response.send("There's a hole in my Trunks!");
});

app.get("/megaman", (request, response) => {
  response.send("Wily!  I gonna do what I should have done years ago!!");
});

app.get("/alfred", (request, response) => {
  response.send("Some men just want to see the world burn...");
});

app.get("/ultros", (request, response) => {
  response.send("Don't tease the Octopus, kids!");
});

app.get("/Someonewise", (request, response) => {
  response.send("There's no such thing as useless data!");
});

app.get("/magic8", (req, res) => {
  res.send(
    `<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}`
  );
});

app.listen(3003, () => {
  console.log("I am listening for requests on port 3003!");
});
