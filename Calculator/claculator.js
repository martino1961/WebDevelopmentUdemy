//Section 19: 246. Calculator app

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/* HTML Form:
<form action="/" method="POST">
  <input type="text" name="num1" placeholder="First Number">
  <input type="text" name="num2" placeholder="Second Number">
  <button type="submit" name="submit">Calculate</button>
</form>
*/

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
    //console.log(req.body);
    //console.log("Number 1: " + req.body.num1); //"num1" is taken from <input... name="num1" ...>
    //console.log("Number 2: " + req.body.num2); //"num2" is taken from <input... name="num2" ...>

    //var num1 = req.body.num1;  //returns text
    //var num2 = req.body.num2;  //returns text
    var num1 =  Number(req.body.num1);  //conversion to number
    var num2 =  Number(req.body.num2);  //conversion to number

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

