// Event Listeners
// An event is an action that happens on a webpage. Examples include clicking a button, typing into an input, submitting a form, moving the mouse, pressing a keyboard key, and loading a page.

//addEventListener() - attaches an event handler to an element without overwriting existing event handlers.

const button = document.getElementById("btn");

// button.addEventListener("click", handleClick);

function handleClick() {
  console.log("Button clicked");
}

//textContent - allows us to change the text content of an element.
// const my_div = document.getElementById("my-div");
// my_div.textContent = "Hello, my name is Lincoln";

//innerHTML - allows us to change the HTML content of an element.
// const my_div2 = document.getElementById("my-div2");
// my_div2.innerHTML = "<h1>Hello, my name is Lincoln</h1>";

// channging html attributes using setAttribute() - allows us to change the value of an attribute of an element.
button.addEventListener("click", changeImage);

function changeImage() {
  const my_img = document.getElementById("my-img");
  my_img.setAttribute("src", "backend.jpg");
  my_img.setAttribute("alt", "backend image");
  my_img.style.width = "300px";
  my_img.style.height = "300px";

  my_img.classList.add("img-class");
  my_img.classList.remove("img-class");
  
  console.log("Button clicked");
}

const mybtn = document.getElementById("mybtn");
mybtn.addEventListener("click", function () {
  const link = document.querySelector("a");
  link.setAttribute("href", "https://x.com");
  console.log("clicked");
});
