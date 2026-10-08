// if statement
let age = 30;

if (age >= 18) {
  //code
  // console.log("You are an adult")
}

// if else statement
if (age >= 18) {
  //code
  console.log("You are an adult");
} else {
  // console.log("You are a minor")
}

// nested if else statement
let score = 15;

if (score >= 70) {
  console.log("Your grade is A");
} else if (score >= 60) {
  console.log("Your grade is B");
} else if (score >= 50) {
  console.log("Your grade is C");
} else if (score >= 40) {
  console.log("Your grade is D");
} else if (score >= 0) {
  console.log("Your grade is F");
} else {
  console.log("Pls enter a valid number");
}

//ternary operator

let result = age >= 18 ? "ADult" : "Minor";
console.log(result);

// switch statement

let day = "Tuesday";

switch (day) {
  case "Monday":
    // console.log("Start of the week");
    break;

  case "Friday":
    // console.log("Almost Weekend");
    break;

  case "Saturday":
    // console.log("Weekend");
    break;

    default:
        // console.log("just another day")
}

//logical operators
// AND operator &&

let Uname = "Samuel"
let password = 1234

if (Uname === "Lincoln" && password === 1234) {
    console.log("Login successful")
}
else{
    console.log("Login failed, pls check credentails");

}

// OR operator
let hasCash = true
let hasCard = true

console.log(hasCard || hasCash)

// NOT operator

let isLoggedIn = true

console.log(!isLoggedIn)

if (!isLoggedIn) {
console.log("pls login to access admin dashboard");
    
}