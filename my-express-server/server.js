//Section 19: Express.js with Node.js - 242. Handling Requests and Responses: the GET Request

//Include package express
const express = require("express");
//Express app
const app = express();

// "/" - slash represents homepage
//app.get() - catch GET request and send the response (via callback function)
app.get("/", function(request, response){
   // console.log(request);
   response.send("Hello!");  //Sends "Hello!" to the browser
});

//port 3000 - for HTTP request
//launch in Cmdline: node server.js 
//  --> sever will listen --> interrupt server by Ctrl+C 

//Check server by callback function
app.listen(3000, function() {
    console.log("Server started on port 3000");
})
