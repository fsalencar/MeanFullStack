'use strict'

let http = require('http');
http.createServer(function(req,res){
    res.writeHead(200 , {'Content-type':'text/plain'});
    res.end('Sou um servidor criado pelo Node.js!\n');
}).listen(3000, '127.0.0.1');
