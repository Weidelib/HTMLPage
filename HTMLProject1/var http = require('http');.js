var http = require('http');
http.createSever(function(req, res){
res.writeHead(200,{'content-Type':'text/html'});
res.end('Hello CPS*3500!');
}).listen(8080);