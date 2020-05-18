//Simon Game - shortcut SG
//SG1: HTML - add links to jQuery and JS
//SG2: JS - Create A New Pattern
//SG3: JS - Step 3 - Show the Sequence to the User with Animations and Sounds
//SG4: JS - Step 4 - Check Which Button is Pressed
//SG5: JS - Step 5 - Add Sounds to Button Clicks
//SG6: JS - Step 6 - Add Animations to User Clicks


//SG Step 2 (SG2) - Create a New patern
//SG2.3 New array buttonColours
var buttonColours = ["red", "blue", "green", "yellow"];
//SG2.5. New array gamePattern
var gamePattern = [];
//SG4.3 Create a new empty array with the name userClickedPattern
var userClickedPattern = [];


//SG2.1 Create a new function nextSequence()
function nextSequence() {

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

//SG4.1 Use jQuery to detect when any of the buttons are clicked and 
//      trigger a handler function
$(".btn").click(function() {
    //SG4.2 Id of clicked button
      var userChosenColour = $(this).attr("id");
    
    //SG4.4 Add the contents of userChosenColour to the end of userClickedPattern[]  
    userClickedPattern.push(userChosenColour);
    
    //console.log(userClickedPattern);
    
    });

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


