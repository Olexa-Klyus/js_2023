// 1. Створити пустий масив та :
let array = [];

//   a. заповнити його 50 парними числами за допомоги циклу.
for (let number = 2; number < 102; number += 2) {
  if (!(number % 2)) {
    array.push(number)
    // array[number] = number;
  }
}
console.log(array);

//   b. заповнити його 50 непарними числами за допомоги циклу.
array = [];

for (let number1 = 1; number1 <= 100; number1++) {
  if (number1 % 2) {
    array.push(number1)
  }
}
console.log(array);

//   c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
array = [];
for (let number = 0; number < 20; number++) {
  array[number] = Math.floor(Math.random() * 10);
}
console.log(array);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
array = [];
for (let number = 0; number < 20; number++) {
  array[number] = Math.floor(Math.random() * 732) + 8;
}
console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемент
for (let item = 0; item < array.length; item += 3) {
  console.log(array[item])
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let item = 0; item < array.length; item += 3) {
  if (!(array[item] % 2)) {
    console.log(array[item])
  }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
const arrayNew = [];
for (let item = 0; item < array.length; item += 3) {
  if (!(array[item] % 2)) {
    console.log(array[item]);
    arrayNew.push(array[item]);
  }
}
console.log("*************");

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log(array)
for (let i = 0; i < array.length - 1; i++) {
  if (!(array[i + 1] % 2)) {
    console.log(array[i])
  }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
array = [100, 250, 50, 168, 120, 345, 188];
let totalSum = 0;
for (let sum of array) {
  totalSum += sum;
}
let averageCheck = totalSum / array.length;
console.log(averageCheck);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

array = [];
let arrayOther = [];
for (let number = 0; number < 20; number++) {
  array[number] = Math.floor(Math.random() * 10);
  arrayOther.push(array[number] * 5);
}
console.log(array);
console.log(arrayOther);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

arrayX = [1, "hello", true, 0, false, 255, 0.4544, -678, "tea"];
arrayY = [];
for (let item of arrayX) {
  if (typeof item === "number") {
    arrayY.push(item);
  }
}
console.log(arrayY);

// v2 with reference to index but empty values :(
arrayX = [1, "hello", true, 0, false, 255, 0.4544, -678, "tea"];
arrayY = [];
for (let item = 0; item < arrayX.length; item++) {
  if (typeof arrayX[item] === "number") {
    arrayY[item] = arrayX[item];
  }
}
console.log(arrayY);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
  {id: 1, name: 'vasya', age: 31, status: false},
  {id: 2, name: 'petya', age: 30, status: true},
  {id: 3, name: 'kolya', age: 29, status: true},
  {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
  {user_id: 3, country: 'USA', city: 'Portland'},
  {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
  {user_id: 2, country: 'Poland', city: 'Krakow'},
  {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//   Записати цей об'єкт в новий масив
// Example:
//   let usersWithCities = [
//     {
//       id: 1, // <===
//       name: 'vasya',
//       age: 31,
//       status: false,
//       address: {
//         user_id: 1, // <===
//         country: 'Ukraine',
//         city: 'Ternopil'
//       }
//     },
//     // TO BE CONTINUED .....
//   ]

let arrayR = [];
i = 0;

for (user of usersWithId) {
  for (userAdress of citiesWithId) {
    if (user.id === userAdress.user_id) {
      user.address = userAdress;
    }
  }
  arrayR[i] = user;
  i++;
}
console.log(arrayR);


//     - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrayP = [1, 10, 156, 100, 5, 255.5, 0.4, -8, 2, -27];

for (number of arrayP) {
  if (!(number % 2)) {
    console.log(number)
  }
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arrayB = [1, 10, 156, 100, 5, 255.5, 0.4, -8, 2, -27];
let arrayC = [];
index = 0;

for (let item of arrayB) {
  arrayC[index] = item;
  index++;
}
console.log(arrayC);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let letters = ['a', 'b', 'c'];

let word = "";
for (let letter = 0; letter < letters.length; letter++) {
  word += `${letters[letter]}`;
}
console.log(word)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let letter = 0;
word = "";

while (letter < letters.length) {
  word += `${letters[letter]}`;
  letter++;
}
console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

letter = 0;
word = "";
for (let letter of letters) {
  word += `${letter}`;
}
console.log(word)
