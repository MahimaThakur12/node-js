//import http module

const http = require('http');

//create a new server

const server = http.createServer((req,res)=>{
    res.write("hello world!");
    res.end();
});

//to start server

server.listen("4000");
