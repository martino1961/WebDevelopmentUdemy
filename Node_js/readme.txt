GitBash:

node --version --> shows the version of Node.js - should be used to check if the Node.js was successfully installed

How to run index.js directly from PC:
1) cd to_dir_where_index.js_is_located
2) node index.js

How to reach Console (as in Browser-->Development_Tools-->Console):
1) node - spusti sa "node.js" - funguje ako Console
2) vyskocenie z "node.js":
 2a) .exit alebo 
 2b) 2x Ctrl+C  --> Ctrl+C sluzi na break akehokolvek beziaceho procesu 
3) node commands:
 - arrows Up/Down - history
 - .help:
  - .break    Sometimes you get stuck, this gets you out
  - .clear    Alias for .break (clear Console)
  - .editor   Enter editor mode
  - .exit     Exit the repl
  - .help     Print this help message
  - .load     Load JS from a file into the REPL session
  - .save     Save all evaluated commands in this REPL session to a file

How to add external package to the project:
npm - Package Manager for External JS Modules
www.npmjs.com
1) cd to_dir_where_index.js_is_located
2) npm init
 2a) enter package name - name of project
 2b) all others - e.g. version - just ENTER, ENTER, ...
 2c) finally - package.json file is created with info (2a), (2b)
 3) Add external package:
  3a) find package in www.npmjs.com - e.g. superheroes
  3b) npm install superheroes --> install package superheroes 
   3b1) installs dependent packages into the folder node_modules
   3b2) writes dependences to the package.json file
  3c) in index.js:
    var superheroes = require("superheroes"); //require - includes internal/external module
    var mySuperHeroName = superheroes.random(); //call module function 
    console.log(mySuperHeroName); //display name given by module function
 4) node index.js --> run index.js 

First server - with Express
www.expressjs.com
A) in CmdLine (GitBash):
A1) mkdir my-server-express
A2) cd my-server-express
A3) touch server.js
A4) npm init
A5) npm install express
B) in server.js:
B1) const express = require("express");  //include express package
B2) const app = express();  //express app
B3) app.get("/", function(request, response){
             respnd.send("Hello");
    });  //"/" - slash represents homepage, app.get() - catch HTTP GET request
B4) app.listen(); //add listener on port 3000 (3000 is for HTTP requests)

nodemon - tility that will monitor for any changes in your source and automatically restart your server
https://nodemon.io/
Install:
A) in CmdLine (GitBash) - in whichever directory:
A1) npm install -g nodemon
A2) cd to dir, where is server.js - e.g. cd my-server-express
A3) nodemon server.js
if (A1) doesn't work:
B1) make sure you are logged in to your PC with admin privilleges
B2) sudo npm install -g nodemon --> sudo will ask for your Windows password



 

