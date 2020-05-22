//Section 18: Node.js: 236. How to use the Native Node Modules

//Node.js API Reference: https://nodejs.org/en/docs/

//require --> To use such a module from Node.js API we have to add a module to index.js 
//Adding 'fs' - FileSystem module
const fs = require("fs");
//Copy file1.txt to file2.txt
//If file2.txt already exists, its content is rewritten by content of file1.txt
fs.copyFileSync("file1.txt", "file2.txt");