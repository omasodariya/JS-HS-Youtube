// for

// for (let i = 0; i < 10; i++) {
//   console.log(i+1); 
// }

// for (let i = 0; i <10; i++) {
//   //table from 1 to 10
//   console.log(`Table of ${i+1}`);
//   for (let j = 0; j <10; j++) {
//     console.log(`${i+1} * ${j+1} = ${(i+1)*(j+1)}`); // Output the multiplication table
//   }
//   console.log("----------");
// }

let myArray = ["flash", "chai", "code", "js"];
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(`Element at index ${index} is ${element}`); // Output each element of the array with its index
  
// }

myArray.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`); // Output each element of the array with its index
});

// break and continue


// for (let i = 0; i < 10; i++) { 
//   if (i === 5) {
//     console.log("Breaking at 5");
//     break; // Exit the loop when i is 5
//   }
//   console.log(i); // Output the value of i
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log("Skipping 5");
//     continue; // Skip the iteration when i is 5
//   }
//   console.log(i); // Output the value of i
// }