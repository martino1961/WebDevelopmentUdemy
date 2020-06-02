/* Server Template */
/*
  A) Pre steps - GitBash:
    A1) mkdir app_dir
    A2) cd app_dir
    A3) touch ServerTemplate.js
    A4) npm init
    A5) npm install express
  B) Code ServerTemplate.js
  C) Check the server is running:
    C1) GitBash:
        nodemon ServerTemplate.js --> Server is running on port 3000.
    C2) browser:
        localhost:3000 --> Server is up and running
*/

const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Server is up and running");
})



app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})