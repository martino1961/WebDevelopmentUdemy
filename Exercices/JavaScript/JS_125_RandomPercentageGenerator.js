//Random Generator for % (<1; 100>)
var myName = prompt("My Name: ");
var yourName = prompt("Your Name: ");

//Math.random() - gives random number in range <0; 0,99999999999999>
var lovePerc = (Math.random()*100);
// whole number (wo decimal part) --> <0; 99>
lovePerc = Math.floor(lovePerc);
// <1; 100>
lovePerc = lovePerc + 1;

//var lovePerc = Math.floor((Math.random()*100))+1;
alert("Love score between " + myName + " and " + yourName + " is " + lovePerc + " %");