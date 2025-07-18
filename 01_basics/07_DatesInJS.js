// Dates

let myDate = new Date();
// console.log(myDate.toString()); // Current date and time in string format
// console.log(myDate.toISOString()); // Current date and time in ISO format
// console.log(myDate.toJSON()); // Current date and time in JSON format
// console.log(myDate.toLocaleString()); // Current date and time in locale-specific format
// console.log(myDate.getFullYear()); // Get the full year (e.g., 2025)
// console.log(myDate.getMonth()); // Get the month (0-11, where 0 is January)

// type of myDate is 'object'
console.log(typeof myDate); 

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,5,3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toDateString()); // Date created with specific year, month, and day
// console.log(myCreatedDate.toLocaleString()); // Date created with specific year, month, and day

let myTimestamp = Date.now(); // Get current timestamp in milliseconds since January 1, 1970
// console.log(myTimestamp); // Current timestamp in milliseconds
// console.log(myCreatedDate.getTime()); // Timestamp of the created date in milliseconds
// console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds since January 1, 1970

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // Get the current month (0-11, where 0 is January)
console.log(newDate.getDate()); // Get the current day of the month (1-31)
console.log(newDate.getDay()); // Get the current day of the week (0-6, where 0 is Sunday)
console.log(newDate.getFullYear()); // Get the current year (e.g., 202

newDate.toLocaleString('default', { 
  weekday: 'long',
  timeZone: 'UTC' 
}); // Get the full name of the current month
 