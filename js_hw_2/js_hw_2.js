// I. Масиви та об'єкти
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let msf = [10, true, "hello", "Carpathians", "may", [25, -16.5, 0.675, 0], "boolean", "bird", 35, 24];
console.log(msf[0]);
console.log(msf[1]);
console.log(msf[2]);
console.log(msf[3]);
console.log(msf[4]);
console.log(msf[5]);
console.log(msf[6]);
console.log(msf[7]);
console.log(msf[8]);
console.log(msf[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {title: "Book1Title", pageCount: 265, genre: "non-fiction"}
let book2 = {title: "Book2Title", pageCount: 55, genre: "art"}
let book3 = {title: "Book3Title", pageCount: 905, genre: "history"}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
  title: "Book1Title",
  pageCount: 265,
  genre: "non-fiction",
  authors: [{name: "Olha", age: 45}, {name: "Andrii", age: 26}]
}
let book5 = {
  title: "Book2Title",
  pageCount: 55,
  genre: "art",
  authors: [{name: "Hanna", age: 35}, {name: "Maksym", age: 35}, {name: "Petro", age: 39}]
}
let book6 = {
  title: "Book3Title",
  pageCount: 905,
  genre: "history",
  authors: [
    {name: "Andrii", age: 35},
    {name: "Andrii", age: 45},
    {name: "Hanna", age: 32},
    {name: "Oksana", age: 38},
    {name: "Serhii", age: 32}
  ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
  {name: "Hanna", username: "hannaK", password: "rjekbjdb"},
  {name: "Andrii", username: "andriiM", password: "rthrshrr"},
  {name: "Oleh", username: "olehOleh", password: "33b365"},
  {name: "Olena", username: "Olena1", password: "1245ty"},
  {name: "Oksana", username: "oksanaS", password: "xxyxx54"},
  {name: "Ihor", username: "ihor12345", password: "44gwzger"},
  {name: "Lesia", username: "lesiaSv", password: "lesia23lesia9586"},
  {name: "Davyd", username: "D283Kr", password: "yjyjyyj"},
  {name: "Oleksandr", username: "oleksandrK", password: "cn8dhh"},
  {name: "Mariia", username: "mariiaMariia3", password: "mmm345mj67fj"},
]

console.log(users[0]["password"])
console.log(users[1]["password"])
console.log(users[2]["password"])
console.log(users[3]["password"])
console.log(users[4]["password"])
console.log(users[5]["password"])
console.log(users[6]["password"])
console.log(users[7]["password"])
console.log(users[8]["password"])
console.log(users[9]["password"])


// II. Логічні розгалуження
// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//   Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if (x !== 0) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt("Enter a number from 0 to 59:");
let time = 45;
if (time >= 0 && time <= 15) {
  console.log(1);
} else if (time > 15 && time <= 30) {
  console.log(2);
} else if (time > 30 && time <= 45) {
  console.log(3);
} else if (time > 45 && time <= 59) {
  console.log(4);
} else {
  console.log("Enter a number from 0 to 59");
}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

day = 25;
if (day >= 1 && day <= 10) {
  console.log(1);
} else if (day > 10 && day <= 20) {
  console.log(2);
} else if (day > 20 && day <= 31) {
  console.log(3);
} else {
  console.log(false);
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = +prompt("Порядковий номер дня тижня:");
switch (dayNumber) {
  case 1:
    console.log("Запланувати зустрічі, заправити авто");
    break;
  case 2:
    console.log("Зробити домашку, закупи");
    break;
  case 3:
    console.log("Переглянути е-пошту, надіслати пакунок");
    break;
  case 4:
    console.log("Переглянути лекції, сходити в магазин, приготувати їсти");
    break;
  case 5:
    console.log("Зробити домашку, переглянути запити");
    break;
  case 6:
    console.log("Попрацювати над проєктом");
    break;
  case 7:
    console.log("З'їздити в ботанічний сад");
    break;
  default:
    console.log("Що це за день такий?)");
}


//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let usersNumber1 = +prompt("Перше число:");
let usersNumber2 = +prompt("Друге число:");

if (usersNumber1 > usersNumber2) {
  console.log(usersNumber1);
} else if (usersNumber2 > usersNumber1) {
  console.log(usersNumber2);
} else if (usersNumber2 === usersNumber1) {
  console.log(`${usersNumber1}=${usersNumber2}`);
}


//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//   Напишіть код, який за допомоги  оператора || буде присвоювати змінній х значення "default",
//   якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x1 = 5;
// if (!x1){
//   x1 = "default"
// }
// console.log(x1)

let x2 = 0;
if (x2 === null || x2 === 0 || isNaN(x2) || x2 === undefined || x2 === "" || x2 === false) {
  x2 = "default"
}
console.log(x2)


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
  console.log("Супер")
}
if (coursesAndDurationArray[1].monthDuration > 5){
  console.log("Супер")
}
if (coursesAndDurationArray[2].monthDuration > 5){
  console.log("Супер")
}
if (coursesAndDurationArray[3].monthDuration > 5){
  console.log("Супер")
}
if (coursesAndDurationArray[4].monthDuration > 5){
  console.log("Супер")
}
if (coursesAndDurationArray[5].monthDuration > 5){
  console.log("Супер")
}

