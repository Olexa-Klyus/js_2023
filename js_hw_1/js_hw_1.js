// ex 1
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let a = "hello";
let b = "owu";
let c = "com";
let d = "ua";
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let e = true;
let f = false;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);

// ex 2
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Oleksandr";
let middleName = "Romanovych";
let lastName = "Klius";
let person = `${firstName} ${middleName} ${lastName}`;

// ex 3
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let aa = 100;
let bb = "100";
let cc = true;

console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);

// ex 4
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

// const prompt = require("prompt-sync")({sigint: true});

let firstName1 = prompt("Enter your name:");
let middleName1 = prompt("Enter your middle name:");
let age1 = Number(prompt("Enter your age:"));

console.log(firstName1);
console.log(middleName1);
console.log(age1);

// console.log(`${firstName1} ${middleName1}, ${age1} years old`);
