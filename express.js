var express = require("express");
const send = require("send");
var app = express();

app.get("/", function (req, res) {
  res.send("Voltei guys");
});

app.listen(3000, function () {
  console.log("Servidor rodando em https:127.0.0.1:3000");
});

