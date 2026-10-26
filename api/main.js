// API means Application Programming Interface. An API provides a way for one software application to communicate with another.

//API Request - An API request is a message sent to an API asking it to perform an action or provide information.

//API RESPONSE

//API ENDPOINT - An endpoint is a specific URL used to access a particular resource or operation.

// www.studentstore.com/products?category=electronics

//HTTP METHODS
// GET	Get data,	Get weather information
// POST	Create/send data,	Create a new account
// PUT	Replace/update data,	Update a record
// PATCH	Partially update data, Change a user's email
// DELETE	Delete data,	Delete a product

//API QUERY PARAMETER- Query parameters allow you to send additional information in a URL

// https://api.example.com/weather?city=Abuja

//FETCH API - Fetch API is a browser feature that lets JavaScript make HTTP requests and receive responses.
//  let res = fetch("https:jsonplaceholder.typicode.com/users");

// const name = "Samuel"
// const price = "100"

let output = document.getElementById('output')

async function getUsers() {
  let response = await fetch("https:jsonplaceholder.typicode.com/users");

  let Users = await response.json();

  let table = document.createElement("table");

  let header = `
   <tr>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Website</th>
    </tr>
  `;

  table.innerHTML = header;

  Users.forEach((user) => {
    let row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>

      </tr>
    `;
    table.innerHTML += row;
  });

  output.appendChild(table);


  console.log(Users);
}

getUsers()

