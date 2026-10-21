// Array Methods in JavaScript

// push() - Adds one or more elements to the end of an array and returns the new length of the array.

const students = ["Lincoln", "Simeon", "John", "Jane", "Jim", "Jill"];

students.push("Favour", "X lover")

//pop() - removes the last item from an array
students.pop()

//unshift() - Adds items to the beginning of an array
students.unshift("X lover", "Samuel");

//shift() - removes the first item from an array
students.shift()

// includes() - checks if an array contains a certain element, returns true or false
// console.log(students.includes("Lincoln"))


// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
// console.log(students.indexOf("Samuel"))


// join() - combines array elements into one string
// console.log(students.join("\n"))

//slice()-Copies part of an array without changing the original.
const new_students = students.slice(2, 5)
// console.log(new_students)


//splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
students.splice(4,2)

//map() - creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];

const addNum = numbers.map(function(num){
    return num + 2
})

const new_students2 = students.map((student) => {
  return student + " is a student";
});
// const new_students2 = students.map((student) => {
//   return student.toUpperCase();
// });


//filter() - creates a new array with all elements that pass the test implemented by the provided function.
const ages = [10, 20, 30, 40, 50];

const adults = ages.filter(function(age){
    return age >= 18;
})

//forEach() - executes a provided function once for each array element.
students.forEach(function(student){
    console.log(student)
})

// console.log(new_students2)
// console.log(adults)
// console.log(students)