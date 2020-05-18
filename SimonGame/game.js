//Simon Game - shortcut SG
//SG1: HTML - add links to jQuery and JS
//SG2: JS - Create A New Pattern
//SG3: JS - Step 3 - Show the Sequence to the User with Animations and Sounds

//SG Step 2 (SG2) - Create a New patern
//SG2.3 New array buttonColours
var buttonColours = ["red", "blue", "green", "yellow"];
//SG2.5. New array gamePattern
var gamePattern = [];

//SG2.1 Create a new function nextSequence()
function nextSequence() {

  //SG2.2 Random numbers: 0 - 3
  var randomNumber = Math.floor(Math.random() * 4);
  //SG2.4 Save a random chosen color
  var randomChosenColour = buttonColours[randomNumber];
  //SG2.6 Add the new randomChosenColour to the end of the gamePattern[]
  gamePattern.push(randomChosenColour);

}