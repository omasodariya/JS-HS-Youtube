const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const res=myNums.map((num)=>num*2);

const newNums = myNums.map(num => num * 2).map(num =>{ return num%3==0 || num%5==0 ? num : null }).filter(num => num !== null);

console.log(newNums); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
