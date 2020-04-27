//JS 134 Control Statements: While Loop

/* 99 bottles of beer */
function beer(numBottles) {
    var line1 = "";
    var line2 = "";
    var line1Part1 = " of beer on the wall";
    var line1Part2 = " of beer.";
    var line2Part1 = "Take one down and pass it around, ";
    var bottles = " bottles";
    var bottle  = " bottle";
    var noMore = "no more ";

    var i = numBottles;

    while(i >= 1) {

        if (i > 2) {
          console.log(i + bottles + line1Part1 + i + bottles + line1Part2 + line2Part1 + (i - 1) + bottles + line1Part1);
        } else if (i === 2) {
          console.log(i + bottles + line1Part1 + i + bottles + line1Part2 + line2Part1 + (i - 1) + bottle + line1Part1);
        } else if (i === 1) {
          console.log(i + bottle + line1Part1 + i + bottle + line1Part2 + line2Part1 + noMore + bottles + line1Part1);
        }

        i--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + numBottles + line1Part1 + ".");
}

beer(99);

/* beer(3); 
Output:
3 bottles of beer on the wall, 3 bottles of beer. Take one down and pass it around, 2 bottles of beer on the wall. 
2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall. 
1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 3 of beer on the wall.
*/