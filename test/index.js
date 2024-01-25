//STRING
let name = "Habiba";
var name2 = "Ha";

// H  A  B  I  B  A
console.log(name[0]);
console.log(name.length);

let result = name + name2 + "yOU ARE WELCOMED TO MY CLASS" + name;
console.log(result);
//TEMPLATE LITERALS back tick
answer = `${name} YOU ARE WELCOMED ${name}`;
console.log(answer);

// let age = 50;
// NUMBER CONVERSIONS
let age = "20";
let ageInNumber = Number(age);

// STRING CONVERSIONS
let age1 = 20;
let ageInString = String(age1);

//BOOLEAN CONVERSION
let num = 50;
let reslt = Boolean(num);
console.log(reslt);

let num1 = -50;
let reslt1 = Boolean(num1);
console.log(reslt1);

let num2 = 0;
let reslt2 = Boolean(num2);
console.log(reslt2);

let str = "";
let restr = Boolean(str);
console.log(restr);
let yourName;
console.log(yourName);

const person = {
  name: "Habiba",
  age: 26,
  gender: "female",
  tribe: "Yoruba",
  religion: "Christain",
};
const person1 = {
  name: "Paul",
  age: 26,
  gender: "male",
  tribe: "Igbo",
  religion: "Christain",
};

const fruits = ["apple", "banana", "orange", "habiba"];
const ages = [10, 20, 10, 40, 50, 60, 70];

const today = new Date();
const today2 = new Date();
console.log(today);

console.log(today.getMinutes());

// function sayHi(name, age) {
//   return `Hello ${name}, you are ${age} years old`;
// }
// function sayHello() {
//   saying = sayHi("Dan", 45);
//   return "Hello, how are you doing?" + saying;
// }

//ARROW FUNCTIONS
const sayHi = (name, age) => {
  return `Hello ${name}, you are ${age} years old`;
};

const sayHello = () => {
  saying = sayHi("Dan", 45);
  return "Hello, how are you doing?" + saying;
};
console.log(sayHi("Paul", 26));
console.log(sayHello());

// IF ELSE STATEMENT
let yourAge = 12;
let myAge = 17;

let isRaining = "tdhdfu";
if (isRaining) {
  console.log("Leave with umbrella");
} else {
  console.log("Leave without umbrella");
}

function checkUserInput(input) {
  const maxNumber = 25;
  let lengthOfInput = input.length;
  if (lengthOfInput >= maxNumber) {
    console.log("you have reached the max of 25");
  } else {
    remaining = maxNumber - lengthOfInput;
    console.log(
      `you have written ${lengthOfInput} characters, its remaining ${remaining} characters `
    );
  }
}

checkUserInput("habiba is a fine girl");
