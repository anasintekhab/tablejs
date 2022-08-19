// const http = require('http');
// count = 0;
// http.createServer(function(req, res) {
//     console.log(count++)
//     res.end("--WELCOME TO NODE.JS--");

// }).listen("8000", function() {
//     console.log("8000...");
// })

// const http = require('http');
// let count = 0;
// http.createServer(function(req, res) {
//     console.log("Request :" + count++);
//     res.writeHead(200, { 'Content-Type': 'text/html', 'my-header': 'janmejaya' });
//     res.end("<h1>--Welcome to Node JS Server---</h1>");

// }).listen("8000", function() {
//     console.log("Server is running at 8000---");
// });

const http = require('http');
//let count=0;
http.createServer(function(req, res) {
    // console.log("Request :"+count++);
    const url = req.url;
    console.log(url);
    if (url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html', 'my-header': 'janmejaya' });
        res.end("<h1>Contact Us @9876543210</h1>");
    } else if (url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html', 'my-header': 'janmejaya' });
        res.end("<h1>About Us Page</h1>");
    } else if (url == '/services') {
        res.writeHead(200, { 'Content-Type': 'text/html', 'my-header': 'janmejaya' });
        res.end("<h1>Services Provided by us</h1>");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html', 'my-header': 'janmejaya' });
        res.end("<h1>404 Page not Found</h1>");
    }

}).listen("8000", function() {
    console.log("Server is running at 8000---");
});