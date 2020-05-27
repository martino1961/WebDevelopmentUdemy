//Section 19: Express.js with Node.js - 241. Creating Our First Server with Express

//Include package express
const express = require("express");
//Express app
const app = express();

//port 3000 - for HTTP request
//launch in Cmdline: node server.js 
//  --> sever will listen --> interrupt server by Ctrl+C
//app.listen(3000);  

//Check server by callback function
app.listen(3000, function() {
    console.log("Server started on port 3000");
})
