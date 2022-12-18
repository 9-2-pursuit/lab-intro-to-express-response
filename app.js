const express = require('express');
const app = express();

var port = process.env.PORT || 7777;


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
  
  ]



app.get("/", (req, res) => {
    res.send("Welcome to Response Lab");
  });


  app.get("/terminator", (req, res) => {
    res.send("I'll be back");
    res.send('Hasta la vista, baby') //this will not occur
  });

  app.get("/Emeril", (req, res) => {
    res.send("Bam!");
  });

  app.get("/SteveMcGarrett", (req, res) => {
    res.send("Book 'em Danno!");
  });

  app.get("/CoachTaylor", (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose");
  });

  app.get("/HomerSimpson", (req, res) => {
    res.send("D'Oh");
  });

  app.get("/BruceBanner", (req, res) => {
    res.send("Don't make me angry");
  });

  app.get("/JJEvans", (req, res) => {
    res.send("Dy-no-myte!");
  });

  app.get("/Batman", (req, res) => {
    res.send("To the Batmobile!");
  });

  app.get("/Fraiser", (req, res) => {
    res.send("I'm listening");
  });

  app.get("/magic8", (req, res) => {

    // get random index value
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);

    // get random item
    const item = magic8Responses[randomIndex];
    res.send(item);
  });

//Random item and random index code from this site
//https://www.programiz.com/javascript/examples/get-random-item


  

  module.exports = app;