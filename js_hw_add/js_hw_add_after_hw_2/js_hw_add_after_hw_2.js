// Additional homework

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку: якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив,
// в якому  3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
  document.write("It`s a large array (3 or more elements)");
} else {
  document.write("It`s a small array (less than 3 elements)");
}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//   Знайти, яке з них є середнім (більше одного, але менше за інше).
//   Перевірити, чи знаходиться перше число між двома іншими.

let a = 5;
let b = 10;
let c = 15;

if (a < b && b < c) {
  console.log(b);
} else if (c < b && b < a) {
  console.log(b);
} else if (b < a && a < c) {
  console.log(a);
} else if (c < a && a < b) {
  console.log(a);
} else if (a < c && c < b) {
  console.log(c);
} else if (b < c && c < a) {
  console.log(c);
} else if (a === b || b === c || c === a) {
  console.log("Numbers are equal");
} else {
  console.log("Try again");
}


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

let result = (a + b < 4) ? "Мало" : "Багато";
console.log(result);


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let x = 10;
let res = x >= -100 && x < 0 ? -1 :
  x === 0 ? 0 : 1
console.log(res)


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//   Перевірте роботу скрипта при test, що дорівнює true, false.
//   Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = 1;
if (test) {
  console.log("Вірно")
} else {
  console.log("Неправильно")
}
// # v2
let test1 = false;
test1 = test1 ? "Вірно" : "Неправильно";
console.log(test1)


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
document.write("<br>")

let userInput = prompt("Яка «офіційна» назва JavaScript?")

if (userInput === "ECMAScript") {
  document.write("Правильно!")
} else {
  document.write("Не знаєте? ECMAScript!")
}


//   - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//   Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
document.write("<br>")

let flat = +prompt("Enter a flat number:")
if (flat >= 1 && flat <= 20) {
  document.write("First entrance");
} else if (flat >= 21 && flat <= 48) {
  document.write("Second entrance");
} else if (flat >= 49 && flat <= 90) {
  document.write("Third entrance");
} else {
  document.write("There are flats from 1 to 90. Try again");
}


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
document.write("<br>")

let number = +prompt("Number is:");
number === 10 ? document.write("ВІРНО") : document.write("НЕВІРНО");


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//   Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//   Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
document.write("<br>")

let temp = 15;
temp >= 10 && temp <= 22 ? document.write("Ми йдемо вчитися") : document.write("Cидимо вдома і вчимося онлайн");


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І залежно від введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і
//   якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
document.write("<br>")

let numberX = +prompt("Your number is:")
switch (numberX) {
  case 1:
    document.write("Ваш приз — авто!");
    break;
  case 2:
    document.write("Ваш приз — велосипед!");
    break;
  case 3:
    document.write("Ваш приз — телефон!");
    break;
  case 4:
    document.write("Ваш приз — годинник!");
    break;
  case 5:
    document.write("Ваш приз — сонячна батарея!");
    break;
  default:
    document.write("Це число не підходить, спробуйте знову");
}
