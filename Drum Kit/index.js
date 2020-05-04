
/* Incorrect call of handleClick function:
  document.querySelector("button").addEventListener("click", handleClick());
  --> if the method in the EventListener has parenthesis "handleClick()"" , 
        then it will be called immediately and not wait until Event "click" happened  
*/
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked!");
}