var http = require('http');

console.log("Startuje serwer...");

http.createServer(function (request, response){
    //tu jest funkcja createServer
    //request = żądanie wyslane z przegladarki
    //response = to co wysylamy do przegladarki w odpowiedzi
    response.writeHead(418, {'Content-Type': 'text/html'});
    response.write("Hello world!");
    response.end();

}).listen(8080);