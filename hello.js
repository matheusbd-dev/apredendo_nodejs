//Carrega o modulo http = import d. vida
var http = require("http");

//Cria servidor https para ouvir as requicições
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("deu certo krl\n");
  })
  .listen(3000, "127.0.0.1");

//acessar o servidor
console.log("Servidor executando em http://127.0.0.1:3000/");
