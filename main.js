console.log("hello");

var age = prompt("What is Your Ages?");

age = parseInt(age);

if (age >= 19) {
  alert("You are old enough to drink!");
} else if (age >= 18) {
  alert("You are old enough to vote!");
} else if ( age >= 16) {
  alert("You are old enough to drive!");
} else {
  alert("Sorry! Youare so yound!");
}
