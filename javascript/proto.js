// const person = {
//   name: "basanta",
//   age: 10,
//   sayHello3() {
//     console.log("hellooo");
//   },
// };

// console.log(person);
// console.log(person.hasOwnProperty("name"));

// const animal = {
//   noOfLegs: 4,
// };

// animal.__proto__ = person;

// console.log(animal);

// console.log(animal.age);
// console.log(animal.hasOwnProperty('noOfLegs'))

class Animal {}
const dog = new Animal("kaley", 4);
const cat = new Animal("meow", 4);

// const basanta = {
//   name: "basanta",
//   age: 10,
//   sayHello() {
//     console.log("hellooo");
//   },
// };

// const uchit = {
//   name: "uchit",
//   age: 12,
//   sayHello() {
//     console.log("hellooo");
//   },
// };

// const rakesh = {
//   name: "rakesh",
//   age: 12,
//   sayHello() {
//     console.log("hellooo");
//   },
// };

// class Perosns {}

// class Student : Person {

// }

// function Person(name, age) {
//   // this = {}
//   this.name = name;
//   this.age = age;
//   // return {}
// }

// Person.prototype.sayHello = function () {
//   console.log(this);
// };

// const rakesh = new Person("rakesh", 10);
// // rakesh.sayHello();

// const basant = new Person("basanta", 10);
// // basant.sayHello();

// // console.log(rakesh);
// // console.log(basant);

// function Student(name, age, school) {
//   // this = {}
//   Person.call(this, name, age);
//   this.school = school;
//   // this
// }

// Student.prototype.getSchool = function () {
//   console.log(this.school);
// };

// Object.setPrototypeOf(Student.prototype, Person.prototype);

// const akash = new Student("akash", 10, "nbhs");
// akash.getSchool();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`${this.name}: Hello`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, school) {
//     super(name, age); // Person.call(this, name, age)
//     this.school = school;
//   }

//   getSchool() {
//     console.log(this.school);
//   }
// }

// const basanta = new Person("basanta", 10);
// basanta.sayHello();

// const uchit = new Student("uchit", 12, "nbhs");
// console.log(uchit.age);
// uchit.sayHello()

// console.log(uchit)

class MathUtils {
  static PII = 3.14
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.PII)
console.log(MathUtils.add(1,3))

class Person {
  #fullname
  constructor(fullname, age) {
    this.#fullname = fullname;
    this.age = age;
  }

  sayHello() {
    console.log(`${this.name}: Hello`);
  }

  get name() {
    return this.#fullname
  }

  set name(value) {
    this.#fullname = value;
  }
}

const p = new Person('uchit',10)
console.log(p.name)
