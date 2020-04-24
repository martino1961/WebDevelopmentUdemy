//JS 129 Leap Year Calculation
var year = prompt("Year: ");

if (year <= 1581) {
    alert("Year " + year + " must be greater than 1581!!!");
} 
else { 
if (! (isCleanlyDivisible(year, 4))) {
    // Not Dividible by 4 --> Not Leap
   isNotLeapYear(year);
} else if (! (isCleanlyDivisible(year, 100))) {
    // Dividible by 4 and Not Dividible by 100 --> Leap
   isLeapYear(year);  
} else if ((isCleanlyDivisible(year, 400))) {
    // Dividible by 4 and Dividible by 100 and Dividible by 400 --> Leap
   isLeapYear(year);  
} else {
   // Dividible by 4 and Dividible by 100 and NOT Dividible by 400 --> Not Leap
   isNotLeapYear(year);
}
}

function isCleanlyDivisible(number, divBy) {
    if((number % divBy ) === 0) {
        return(true);
    } else {
        return(false);
    }  
}

function isLeapYear(year) {
    alert("Year: " + year + " is Leap year.");
}

function isNotLeapYear(year) {
    alert("Year: " + year + " is NOT Leap year.");
}

function isLeapYearByAngela(year) {

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
          return("Leap year.");
      } else {
          return("Not Leap year.");
      }
    } else {
        return("Leap year.");
    }
  } else {
      return("Not Leap year.")
  }
}