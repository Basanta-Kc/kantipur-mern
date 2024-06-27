// const obj = {
//     key : value
// }

//1. objects are passed by reference
//2. even if the objects are defined by using const, we can
// change the value of the properties inside it, but we cannot
// reassign to new object or other value
//3.Two object with same property and value are not equal
console.log("Outside:");
console.log(this);
const person = {
  name: "basanta",
  age: 10,
  school: "nbhs",
  salary: 4000,
  college: "asian",
  fruits: {
    apple: 1,
    mango: 2,
    waterMelon: 3,
  },
  subjects: ["c", "dsa"],
  greetArrow: () => {
    console.log("Arrow Func");
    console.log(this); // Window
  },
  greet: function () {
    console.log(this); // Person
    const anotherArrow = () => {
      console.log("Another Arrow Inside Normal Func");
      console.log(this); // Person
    };
    anotherArrow();
    console.log(this);
  },
};
person.greet();
person.greetArrow();

for (const key in person) {
  console.log(key, person[key]);
}

// const student = {}
// const key = prompt("enter student key") // exit
// const value = prompt("enter student value")

// console.log(person.fruits.waterMelon);
// console.log(person.fruits.banana);
// console.log(person.vegetable?.totmato ?? "no tomato");
// console.log(person.subjects);

// const anotherPerson = person;

// anotherPerson.college = "asian";

// console.log(person === anotherPerson);

// // const num = 2;
// // const anotherNum = 2

// // console.log(num === anotherNum)

// // const person2 = {
// //   name: "basanta",
// //   age: 10,
// // };

// // console.log(person  === person2)

// person.name = "basnata kc";
// person.school = "nbhs";
// delete person.age;
// const string = "name";
// person[string];
// console.log(person);

// const personKey = prompt("what data you want to see?");
// const result = person[personKey] ?? "Invalid Key";
// console.log(result);

// // function test(p){
// //     p.age = "test"
// //     p.school = 'bdfadfafd'
// // }

// // test(person)

// // console.log(person)
