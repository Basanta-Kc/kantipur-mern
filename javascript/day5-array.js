// const arra = [1,2,3,4,4]

// const arr = new Array();
// arr[0] = 1;
// arr[1] = 2;

// console.log(arr);

// const names = ["rakesh", "basanta", "sameep", "bibesh", "basanta"];
// const numbers = [1, 2, 5, 32, 8];

// const greet = (name) => console.log(`hello, ${name}`);

// names.forEach((name, index) => {
//   console.log(`hello, ${name}`, index);
// });

// const doubleNumbers = numbers.map((number) => {
//   return number * 2;
// });

// const numbersGreatherThan30 = numbers.filter((number) => {
//   return number > 30;
// });

// const numberGreatherThan30For = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 30) numberGreatherThan30For.push(numbers[i]);
// }

// const basanta = names.find((name) => {
//   return name === "basanta";
// });

// console.log(basanta);

// for(let i)

// const doubleNumbers = []
// numbers.forEach((number, index) => {
//     doubleNumbers[index] = number * 2
// })

// console.log(doubleNumbers)

// greet(rakesh), greet('basanta), greet(samepp). greet(bibesh)

// names[0] = "rakesh pandey";

// names.push("akash");
// names.pop();

// names.unshift("shirish")

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// // for( const key in person)

// for (let name of names) {
//   console.log(name);
// }

// console.log("last", names.at(-1))

const products = [
  { name: "Laptop", price: 300 },
  { name: "Phone", price: 200 },
  { name: "Tablet", price: 150 },
  { name: "Monitor", price: 400 },
];

// [ 300, 200, 15, 400]
// [ laptop(300), phone(200), table(130), monitor(400)]

const prices = products.map((product) => {
  return product.price;
});

const productLabel = products.map((product) => {
  return `${product.name}(RS.${product.price})`;
});

console.log(prices);
console.log(productLabel);

// find out the price of phone
const priceOfPHone = products.find((product) => {
  return product.name === "Phone";
});

console.log(priceOfPHone);

const productsHigherThan190 = products.filter((product) => {
  return product.price > 190;
});

console.log(productsHigherThan190);
// find the items whose price is greater than 190

// does the product includes cheap product
// product is said to be cheap if their price is lower than 200
// hints use some() method

const hasCheapProduct = products.some((product) => product.price < 200);
console.log(hasCheapProduct);

// are all tiems

const shopIsCheap = products.every((product) => product.price < 200); // false
console.log(shopIsCheap);
