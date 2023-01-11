const express = require("express");

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Wow!");
});

const quotes = `
- Emeril - Bam!
- Steve McGarrett - Book 'em Danno!  
- Coach Taylor - Clear eyes, full hearts, can't Lose
- Homer Simpson - D'Oh
- Bruce Banner - Don't make me angry
- JJ Evans - Dy-no-myte!
- Batman - To the Batmobile!
- Hannibal Smith - I love it when a plan comes together
- Fraiser - I'm listening
- Regis - Is that your final answer?
- Borg - Resistance is futile
- Fox Mulder - The truth is out there
`;

const quotesParsed = quotes.split("\n").map((q) => q.trim().split(" - "));

quotesParsed.forEach((quote) => {
  let route = quote[0]
    .replace("-", "")
    .trim()
    .split(" ")
    .join("-")
    .toLowerCase();
  app.get(`/${route}`, (req, res) => {
    res.send(quote[1]);
  });
});

app.get("/magick8", (req, res) => {
  values = [
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
  res.send(values[Math.floor(Math.random(values.length))]);
});

console.log(quotesParsed);

app.listen(3003, (req, res) => {
  console.log("server now listening on port 3003");
});
