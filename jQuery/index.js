//<h1> Add Event Listener for Mouse Click
/* $("h1").click(function() {
    $("h1").css("color", "purple");
}); */

//JS: Change Color of <h1> by Click of whichever of 5 buttons
// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     }) 
// }

//jQuery: Change Color of <h1> by Click of whichever of 5 buttons
// $("button").click(function() {
//     $("h1").css("color", "purple");
// })

//JS: Key pressed
// document.querySelector("input").addEventListener("keydown", function(event) {
//     console.log(event.key);
// });

//jQuery: Key pressed
$("input").keydown(function(event) {
    console.log(event.key);
});
