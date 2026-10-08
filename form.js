//getting input values from the form and removing whitespace using trim() method.
const form = document.getElementById("myForm");
 form.addEventListener("submit", function (event) {
   event.preventDefault(); // event.preventDefault() stops the browser's default form submission behaviour so that JavaScript can process the form first.

   const nameInput = document.getElementById("name").value.trim();
   console.log(nameInput);
   const emailInput = document.getElementById("email").value.trim();
   console.log(emailInput);
 } )  