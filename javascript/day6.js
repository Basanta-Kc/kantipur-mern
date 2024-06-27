// // const numbers = [2, 4, 10, 15];

// // let sum = 0;
// // for (const num of numbers) {
// //   sum += num;
// // }

// // console.log(sum)

// // const total = numbers.reduce((prev, curr) => {
// //     console.log({prev, curr})
// //     return prev + curr;
// // }, 0)

// // console.log(total)

// // const cart = [
// //   { name: "Laptop", price: 300 },
// //   { name: "Phone", price: 200 },
// //   { name: "Tablet", price: 150 },
// //   { name: "Monitor", price: 400 },
// // ];

// // const totalPrice = numbers.reduce((prev,curr) => {
// //     return prev + curr.price;
// // },0)

// // find the total price

// const person = {
//   name: "basanta",
//   age: 10,
//   profession: "developer",
//   education: {
//     school: "nbhs",
//     college: "asian",
//   },
// };

// const anotherPerson = {
//   ...person,
//   education: {
//     ...person.education,
//   },
// };

// console.log(anotherPerson);
// anotherPerson.name = "basanta kc";
// anotherPerson.education.school = "nature";
// console.log(person);

// // const name = person.name
// // const age = person.age
// // const personName = person.name
// // const school = person.education.school

// const {
//   name: personName,
//   age,
//   education: { school },
//   ...remainingProps
// } = person;

// console.log(personName, age, school);

// console.log(remainingProps);

// // let { name, age } = person;
// function printPersonDetails({ name, age }) {
//   // const {name, age} = person;
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// printPersonDetails(person);

const numbers = [10, 20, 30, 40, 20];
const firstNum = numbers[0];
const secondNum = numbers[1];

//    [10, 20,            30, 40, 20]
const [first, second, , ...remainingNums] = numbers;
console.log(first, second, remainingNums);

function add(a, b) {
  let a = 2,
    b = 3;
}

add(2, 3);

function test(...v) {
  console.log(v);
}

test(10, 20, 30);

const person = {
  name: "ram",
  age: 10,
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for (let [key, value] of Object.entries(person)) {
  console.log(`${key}, ${value}`);
}
