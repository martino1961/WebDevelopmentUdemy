//Section 19: Express.js with Node.js - 242. Handling Requests and Responses: the GET Request

//1) start server: in CmdLine: node server.js
//2) in browser: localhost:3000

//Include package express
const express = require("express");
//Express app
const app = express();

//Shortcut: 
// req - for Request
// res - for Response 
app.get("/", function(req, res){
   res.send("<h1>Hello!</h1>");  //Sends "Hello!" to the browser
});

//port 3000 - for HTTP request
//launch in Cmdline: node server.js 
//  --> sever will listen --> interrupt server by Ctrl+C 

//Check server by callback function
app.listen(3000, function() {
    console.log("Server started on port 3000");
})
