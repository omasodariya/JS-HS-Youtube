const name="om";
const repocnt=20;

console.log(name + " has " + repocnt + " repositories.");

console.log(`Hello ${name}, you have ${repocnt} repositories.`); // Template literals , good for multi-line strings and string interpolation
 
const gameName = new  String("Cricket");

console.log(gameName[0]); // Accessing first character of the string  
console.log(gameName.length); // Length of the string
console.log(gameName.toUpperCase()); // Convert to uppercase
console.log(gameName.toLowerCase()); // Convert to lowercase
console.log(gameName.indexOf("C")); // Find index of character 'C'
console.log(gameName.lastIndexOf("C")); // Find last index of character 'C'
console.log(gameName.slice(0, 3)); // Extract substring from index 0 to 3
console.log(gameName.replace("Cricket", "Football")); // Replace 'Cricket' with 'Football'
console.log(gameName.split("i")); // Split string by character 'i'  
console.log(gameName.includes("Cricket")); // Check if 'Cricket' is present in the string
console.log(gameName.startsWith("C")); // Check if string starts with 'C'
console.log(gameName.endsWith("t")); // Check if string ends with 't'
console.log(gameName.charAt(2)); // Get character at index 2
console.log(gameName.trim()); // Remove whitespace from both ends of the string
console.log(gameName.repeat(2)); // Repeat the string twice
console.log(gameName.concat(" is a popular sport.")); // Concatenate another string
console.log(gameName.codePointAt(0)); // Get Unicode value of character at index 0
console.log(gameName.match(/Cricket/)); // Match 'Cricket' in the string
console.log(gameName.search("Cricket")); // Search for 'Cricket' in the string


