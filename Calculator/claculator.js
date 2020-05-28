//Section 19: 246. Calculator app

const express = require("express");
const app = express();

//GET "/" - GET Homepage (Route "/")
app.get("/", function(req, res){
    //__dirname - Current directory
    //console.log(__dirname);
    res.sendFile(__dirname + "/index.html");  
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

