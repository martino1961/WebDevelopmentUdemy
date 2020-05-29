//Section 19: 246. Calculator app 
//  - the logic runs on the server - on the Backend (BE)
//  - Home page - Calculator of 2 numbers
//  - added web page - BMI Calculator

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Parsing HTML Request - Form:
//bodyParser.urlencoded --> for <form>
//extended: true --> allows Nested Object
app.use(bodyParser.urlencoded({extended: true}));

//GET "/" - GET Homepage (Route "/")
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");  
});

//POST "/" - Catch POST to route "/"
app.post("/", function(req, res){
    var num1 =  Number(req.body.num1);  //conversion to number
    var num2 =  Number(req.body.num2);  //conversion to number

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

//GET "/bmicalculator" - GET BMI Calculator page (Route "/bmicalculator")
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

//POST "/bmicalculator" - catch values inputed in BMI Calculator page
app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

//console.log("Weight " + weight);
//console.log("Height " + height);

// BMI = (weight in kg) / ((height in m) * (height in m))
//Round to 2 decimals: Round(( A / B) * 100) / 100
    var bmi = Math.round((weight / Math.pow(height, 2))*100)/100;
//console.log("BMI: " + bmi);

    res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

