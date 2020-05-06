//Detecting Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  //Register Anonymous function to the Button Listener
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    //What to do when mouse-click detected

    /* addressing selectedd button   */
    //console.log(this.innerHTML);
    //this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;

    //JS: Play sound
    //var audio = new Audio("sounds/tom-1.mp3");
    //audio.play();

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

//Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
 
    makeSound(event.key);

    buttonAnimation(event.key);

})


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
          case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
          case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
          case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
          case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
          case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
          case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
          default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    //HTML:  <button class="w drum">w</button>
    //in CSS is class "pressed": .pressed { box-shadow: 0 3px 4px 0 #DBEDF3; opacity: 0.5; } 
    //if we Add/Remove class "pressed" to <button> we will see Animation

    //Animation: 
    // 1) add    class "pressed"
    // 2) remove class "pressed"
    //To see the animation we must have some timeout between (1) and (2)

    //currentKey is the name of class --> querySelector(".class")
    //                                --> concatenate "." and currentKey
    var activeButton = document.querySelector("." + currentKey);

    //Animation (1): Add class "pressed":
     activeButton.classList.add("pressed");

    //Animation (2): Remove class "pressed"
    //Set Timeout and then remove "pressed" class
    setTimeout(function() {
        //Anonymous function
       activeButton.classList.remove("pressed"); 
    }, 250); //Timeout in msec

}