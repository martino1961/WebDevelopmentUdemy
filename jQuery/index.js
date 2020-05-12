
//$("h1").css("color", "red");  //Set <h1> css color to red
/* method .css( "oneParameter" ) - Get value of "oneParameter" */
//console.log($("h1").css("font-size"));
/* method .css( "oneParameter", "secondParameter" ) - Set value "secondParameter" of "oneParameter" */
//$("h1").css("font-size", "5rem");

/* Add Class "big-title to <h1>*/
//$("h1").addClass("big-title");

/* Adding more Classes: separate classes with ' ' */
$("h1").addClass("big-title margin-50");

//Check if Element has Class
//console.log($("h1").hasClass("margin-50"));  //.hasClass retruns true/false
$("h1").text("Bye!!!");

//document.querySelectorAll("button");
//Set text "Don't Click Me!"  to all buttons
$("button").text("Don't Click Me!");   

//document.querySelector("button").innerHTML --> $("button").html
$("button").html("<em>Hey</em>");

//Get Attribute value of <img>
console.log($("img").attr("src"));

//Set Attribute value
$("a").attr("href", "https://www.yahoo.com");
