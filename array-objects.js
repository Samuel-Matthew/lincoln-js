// What is an array?
// An array is a data structure used to store multiple values in a single variable. The values are arranged in an ordered list.

let students = ["John", "Jane", "Jim", "Jill", "Simeon", "Lincoln"];

// console.log(students.length)
// console.log(students[4])

let fruits = ["Apple", "Banana", "Cherry", "Date"];
// console.log(fruits[3]);


let prices = [10.99, 5.49, 20, 7.99];
// console.log(prices[1]);

//What is an object?
// An object is a data structure used to store related information as key-value pairs.

let student = {
    name: "Simeon",
    age: 40,
    class: "Javascript"
}

// console.log(student.class)


//objects in arrays

let stud = [
  { name: "Simeon", age: 40, class: "Javascript" },
  { name: "Lincoln", age: 49, class: "Javascript" },
];

//destructuring
// console.log(stud[1].age)


let school = {
    name: "Mita School",
    courses: ["web dev", "data science", "dig mart"],
    address: {
        number: 15,
        street: "Ekpenyong Str",
        city: "Uyo",
        state: "Akwa Ibom"
    }
}

console.log(school.address.street)

// create an array of 4 products 
// use key-value pairs to store more information on each product (price, name, description)