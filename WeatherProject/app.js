//Section 20 - API: 258. Making GET Requests with the Node HTTPS Module

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Zilina&appid=40b476b839899e1f0d9cab8f04a2c69e&units=metric";
    https.get(url, function(response) {
        console.log("StatusCode " + response.statusCode);
      //console.log(response);
    });

    res.send("Server is up and running");
})



app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})