//JS 127: Comparators and Equality
var myName = "Martin"
var yourName = "Zuzka";

var lovePerc = Math.floor((Math.random()*100))+1;

if (lovePerc === 100) {
  alert("Love score between " + myName + " and " + yourName + " is " + lovePerc + " % Perfect!!!");
} 
if (lovePerc > 70) {
  alert("Love score between " + myName + " and " + yourName + " is " + lovePerc + " % Not bad!!!");    
}
else {
  alert("Love score between " + myName + " and " + yourName + " is " + lovePerc + " %");
}
