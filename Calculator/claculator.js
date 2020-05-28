//Section 19: 246. Calculator Setup Challenge

const express = require("express");
const app = express();

//GET "/" - GET Homepage (Route)
app.get("/", function(req, res){
    res.send("<h2>Hello world</h2>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

