//JS 132 Adding Elements to Array with While Loop

/* Implementation of FizzBuzz */
function fizzbuzz(number) {
    var output = [];
    var count = 1;
    var arrvalue = '';

   while(count <= number) {

    if ((count % 3 === 0) && (count % 5 === 0)) {
         arrvalue = "FizzBuzz";
    } else if (count % 3 === 0) {
         arrvalue = "Fizz";
    } else if (count % 5 === 0) {
         arrvalue = "Buzz";
    } else {
         arrvalue = count;
    }  

     output.push(arrvalue);

     count++;     
   } 
     
   console.log(output);
}

fizzbuzz(20);

/* Output:
(20) [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]
*/