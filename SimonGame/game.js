//Simon Game - Final Solution (by Angela)
//SG1: HTML - Step 1: Add links to jQuery and JS
//SG2: JS -  Step 2:  Create A New Pattern
//SG3: JS -  Step 3:  Show the Sequence to the User with Animations and Sounds
//SG4: JS -  Step 4:  Check Which Button is Pressed
//SG5: JS -  Step 5:  Add Sounds to Button Clicks
//SG6: JS -  Step 6:  Add Animations to User Clicks
//SG7: JS -  Step 7:  Start the Game
//SG8: JS -  Step 8:  Check the User's Answer Against the Game Sequence
//SG9: JS -  Step 9:  Game Over
//SG10: JS - Step 10: Restart the Game

 //27.05.2020 ToDo:
  //How to distiguish if the app is launched from:
  // PC or MobilePhone


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

//Start Game on PC via any key on keyboard
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//Start Game on MobilePhone via Start button
$(".startButton").click(function() {
  if (!started) {
    //Hide Start button
    $(".startButton").hide();

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;

  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
    //  $("#level-title").text("Game Over, Press Any Key to Restart");
      $("#level-title").text("Game Over, Press Start to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
 
   //Show Start button
   $(".startButton").show();
}
