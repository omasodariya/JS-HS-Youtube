// if

// const isuserLoggedIn = true;

// if (isuserLoggedIn) {
//   console.log("User is logged in");
// }

// const temperature = 25;

// if(temperature > 25) {
//   console.log("It's a hot day");
// }else{
//   console.log("It's a cool day");
// }
// console.log("End of the program"); // This will always execute


// < , > , <=, >=, ==, ===, !=, !==

// const score=200

// if(score > 100) {
//   const power="fly";
//   console.log(`User has the power to ${power}`); // Output: User has the power to fly
// }

// console.log(`User has the power to ${power}`); // Output: User has the power to fly

// const balance = 1000;

// if(balance > 500)
//   console.log("Less than 500"); // Output: Less than 500
// else if(balance < 750)
//   console.log("Between 500 and 750"); // Output: Between 500 and 750
// else if(balance < 1000) 
//   console.log("Between 750 and 1000"); // Output: Between 750 and 1000
// else 
//   console.log("Greater than 1000"); // Output: Greater than 1000


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard ) {
  console.log("User can make a purchase"); // Output: User can make a purchase
}

if(loggedInFromGoogle || loggedInFromEmail) {
  console.log("User can login"); // Output: User can login
}



