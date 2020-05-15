// jQ 194: Website Animations with jQuery
//
// to run the WebSite successfully:
//   - only one block can be uncommented
//   - other blocks must be commented (otherwise only the last block is effective)

// Hide / Show selected Element
$("button").on("click", function() {
    $("h1").hide();  //to Show: .show()
});

// Toggle (Hide / Show)
$("button").on("click", function() {
    $("h1").toggle(); 
});

// Fade Out - Slowly dissappeared
$("button").on("click", function() {
    $("h1").fadeOut(); 
});

// Fade In - Slowly appeared
$("button").on("click", function() {
    $("h1").fadeIn(); 
});

// Fade Toggle
$("button").on("click", function() {
    $("h1").fadeToggle(); 
});

// SlideUp
$("button").on("click", function() {
    $("h1").slideUp(); 
});

// SlideDown
$("button").on("click", function() {
    $("h1").slideDown(); 
});

// SlideToggle
$("button").on("click", function() {
    $("h1").slideToggle(); 
});

// Animation - meth .animate() 
//  - works ONLY with Numerical Attributes
//  - e.g. .animate(color: red) - Doesn't work
$("button").on("click", function() {
   /* 
      $("h1").animate({opacity: 0.5}); //text will be 50% lighter
      $("h1").animate({margin: 20});     //Margin 20px
   */ 
      $("h1").animate({margin: "20%"});      //Margin - % must be in ""
});

// More Actions for 1 Element - Chain methods together and separate by "."
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});