const coding = ['js', 'py', 'rb', 'java', 'c', 'php'];

coding.forEach((element, index, arr) => {
  console.log(`${index}: ${element} of the Array [${arr}]`); // Output each index and its corresponding value in the array
});

// function printElement(element, index) {
//   console.log(`${index}: ${element}`); // Output each index and its corresponding value in the array
// }

// coding.forEach(printElement); // Using a named function to iterate over the array

const myObject = [
  {
    js: 'JavaScript',
    py: 'Python',
  },
  {
    rb: 'Ruby',
    java: 'Java',
  },
  {
    c: 'C++',
    php: 'PHP',
  }
]

myObject.forEach((obj, index) => {
  console.log(`Object at index ${index}:`);
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`); // Output each key-value pair in the object
  }
});