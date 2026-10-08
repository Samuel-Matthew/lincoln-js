// FUNCTIONS

//A function is a re-usable block of code designed to perform a specific

function name(params) {
    //code
}

let number = 24

function greet(name){
    console.log("Hello " + name )
}


// greet("Lincoln")

// console.log(number)

function details(name, age){
 console.log("My name is " + name + ". " + "I am " + age +" years old")
}

// details("Lincoln", 40)

//return statement
// return allows us to take the result of a function and use it somewhere else.

function add(a, b, c ,d){
 return a + c
}

let result = add(20, 40, 10)

// console.log(result)

// es6 function syntax

const checkNumber = (number) => {
    if (number % 2 === 0) {
        return number + " is an Even number"
    } else {
        return number + " is an Odd number";
    }
}

let results = checkNumber(35)

// console.log(results)

function GetGrade(score){
    if (score >= 70 && score <= 100) {
        return "Your grade is A"
    } 
    else if (score >= 60 && score <= 69) {
        return "Your grade is B"
    }
    else if (score >= 50 && score <= 59) {
        return "Your grade is C"
    }
    else if (score >= 45 && score <= 49) {
        return "Your grade is D"
    }
    else if (score >= 40 && score <= 44) {
        return "Your grade is E"
    }
    else if (score >= 0 && score <= 39) {
        return "Your grade is F"
    }
    else{
        return "Enter a vaild Score"
    }
}

console.log(GetGrade(70));