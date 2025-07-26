const myNums = [1, 2, 3, 4, 5];

// const myTotal=myNums.reduce(function (acc,currval){
//   console.log(`Accumulator: ${acc}, Current Value: ${currval}`); // Log the accumulator and current value
//   return acc + currval;
// },0)

const myTotal=myNums.reduce((acc,currval)=>acc + currval,0)

console.log(myTotal); // Output: 15

const shoppingCart = [
  { item: 'Apple', price: 1.2, quantity: 3 },
  { item: 'Banana', price: 0.5, quantity: 5 },
  { item: 'Orange', price: 0.8, quantity: 2 },
  { item: 'Mango', price: 1.5, quantity: 4 },
  { item: 'Grapes', price: 2.0, quantity: 1 },
  { item: 'Pineapple', price: 3.0, quantity: 2 },
];

// const totalCost = shoppingCart.map((item)=> item.price * item.quantity).reduce((acc,currVal)=>acc+currVal);
const totalCost = shoppingCart.reduce((acc,item)=> acc + (item.price * item.quantity), 0);

console.log(totalCost);
