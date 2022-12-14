const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.status(200).send("Hello World!");
});

// app.get("/", (request, response) => {
//     response.status(418).send("Hello World!");
// });
  
app.get("/terminator", (request, response) => {
    response.send("I'll be back!!!!")
    // response.send('I\ll be back')
    // response.send('Hasta la vista, baby')
    // sending more than 1 response sends an error, the first response is still shown on the browser
})

app.get("/Frankenstein", (req, res) => {
    res.send("It's alive! It's alive!!")
})

app.get("/gotcha-back", (req, res) => {
    res.send("-_- You can't catch me -_-")
})

app.get("/DJ-Khalid", (req, res) => {
    res.send("Another One!")
})

app.get("/Mcdonald's", (req, res) => {
    res.send("<h1>Ba-da Ba Ba Ba, I'm Lovin' It</h1>")
})

app.get("/Frosted-Flakes", (req, res) => {
    res.send("They're GRRR-EAT!!")
})

app.get("/Fat-Bastard", (req, res) => {
    res.send("<h1>Get In My Belly!!</h1>")
})

app.get("/Forrest_Gump", (req, res) => {
    res.send("Run, Forrest, run!")
})

app.get("/Wizard_of_Oz", (req, res) => {
    res.send("Ding-dong, the witch is dead!")
})

app.get("/Austin_Powers", (req, res) => {
    res.send("Groovy Baby!")
})

app.get("/Mr._Miyagi", (req, res) => {
    res.send("Wax on, wax off")
})

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
 

// const randomPhrase = (el) => { return Math.floor(Math.random() * el) }
// const magic8Answer = magic8Responses[randomPhrase(19)]

app.get("/magic8", (req, res) => {
    res.send(`<h1>${magic8Responses[(el => Math.floor(Math.random() * el))(19)]}</h1>`)
})
  
// app.listen(3003);

module.exports = app