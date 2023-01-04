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

const quotes = `- Emeril - Bam!
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
- Harry Callahan - Go ahead, make my day
- Travis Bickle - You talkin' to me?
- Tony Montana - Say hello to my little friend
- Zeus - Release the Kraken
- James Bond - the name is Bond, James Bond
- Dorothy - Toto, I've got a feeling we're not in Kansas anymore
- Rod Tidwell - Show me the money!
- Frankenstein - It's alive! It's alive
- Jim Lovell - Houston, we have a problem
- Rocky - Yo, Adrian
- Gollum - My precious
- Jack Dawson - I'm king of the world!
- Tim Gunn - Make it work`;

const parsedQuotes = quotes.split("\n").map((quote) => quote.split(" - "));

parsedQuotes.forEach((quote) => {
  let route = quote[0].replace("- ", "").replace(" ", "-").toLowerCase();
  app.get(`/${route}`, (req, res) => {
    res.send(quote[1]);
  });
});

app.get("/", (req, res) => {
  res.send("Wow!");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back!");
});

app.get("/magic8", (req, res) => {
  res.send(
    `<h1>${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  );
});

app.listen(3003, (req, res) => {
  console.log("Now listening on port 3003.");
});
