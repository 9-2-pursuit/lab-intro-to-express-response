//Dependencies
const express = require('express');

//Create an instance of express
const app = express();
const port = 3003;

//Create a route for the home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Create a route for the catchphrase page(s)
app.get('/terminator', (req, res) => {
    res.send('I\'ll be back');
});

app.get('/Harriet-Tubman', (req, res) => {
    res.send(`Swing low sweet chariot`);
});

app.get('/Leon-Trotsky', (req, res) => {
    res.send(`“Technique is noticed most markedly in the case of those who have not mastered it.”
    `);
});

app.get('Malcolm X', (req, res) => {
    res.send(`By any means necessary`);
});

app.get('Mattathias Maccabeus', (req, res) => {
    res.send(`We fight for our lives and our laws`);
});

app.get('Nelson Mandela', (req, res) => {
    res.send(`It always seems impossible until it's done`);
});

app.get ( '/Mao-Zedong', (req, res) => {
    res.send(`Once all struggle is grasped, miracles are possible.`);
});

app.get ( '/Emiliano-Zapata', (req, res) => {
    res.send(`“Land and Liberty”`);
});

app.get ( '/Tupac-Amaru-II', (req, res) => {
    res.send(`I will return and I will be millions`);
});

app.get ( '/Toussaint-Louverture', (req, res) => {
    res.send(`“I was born a slave, but nature gave me a soul of a free man….”`);
});

app.get ( '/Marcus-Garvey', (req, res) => {
    res.send (`“I am not a pessimist. I am an optimist with experience.”`);
});

app.get ( '/Rosa-Luxemburg', (req, res) => {
    res.send (`“The Accumulation of Capital is the Accumulation of Dead Labour.”`);
});


// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Create an array for the magic 8 ball responses | must come before the route for the magic 8 ball page
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

// Create a route for the magic 8 ball page
app.get('/magic-8-ball', (req, res) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    res.send(`<h1>${magic8Responses[randomIndex]}</h1>`);
});


module.exports = app;