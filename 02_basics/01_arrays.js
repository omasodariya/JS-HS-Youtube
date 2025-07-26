// Array

const myArray = [20,12, 32, 33, 54, 15];
const myHeros = ["Hulk", "Thor", "Ironman", "Spiderman"];

const myArray2 = new Array(1,2,3,4,5); // Creates an array with 6 empty slots

// Array is shallow copied
console.log(myArray); // Output the array
console.log(myArray[0]); // Output the array

// Array Methods
// console.log(myArray.length); // Get the length of the array
// myArray.push(6) // Add an element to the end of the array
// myArray.pop() // Remove the last element from the array


// myArray.unshift(10) // Add an element to the beginning of the array
// myArray.shift() // Remove the first element from the array

// console.log(myArray); 

// console.log(myArray.includes(20)); // Check if the array includes the value 20
// console.log(myArray.indexOf(19)); // Get the index of the value 19 in 

// const newArray = myArray.join(); // Join the array elements into a string with " - " as separator
// console.log(myArray); // Output the original array
// console.log(typeof newArray); // Output the joined string

// Slice and Splice
const slicedArray = myArray.slice(1, 3); // Get a slice of the array from index 1 to 3 (exclusive)
console.log(slicedArray); // Output the sliced array   

myArray.splice(1, 2, 100, 200); // Remove 2 elements starting from index 1 and add 100 and 200
console.log(myArray); // Output the modified array

myArray.reverse(); // Reverse the order of the array elements
console.log(myArray); // Output the reversed array

myArray.sort(); // Sort the array elements in ascending order
console.log(myArray); // Output the sorted array

myArray.sort((a, b) => a - b); // Sort the array elements in ascending order numerically
console.log(myArray); // Output the numerically sorted array

myArray.sort((a, b) => b - a); // Sort the array elements in descending order numerically
console.log(myArray); // Output the numerically sorted array in descending order

myArray.fill(100); // Fill the entire array with the value 100
console.log(myArray); // Output the filled array