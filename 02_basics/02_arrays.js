const marvelHeroes = ["Thor", "IronMan", "Hulk", "Spiderman", "Captain America"];
const dcHeroes = ["Batman", "Superman", "WonderWoman", "Flash", "Aquaman"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes); // Output the combined array of Marvel and DC heroes
// console.log(marvelHeroes[5][2]); // Output the combined array of Marvel and DC heroes

// const allHeroes=marvelHeroes.concat(dcHeroes); // Concatenate the two arrays
// console.log(allHeroes); // Output the original Marvel heroes array

// const allNewHeroes = [...marvelHeroes, ...dcHeroes]; // Spread operator to combine arrays
// console.log(allNewHeroes); // Output the combined array of Marvel and DC heroes

const anotherArray = [1, 2, 3, [4, 5 , 6], 7, [8, 9, [10 ,12]]]; // Nested array

// const usableArray = anotherArray.flat(Infinity); // Flatten the nested array to a single level
// console.log(usableArray); // Output the flattened array

console.log(Array.isArray("om")); 
console.log(Array.from("om")); 
console.log(Array.from({name : "om"})); // Convert an object to an array using Array.from

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)); // Create an array from individual scores

