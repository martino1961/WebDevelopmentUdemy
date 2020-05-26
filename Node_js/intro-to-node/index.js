//Section 18: Node.js: 237. The NPM Package Manager and Installing
// External Node Modules
// npm - Node Package Manager - www.npmjs.com

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperHeroName = superheroes.random();
var mySuperVillainsName = supervillains.random();

console.log("Super Hero Name: " + mySuperHeroName);
console.log("Super Vill Name: " + mySuperVillainsName);