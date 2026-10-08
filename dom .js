// DOM stands for Document Object Model. The DOM is a representation of an HTML document that allows JavaScript to access and manipulate the elements on a webpage.

// JavaScript can use the DOM to find HTML elements, change their text, change their appearance, add or remove elements, and respond to user actions.

// Simple definition: The DOM allows JavaScript to communicate with and change HTML elements on a webpage.


//DOM selectors

// getElementById() - selects an element by its ID
const my_cont = document.getElementById("my-div")
my_cont.textContent = "Hello, my name is Lincoln"

//getElementByClassName()
const my_classdiv = document.getElementsByClassName("text")
console.log(my_classdiv);


// getElementsByTagName()
const my_tag = document.getElementsByTagName("h1")
my_tag[1].textContent = "Hey"

//querySelector() - selects the first element that matches a CSS selector.
document.querySelector(".text").textContent = "Change"

//querySelectorAll()
const qsl = document.querySelectorAll(".text")

console.log(qsl)
