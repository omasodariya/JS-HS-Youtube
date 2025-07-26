function sayMyName() {
  console.log("O");
  console.log("M");
}

// sayMyName(); // Call the function to output "O" and "M"

function addition(a, b) {
  // console.log(a + b); 
  return a + b; // Return the sum of a and b
}

const result=addition(5, null); // Call the function with arguments 5 and 10 to output 15

// console.log(result); // Output the result of the addition function, which is undefined since it does not return a value


function loginUserMessage(userName="Guest"){
  if(!userName){
    return "Please enter your name"; // Return a message if userName is not provided
  }
  return `Welcome ${userName}`; // Return a welcome message with the user's name
}

console.log(loginUserMessage());


function calculateSum(val1,val2,...numbers) { //Rest parameter to accept any number of arguments
  return numbers
  // return numbers.reduce((acc, curr) => acc + curr, 0); // Use reduce to calculate the sum of all numbers
}

// const sumResult = calculateSum(1, 2, 3, 4, 5); 
// console.log(sumResult); // Output the result of the sum calculation, which is 15

const user = {
  name: "Om Patel",
  price: 100,
};


function handleObject(anyObject){
  console.log(`Name: ${anyObject.name}, Price: ${anyObject.price}`); // Output the name and price properties of the object
}

// handleObject({name: "om",price:199}); // Call the function with the user object to output its properties

const myNewArray = [1, 2, 3, 4, 5];

function handleArray(array) {
  return array[1];
}

console.log(handleArray([200,12,232,32])); // Call the function with the array to output the second element

