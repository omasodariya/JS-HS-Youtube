const coding = ['js', 'py', 'rb', 'java', 'c', 'php'];

// const values = coding.forEach((item)=>{
//   // console.log(item); // Output each element in the array
//   return item;
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const giveNum=myNums.filter((num)=>num>4);

// const giveNum = myNums.filter((num) => { 
//   return num > 4 
// });

// const giveNum = []

// myNums.forEach((num)=>{
//   if(num>4)
//     giveNum.push(num);
// })

// console.log(giveNum); // Output: [5, 6, 7, 8, 9, 10]

const books = [
  { title: 'Book One', genre: 'Fiction', published: 2020, edition: 1 },
  { title: 'Book Two', genre: 'Non-Fiction', published: 2018, edition: 2 },
  { title: 'Book Three', genre: 'Fiction', published: 2021, edition: 1 },
  { title: 'Book Four', genre: 'Science', published: 2019, edition: 3 },
  { title: 'Book Five', genre: 'Fiction', published: 2022, edition: 1 },
  { title: 'Book Six', genre: 'Non-Fiction', published: 2023, edition: 2 },
  { title: 'Book Seven', genre: 'Science', published: 2021, edition: 1 },
  { title: 'Book Eight', genre: 'Fiction', published: 2020, edition: 2 },
];

// const userBooks = [] 

// books.forEach((item)=>{
//   userBooks.push(item.title);
// })

// const userBooks = books.map((item) => {
//   return item.title;
// });

// const userBooks = books.map(item => item.title);

// const userBooks = books.filter((item)=>{
//   return item.genre=="Science"
// })

const userBooks = books.filter((item)=>{
  return item.published>=2020 && item.genre=="Fiction";
})

console.log(userBooks);

