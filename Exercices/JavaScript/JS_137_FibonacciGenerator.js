//JS 137 The Fibonacci Challenge

/* Fibonacci Generator */
function fibonacciGenerator(n) {
    var output = [];

    console.log("Martin: Fibonacci Generator for: " + n);
    for(var i = 0; i < n; i++) {
        if (i === 0) {
            output.push(0);
        } else if (i === 1) {
            output.push(1);
        } else if (i > 1) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    console.log(output);
}

fibonacciGenerator(5);

function AngelaFibonacciGenerator(n) {
    var output = [];

    console.log("Angela: Fibonacci generator for: " + n);
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    return(output);
}

AngelaFibonacciGenerator(5);

/* Output:
  Martin: Fibonacci Generator for: 5
  (5) [0, 1, 1, 2, 3]
  Angela: Fibonacci generator for: 5
  (5) [0, 1, 1, 2, 3]
*/