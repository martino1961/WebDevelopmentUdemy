//Sec20: 262. The Mailchimp API - Initial Setup of Server

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();



app.listen(3000, function() {
    console.log("Server is running on the port 3000.")
})