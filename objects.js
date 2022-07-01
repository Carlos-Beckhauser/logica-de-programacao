/* const name = "Carlos";
const age = 35;
const teacher = true;

console.log(`Oi, meu nome é ${name} e eu tenho ${age} anos`); */

let person = {
  name: "Bruce",
  age: 35,
  teacher: true,
  sayHello: function () {
    console.log(`Oi, meu nome é ${this.name} e eu tenho ${this.age} anos`);
  },
};

/* person.hobby = "videogames";

console.log(person.hobby); */
person.sayHello();

Object.keys(person).map((key) => console.log(`${key}: ${person[key]}`));
