//Sec20: 264. Posting Data to Mailchimp's Servers via their API

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

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
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    console.log(firstName, lastName, email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    //convert object data to JSON string
    const jsonData = JSON.stringify(data);

    //Request to MailChimp
    //For POST (and PATCH, PUT): url = https://usX.api.mailchimp.com/3.0/lists/
    // - endpoint is "lists/" 
    // - then follows Mailchimp List Id (2daa2187b4)
    // - X in https://usX.api.mail... replace with NN in API-usNN (us10)
    // MailChimp has 20 servers (01-20) around the world
    // https://us10.api.mailchimp.com/3.0/lists/2daa2187b4
    const url = "https://us10.api.mailchimp.com/3.0/lists/2daa2187b4";

    const options = {
        method: "POST",
        //auth: "anyName:ApiKey"
        auth: "martin1:b4c51794603841570aed76876807ab7c-us10"
    };

    //send POST request to MailChimp
    const request = https.request(url, options, function(response) {
        //response from MailChimp
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    });

    //write (Sign Up) new member (firstName, lastName, email) to my MailChimp Audience list
    // (Audience list is identified by List Id 2daa2187b4)
    request.write(jsonData);
    request.end();

})



app.listen(3000, function() {
    console.log("Server is running on the port 3000.");
})

// Mailchimp API key
// b4c51794603841570aed76876807ab7c-us10

// Mailchimp List Id
// 2daa2187b4
