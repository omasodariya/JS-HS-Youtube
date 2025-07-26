// for of

const numbers = [1, 2, 3, 4, 5];

// for(const number of numbers) {
//   console.log(number);  // Output each number in the array
// }

// const  greetings = "Hello, World!";
// for(const char of greetings) {
//   console.log(char);  // Output each character in the string
// }

// Maps

const map=new Map()

map.set("In", "India");
map.set("US", "United States");
map.set("Fr", "France");  

// console.log(map);


// for(const [key, value] of map) {
//   console.log(`${key}: ${value}`);  // Output each key-value pair in the map
// }

// Sets

// const set = new Set([1, 2, 3, 4, 5]);
// for(const value of set) {
//   console.log(value);  // Output each value in the set   
// }

const myObject = {
  game1:'NFS',
  game2:'Spiderman',
  // 'game3':'PUBG'
};

for(const [key, value] of Object.entries(myObject)) {
  console.log(`${key}: ${value}`);  // Output each key-value pair in the object
}
