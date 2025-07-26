// var c=300

let a=300

if (true) {
  let a = 10;
  const b = 20;
  // c = 30;
  // console.log(a);
  
}

// for (let i = 0; i < 5; i++) {
//   let b = i * 2;
//   console.log(b); 
// }

// console.log(a); 
// console.log(b); 
// console.log(c); // Output: 30




function one(){
  const username="Om";

  function two(){
    const website="youtube";
    // console.log(username); // Output: Om  
  }

  // console.log(website); 

  two();
}

one();

if(true){
  const username="Om";
  if(username){
    const website=" youtube";
    // console.log(username + website); // Output: Om
  }
  // console.log(website);
  
}

// console.log(username);


// +++++++++++++++++++++ Interesting Scopes +++++++++++++++++++++

// console.log(addOne(5)); // Call the function with 5 as an argument

function addOne(num) {
  return num + 1; // Return the number incremented by one
}


// addTwo(5); // Call the function with 5 as an argument
const addTwo = function(num) {
  return num + 2; // Return the number incremented by two
}
