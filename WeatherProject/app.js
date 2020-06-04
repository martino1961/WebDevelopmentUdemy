//Section 20 - API: 261. Using Body Parser to Parse POST Requests to the Server
// Set Encoding UTF-8 for res.write() - e.g. for Slovak language

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//Get "/" (app Home Page)
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Catch GoButton (type="submit") via "<form action="/" method="POST">"
app.post("/", function (req, res) {
  const apiKey = "40b476b839899e1f0d9cab8f04a2c69e"; //My (free of charge) CurrentWeather API Key
  //cityName taken from input field on "/" (app Home Page)
  const city = req.body.cityName; //Entered cityName on "/" (app Home Page)
  const openWeatherPage = "https://api.openweathermap.org/data/2.5/weather";
  const language = "sk";  //"en"
  const unit = "metric";

  var msg1 = "Current temperature in ";
  var msg2 = " is ";
  var msg3 = " degrees Celcius.";

  switch (language) {
      case "sk":
          msg1 = "Aktuálna teplota v meste ";
          msg2 = " je ";
          msg3 = " stupňov Celzia.";
          break;
  
      default:
          break;
    } 

  //const url = "https://api.openweathermap.org/data/2.5/weather?q=Zilina&appid=40b476b839899e1f0d9cab8f04a2c69e&units=metric&lang=en";
  const url = openWeatherPage + "?q=" + city + "&lang=" + language + "&units=" + unit + "&appid=" + apiKey;
  //GET to external WebPage
  https.get(url, function (response) {
    console.log("StatusCode " + response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);

      const temperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      //Set UTF-8 Encoding (needed for Slovak language)
      //res.write() needs to be set the Encoding for 'text/html'
      res.set({ 'content-type': 'text/html; charset=utf-8' });

      res.write("<p><h1>" + msg1 + city + msg2 + temperature + msg3 + "</h1></p>");
      res.write("<p><h2>" + weatherDescription + "</h2></p>");
      res.write("<img src=" + imageURL + ">");
      //Send written HTML to browser
      res.send();
    });
  });

  //res.send("Server is up and running"); /* only 1 SEND command is possible */
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
