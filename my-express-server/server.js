//Section 19: Express.js with Node.js - 244. Understanding and Working with Routes

//Include package express
const express = require("express");
//Express app
const app = express();

//GET "/" - GET Homepage (Route)
app.get("/", function(req, res){
   res.send("<h1>Hello!</h1>");  //Sends "Hello!" to the browser
});

//GET "/contact" page
app.get("/contact", function(req, res){
    res.send("Contact me at: strnadm@gmail.com");
});

//GET "/about" page
app.get("/about", function(req, res){
    res.send("My name is <h1>Martin</h1> and I love <h2>swimming, walking and coding.</h2>");
});

//port 3000 - for HTTP request
app.listen(3000, function() {
    console.log("Server started on port 3000");
})
