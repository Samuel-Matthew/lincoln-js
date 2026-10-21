let students = JSON.parse(localStorage.getItem("store")) || [];
const savedStudents = localStorage.getItem("store");
console.log(savedStudents);

//save student
const addBtn = document.getElementById("add-student");
const output = document.getElementById("output");

addBtn.addEventListener("click", studentDB);

function studentDB() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const course = document.getElementById("course").value.trim();

  let studentDetails = {
    name: name,
    age: age,
    course: course,
  };

  if (!name || !age || !course) {
    output.innerHTML = `<p style = "color:red;">Error: All fields required</p>`;

    setTimeout(() => {
      output.innerHTML = "";
    }, 2000);

    return;
  }

  students.push(studentDetails);

  localStorage.setItem("store", JSON.stringify(students));

  output.innerHTML = `<p style = "color:green;">student sucessfully added</p>`;

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";

  setTimeout(() => {
    output.innerHTML = "";
  }, 2000);

  console.log(students);
}

//show all student
const showStudents = document.getElementById("all-students")

showStudents.addEventListener("click", displayStudents )

function displayStudents() {
  output.innerHTML = "";
  currentView = "allstudents";
  if (students.length === 0) {
    output.innerHTML = "<p>No students found.</p>";
    return;
  }

  let table = document.createElement("table");

  let header = `
   <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Course</th>
      <th>Action</th>
    </tr>
  `;

  table.innerHTML = header;

  students.forEach((student, index) => {
    let row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td><button onclick="deleteStudent(${index})">Delete</button></td>

      </tr>
    `;
    table.innerHTML += row;
  });

  output.appendChild(table);

  console.log(output);
}

//filter students name
const filterName = document.getElementById("filter-name");

filterName.addEventListener("click", filterByName);

function filterByName() {
  output.innerHTML = "";

  const studentName = students.map((student) => student.name);

  studentName.sort();

  output.innerHTML = `<h3>Student Names</h3>
  <ol>${studentName.map((name) => `<li>${name}</li>`).join("")}
  </ol>
  `;
  // console.log(studentName)
}

//FILTER BY COURSE
const filterCourseBtn = document.getElementById("filter-course");

filterCourseBtn.addEventListener("click", FilterByCourse);

function FilterByCourse() {
  output.innerHTML = "";

  currentView = "filteredStudents";
  const getCourse = document.getElementById("get-course").value.trim();

  const filterCourse = students.filter(
    (student) =>
      student.course.toLowerCase().trim() === getCourse.toLowerCase(),
  );

  if (filterCourse.length === 0) {
    output.innerHTML = "<p>No students found.</p>";
    return;
  }

  let table = document.createElement("table");

  let header = `
   <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Course</th>
      <th>Action</th>
    </tr>
  `;

  table.innerHTML = header;

  filterCourse.forEach((student, index) => {
    index = students.indexOf(student);
    let row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td><button onclick="deleteStudent(${index})">Delete</button></td>
      </tr>
    `;
    table.innerHTML += row;
  });

  output.appendChild(table);
  console.log(filterCourse);
}

function deleteStudent(index) {
  students.splice(index, 1);

  localStorage.setItem("store", JSON.stringify(students));

  if (currentView === "allstudents") {
    displayStudents();
  } else if (currentView === "filteredStudents") {
    FilterByCourse();
  }
}


