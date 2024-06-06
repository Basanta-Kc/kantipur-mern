// function greet(name, phrase = "hello") {
//   //   phrase = phrase ?? "heloo";
//   //   console.log("hello " + name);
//   console.log(`${phrase} ${name}`);
//   return;
// }

// function add(a, b) {
//   const result = a + b;
//   return result;
// }

// const firstNum = 1;
// const test2 = firstNum;
// const secondNum = 2;
// const result = add(firstNum, secondNum); // 5;

// const test = greet("basanta"); // undefined

// let sayHello = function () {
//   console.log("Hello.");
// };

// let sayHelloAnother = sayHello;
// sayHello();
// sayHelloAnother();

// function add(a,b){
//     let a = 2;
//     let b = 3;
//     return a +b;
// }

// function highOrderFunc(callBackFunction) {
//     // let callBackFunction = sayHello;
//   callBackFunction();

//   let returnFunc = function () {
//     console.log("test");
//   };

//   return returnFunc;
// }

// const returnedFunc = highOrderFunc(sayHello);
// returnedFunc();

// let add = (a,b) => {
//     return a+b;
// }

// let add = (a,b) => a+b;

// let sayHeloo = name => {
//   console.log(` heloo ${name}`);
// };

// sayHeloo()
// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Do you agree?",
//   () => {
//     alert("You agreed.");
//   },
//   () => {
//     alert("You canceled the execution.");
//   }
// );

const person = {
  name: "basnata",
  age: 10,
  salary: 100000,
  father: {
    name: 'abc',
  }
};

delete person.age
person.name = "basanta kc";
person.address = "samakushi";
console.log(person["name"])

console.log(person.mother?.name);
