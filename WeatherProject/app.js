//Section 20 - API: 260. Using Express to Render a Website with Live API Data

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    //My (free of charge) CurrentWeather API Key: 40b476b839899e1f0d9cab8f04a2c69e
    const apiKey = "40b476b839899e1f0d9cab8f04a2c69e";
    const city = "Zilina";
    const openWeatherPage = "https://api.openweathermap.org/data/2.5/weather";
    const language = "en";
    //URL parameters (separeted by '&') should be in whatever order
    //const url = "https://api.openweathermap.org/data/2.5/weather?q=Zilina&appid=40b476b839899e1f0d9cab8f04a2c69e&units=metric&lang=en";
    const url = openWeatherPage + "?q=" + city + "&lang=" + language + "&units=metric" + "&appid=" + apiKey;
    
    https.get(url, function(response) {
        console.log("StatusCode " + response.statusCode);

        response.on("data", function(data) {
            //Data are in HexaDecimal format --> we have to convert them - JSON.parse()
            const weatherData = JSON.parse(data);
            //partial weather data
            const temperature = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;

            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            //Send fethed data back to the browser
            //To send more lines: N x res.write(), 1 x res.send()
            res.write("<p><h2> Weather description: " + weatherDescription + "</h2></p>");
            res.write("<p><h1>Current temperature in " + city + " is "  + temperature + " degrees Celcius</h1></p>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })
    });

    //res.send("Server is up and running"); /* only 1 SEND command is allowed*/
})



app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})