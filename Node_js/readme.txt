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
A5) npm install express --> see package.json "dependencies" section (tiez funguje: npm i express)
B) in server.js:
B1) const express = require("express");  //include express package
B2) const app = express();  //express app
B3) app.get("/", function(request, response){
             respnd.send("Hello");
    });  //"/" - slash represents homepage, app.get() - catch HTTP GET request
B4) app.listen(); //add listener on port 3000 (3000 is for HTTP requests)

nodemon - utility that will monitor for any changes in your source and automatically restart your server
https://nodemon.io/
Install:
A) in CmdLine (GitBash) - in whichever directory:
A1) npm install -g nodemon
A2) cd to dir, where is server.js - e.g. cd my-server-express
A3) nodemon server.js
if (A1) doesn't work:
B1) make sure you are logged in to your PC with admin privilleges
B2) sudo npm install -g nodemon --> sudo will ask for your Windows password

HTTP Status codes:
https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
1xx Informational response
2xx Success
3xx Redirection
4xx Client errors
5xx Server errors

How to parse HTML body Request - body-parser:
1) npm install body-parser --> see package.json "dependencies" section
2) in JS file:
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//Parsing HTML Request
//bodyParser.urlencoded --> for <form>
//extended: true --> allows Nested Object
app.use(bodyParser.urlencoded({extended: true}));

//POST "/" - Catch POST to route "/"
app.post("/", function(req, res){
    console.log(req.body);
    console.log("Number 1: " + req.body.num1);
    console.log("Number 2: " + req.body.num2);
    
    res.send("Thanks for that");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

Deploying Static WebSites - GitHub
Deploying Dynamic WebSites (Client + Server) - heroku
1) install heroku - www.heroku.com --> Docu --> Inntroduction --> Set-up
2) gitBash: heroku login --> heroku: Press any key to open up the browser to login or q to exit --> browser is opened You are logged in --> You can close the browser 
3) heroku version --> heroku/7.42.1 win32-x64 node-v12.16.2
4) check that node.js version is > 8:
  gitBash: node --version --> v12.16.3
5) check npm is installed - we will check the npm version - if it gives version, then it is installed
  git Bash: npm --version --> 6.14.4
6) git --version --> git version 2.16.2.windows.1
7) on www.heroku Getting started site Set-Up: click on button "I have installed the Heroku on CLI" --> navigates me to the next step "Prepare the app"
8) change the port 3000 in listener in app.js from 3000 to "heroku or 3000" (process.env.PORT || 3000)
9) define a Procfile <-- how to launch our app: 
  web: node index.js --> in our case: 
  9a) gitBash: 
    cd to_ourAppDirectory
    touch Procfile <-- Caution: filename without any extension!!! e.g. !!! NO .txt !!!
  9b) visualCodeStudio - open file Procfile and write:
    web: node app.js  
10) save our work to git:
  10a) gitBash:
    git status
    git add --all
    git commit -m "Commit message"
11) on www.heroku Getting started site Prepare the app: Click on button "I cloned the app source code" --> navigates to the next step "Deploy the app"
12) Deploy the app:
    










 

