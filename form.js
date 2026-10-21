// //  Form validation means checking whether the information entered by the user is acceptable.
// // •	Is the name provided?
// // •	Is the email provided?
// // •	Is the password long enough?
// // •	Is the age valid?
// // •	Is the user entering the correct format?
// //getting input values from the form and removing whitespace using trim() method.
// const form = document.getElementById("myForm");
// form.noValidate = true;

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // event.preventDefault() stops the browser's default form submission behaviour so that JavaScript can process the form first.

//   const nameInput = document.getElementById("name").value.trim();
//   console.log(nameInput);
//   const emailInput = document.getElementById("email").value.trim();
//   console.log(emailInput);
//   const ageInput = document.getElementById("age").value.trim();
//   console.log(ageInput);
//   const password = document.getElementById("password").value.trim();
//   const confirmPassword = document
//     .getElementById("confirmPassword")
//     .value.trim();

//   const nameError = document.getElementById("nameError");
//   const emailError = document.getElementById("emailError");
//   const ageError = document.getElementById("ageError");
//   const passwordError = document.getElementById("passwordError");
//   const confirmPasswordError = document.getElementById("confirmPasswordError");

//   const success = document.getElementById("success")

//   //validation
//   //name validation
//   if (nameInput === "") {
//     nameError.textContent = "Name is required";
//     setTimeout(() => {
//       nameError.textContent = "";
//     }, 2000);
//   }

//   if (nameInput.length < 3) {
//     nameError.textContent = "Name must be more than 3 characters";
//     setTimeout(() => {
//       nameError.textContent = "";
//     }, 2000);
//   }

//   //email validation
//   if (emailInput === "") {
//     emailError.textContent = "email is required";
//     setTimeout(() => {
//       emailError.textContent = "";
//     }, 2000);
//   }

//   if (!emailInput.includes("@") || !emailInput.includes(".")) {
//     emailError.textContent = "Pls enter a valid email";
//     setTimeout(() => {
//       emailError.textContent = "";
//     }, 2000);
//   }

//   if (ageInput === "") {
//     ageError.textContent = "Pls enter your age";
//     setTimeout(() => {
//       ageError.textContent = "";
//     }, 2000);
//   } else if (ageInput < 18) {
//     ageError.textContent = "User must be up to 18 yo";
//     setTimeout(() => {
//       ageError.textContent = "";
//     }, 2000);
// }

// if (!password) {
//     passwordError.textContent = "Pls enter your password";
//     setTimeout(() => {
//       passwordError.textContent = "";
//     }, 2000);
// } else if( password.length < 6) {
//     passwordError.textContent = "password must be more than 6 characters"
//      setTimeout(() => {
//        passwordError.textContent = "";
//      }, 2000);
// } 

// if (password !== confirmPassword) {
//      confirmPasswordError.textContent = "passwords do not match";
//      setTimeout(() => {
//        confirmPasswordError.textContent = "";
//      }, 2000);
// }

// success.textContent = "Form submitted sucessfully"
//  setTimeout(() => {
//    success.textContent = "";
// }, 2000);


// form.reset()

// });


const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const ageError = document.getElementById("ageError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const success = document.getElementById("success");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  ageError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  success.textContent = "";

  let valid = true;

  // Regex patterns
  const namePattern = /^[A-Za-z ]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const agePattern = /^[0-9]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else if (!namePattern.test(name)) {
    nameError.textContent = "Name can only contain letters";
    valid = false;
  }

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // Age validation
  if (age === "") {
    ageError.textContent = "Age is required";
    valid = false;
  } else if (!agePattern.test(age)) {
    ageError.textContent = "Age must contain numbers only";
    valid = false;
  }else if(age < 18){
     ageError.textContent = "USer must be above 18yo";
  }

  // Password validation
  if (password === "") {
    passwordError.textContent = "Password is required";
    valid = false;
  } else if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must be at least 6 characters and contain a letter and a number";
    valid = false;
  }

  // Confirm password
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Please confirm your password";
    valid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    valid = false;
  }

  // Success
  if (valid) {
    success.textContent = "Registration successful!";
    form.reset();
  }
});


