//Sec20: 263. Setting Up the Sign Up Page

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

//for addressing css and image folders statically (in "public" folder)
app.use(express.static("public"));

//Get "/" (app Home Page)
app.get("/", function(req, res) {
    //res.send("Server is up and running");
    res.sendFile(__dirname + "/signup.html");
})

//Catch SignMeUp button on page "/" (type="submit") via "<form action="/" method="POST">"
app.post("/", function(req, res) {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);
})

app.listen(3000, function() {
    console.log("Server is running on the port 3000.");
})