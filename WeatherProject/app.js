//Section 20 - API: 261. Using Body Parser to Parse POST Requests to the Server

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
//  console.log("City: " + req.body.cityName);
  const apiKey = "40b476b839899e1f0d9cab8f04a2c69e"; //My (free of charge) CurrentWeather API Key
  const city = req.body.cityName; //"Zilina";
  const openWeatherPage = "https://api.openweathermap.org/data/2.5/weather";
  const language = "en";
  const unit = "metric";
  
  //const url = "https://api.openweathermap.org/data/2.5/weather?q=Zilina&appid=40b476b839899e1f0d9cab8f04a2c69e&units=metric&lang=en";
  const url = openWeatherPage + "?q=" + city + "&lang=" + language + "&units=" + unit + "&appid=" + apiKey;

  https.get(url, function (response) {
    console.log("StatusCode " + response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);

      const temperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p><h2> Weather description: " + weatherDescription + "</h2></p>");
      res.write("<p><h1>Current temperature in " + city + " is " + temperature + " degrees Celcius</h1></p>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });

  //res.send("Server is up and running"); /* only 1 SEND command is possible */
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
