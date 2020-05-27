//Section 19: Express.js with Node.js - 241. Creating Our First Server with Express

//Include package express
const express = require("express");
//Express app
const app = express();

//port 3000 - for HTTP request
app.listen(3000);  //launch in Cmdline: node server.js --> sever will listen --> interrupt server by Ctrl+C
