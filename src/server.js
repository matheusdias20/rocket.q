const express = require("express");
const route = require("./route");
const path = require("path");

const server = express();

// Configuração da porta - Heroku
var porta = process.env.PORT || 8080

server.set("view engine", "ejs");

server.use(express.static("public"));

server.set("views", path.join(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));

server.use(route);

server.listen(porta, () => console.log('rodando'))

// Configuração da porta - Local
// server.listen(3000, () => console.log("RODANDO"));

