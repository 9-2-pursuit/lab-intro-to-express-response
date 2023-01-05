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

// Para importar usamos const express = require("")

// Tienes que importar express
const app = require("express");

// Ejecutar express y guardarlo en una variable server
const server = app();

// RUTAS
// WARNING: SON ESTÁNDARES!!!
// 1-. Usar el slash al inicio de la ruta "/"
// 2-. Mantener las secciones de la URL en minusculas
// 3-. Tener cuidado con las rutas que tienen espacios entre medio

// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; ///OJO CON FORMULA
// }

// SEGUNDA PARTE DEL EJERCICIO
server.get("/magic8", (req, res) => {
  const randomIndx = Math.floor(Math.random() * (magic8Responses.length + 1));

  res.send(magic8Responses[randomIndx]);
});

// PRIMERA PARTE DEL EJERCICIO
server.get("/terminator", (req, res) => {
  res.json({
    ///NO SE PUEDE RESPONDER DOS VECES LA MISMA PETCION TIENE QUE SER UNA UNICA RESPUESTA (NORMALMENTE CON JSON (EXISTEN OTRAS))!!!
    msg1: `I'll be back`,
    msg2: "Hasta la vista, baby",
  });
});

server.get("/Borg", (req, res) => {
  res.send(`Resistance is futile`);
});

server.get("/Zeus", (req, res) => {
  res.send(`Release the Kraken`);
});

server.get("/Rocky", (req, res) => {
  res.send(`Yo, Adrian`);
});

server.get("/Gollum", (req, res) => {
  res.send(`My precious`);
});

server.get("Emeril", (req, res) => {
  res.send(`Bam!`);
});

server.get("Homer_Simpson", (req, res) => {
  res.send("D'Oh");
});

server.get("Fraiser", (req, res) => {
  res.send(` I'm listening`);
});

server.get("Regis", (req, res) => {
  res.send(`Is that your final answer?`);
});

server.get("/travis-bickle", (req, res) => {
  res.send(`You talkin' to me?
`);
});

server.get("James Bond ", (req, res) => {
  res.send("the name is Bond, James Bond");
});

// Usar el metodo .listen para poder levantar la aplicacion en un puerto
server.listen(3000, () => console.log("Se esta ejecutando al 100%"));

module.exports = server;
