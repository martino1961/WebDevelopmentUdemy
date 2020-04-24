//JS 131 Collections

var guestlist = ["Angela", "Jack", "Martin", "Pam", "James", "Lara"];

var guestName = prompt("What's Your name? ");

if (guestlist.includes(guestName)) {
    alert("Welcome " + guestName);
} else {
    alert("Sorry, maybe next time... " + guestName);
}