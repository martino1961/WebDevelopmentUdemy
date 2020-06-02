//Section 20 - API: 259. How to Parse JSON

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    //My (free of charge) CurrentWeather API Key: 40b476b839899e1f0d9cab8f04a2c69e
    const apiKey = "40b476b839899e1f0d9cab8f04a2c69e";
    const city = "Zilina";
    const openWeatherPage = "https://api.openweathermap.org/data/2.5/weather";
    const language = "sk";
    //URL parameters (separeted by '&') should be in whichever order
    //const url = "https://api.openweathermap.org/data/2.5/weather?q=Zilina&appid=40b476b839899e1f0d9cab8f04a2c69e&units=metric&lang=sk";
    const url = openWeatherPage + "?q=" + city + "&lang=" + language + "&units=metric" + "&appid=" + apiKey;
    //console.log("URL: " + url);
    https.get(url, function(response) {
        console.log("StatusCode " + response.statusCode);

        //in "data" is response of GET request (by default the data are in JSON format)
        response.on("data", function(data) {
            //Data are in HexaDecimal format --> we have to convert them
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;

            console.log("Current temperature: " + temperature + " degrees");
            console.log("Weather description: " + weatherDescription);
        })
    });

    res.send("Server is up and running");
})



app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})