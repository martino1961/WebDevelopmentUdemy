//Simon Game - shortcut SG
//SG1: HTML - add links to jQuery and JS
//SG2: JS - Create A New Pattern
//SG3: JS - Step 3 - Show the Sequence to the User with Animations and Sounds
//SG4: JS - Step 4 - Check Which Button is Pressed
//SG5: JS - Step 5 - Add Sounds to Button Clicks
//SG6: JS - Step 6 - Add Animations to User Clicks
//SG7: JS - Step 7 - Start the Game
//SG8: JS - Step 8 - Check the User's Answer Against the Game Sequence
//SG9: JS - Step 9 - Game Over


//SG Step 2 (SG2) - Create a New patern
//SG2.3 New array buttonColours
var buttonColours = ["red", "blue", "green", "yellow"];
//SG2.5. New array gamePattern
var gamePattern = [];
//SG4.3 Create a new empty array with the name userClickedPattern
var userClickedPattern = [];

//SG7.1 - To check whether the game was started or not
var started = false;
//SG7.2 - Levels of the game --> start at 0
var level = 0;

 //SG7.3 Use jQuery to detect when a keyboard key has been pressed, 
 //      when that happens for the first time, call nextSequence().
 //      You'll need a way to keep track of whether if the game has started 
 //      or not, so you only call nextSequence() on the first keypress.
 $(document).keypress(function() {
    if (!started) {
        //the <h1> title starts out saying "Press a key to start"
        //when the game has sterted --> change the title to say "Level 0" 
        //HTML: <h1 id="level-title">Press A Key to Start</h1>
        //--> select <h1> via id "level-title"
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

//SG4.1 Use jQuery to detect when any of the buttons are clicked and 
//      trigger a handler function
$(".btn").click(function() {
    //SG4.2 Id of clicked button
      var userChosenColour = $(this).attr("id");
    
    //SG4.4 Add the contents of userChosenColour to the end of userClickedPattern[]  
    userClickedPattern.push(userChosenColour);
    
    //console.log(userClickedPattern);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
     
    //SG8.2 Call checkAnswer() after a user has clicked and chosen their answer, 
    //      passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1);

    });

 //SG8.1 New function checkAnswer()
 function checkAnswer(currentLevel) {
    //check if the most recent user answer is the same as the game pattern
    //SG8.3 
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        //SG8.4 If  the user got the most recent answer right in step 3, 
        //      then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {
            //SG8.5 Call nextSequence() after a 1000 msec delay
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        //SG9.1 Play wrong.mp3 if the user got one of the answers wrong
        playSound("wrong");
        //SG9.2 Apply class "game-over" to the body and then remove it after 200 msec
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        //SG9.3 Change <h1> to say "Game Over, Press Any Key to Restart" 
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
 }
   
//SG2.1 Create a new function nextSequence()
function nextSequence() {
  //SG8.6 Once nextSequence() is triggered, 
  //      reset the userClickedPattern to an empty array ready for the next level.  
  userClickedPattern = [];

  //SG7.4 Inside nextSequence(), 
  //      increase the level by 1 every time nextSequence() is called.
  level++;

  //SG7.5 Inside nextSequence(), 
  //      update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

  //SG2.2 Random numbers: 0 - 3
  var randomNumber = Math.floor(Math.random() * 4);
  //SG2.4 Save a random chosen color
  var randomChosenColour = buttonColours[randomNumber];
  //SG2.6 Add the new randomChosenColour to the end of the gamePattern[]
  gamePattern.push(randomChosenColour);

  //SG3.1 Use jQuery to select the button with the same id as the randomChosenColour
  //SG3.2 Animate the selected button with flash (see Google/StackOverlow)
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  //SG3.3 Play sound of the selected button

  //SG5.4 Refactor Play Audio --> via function
  playSound(randomChosenColour);

}

 //SG5.1, SG5.2, SG5.3 New function playSound(name)  
 function playSound(name) {
     var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
 } 

 //SG6.1 Create new function animatePress()
 function animatePress(currentColor) {
     //SG6.2 Add "pressed" class to the clicked button
     //Clicked button is selected via id 
     //  --> see HTML - e.g. <div type="button" id="green" class="btn green">
     $("#" + currentColor).addClass("pressed");

     //SG6.3 Remove "pressed" class after 100 msec (see Google/Stackoverflow)
     setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
     }, 100);
 }

 


