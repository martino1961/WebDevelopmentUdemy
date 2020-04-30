/* Random number 1 - 6 */
function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

/* Get Random Dice Image*/
function diceImage(dice) {
  return("images/dice" + dice + ".png");
}

/* Set Winner/Draw Text  */
function refreshTitle(dice1, dice2){
    var title = "";
    if (dice1 > dice2) {
      title = "🚩Player 1 Wins!";
    } else if (dice2 > dice1){
      title = "Player 2 Wins!🚩";
    } else {
      title = "Draw!";
    }
    return(title);
}

/* Modify Page based on Dice values*/
function modifyBody() {
  var dice1 = randomDice();
  var dice2 = randomDice();

  // 1st Dice
  var imageDice1 = diceImage(dice1);
  //Set Dice Image of 1st Dice
  document.getElementsByClassName("img1")[0].setAttribute("src", imageDice1);

  // 2nd Dice
  var imageDice2 = diceImage(dice2);
  //Set Dice Image of 2nd Dice
  document.getElementsByClassName("img2")[0].setAttribute("src", imageDice2);

  //Refresh <h1>
  document.querySelector("h1").innerHTML = refreshTitle(dice1, dice2);
}
