// JS 132: Coding Excercise: Who's buying Lunch?
// We are going to write a function which select a random name from a list of names.
// The person selected will have to pay for everybody's food bill.
// Important: The output should be returned from the function and you do not need alert, prompt or console.log.
// The output should match the example output exactly, including capitalization and punctuation.
//
// Example Input: ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output: Michael is going to buy lunch today!

function whosPaying(names) {
       
var length = names.length;
var index = Math.floor(Math.random() * length);
var selectedName = names[index];    
    
return(selectedName + " is going to buy lunch today!");

}