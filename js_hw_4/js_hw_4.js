// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle(a, b) {
  res = a * b;
  return res;
}

console.log(areaRectangle(10, 5))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) {
  res = Math.PI * r ** 2;
  return res;
}

console.log(areaCircle(10))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
  res = (2 * Math.PI * r * h) + (2 * Math.PI * r ** 2);
  return res;
}

console.log(areaCylinder(10, 3))


// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayToElements(arr) {
  for (let element of arr) {
    console.log(element)
  }
}

arrayToElements([1, 2, 3])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function textToParagraph(text) {
  res = `<p>${text}</p>`;
  document.write(res);                                             // v1: creates and write
  return res                                                       // v2: creates and returns
}

x = textToParagraph("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(textLi) {
  document.write('<ul>');
  document.write(`<li>${textLi}</li>`);
  document.write(`<li>${textLi}</li>`);
  document.write(`<li>${textLi}</li>`);
  document.write('</ul>');
}

createUl("text li")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUlLi(textLi, n) {
  document.write('<ul>');
  for (let item = 0; item < n; item++) {
    document.write(`<li>${textLi}</li>`);
  }
  document.write('</ul>');
}

createUlLi("text li", 5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createList(arr) {
  document.write('<ul>');
  for (let item of arr) {
    document.write(`<li>${item}</li>`);
  }
  document.write('</ul>');
}

createList(["hello", 12345, true, undefined, "may", 2023])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const arrObj = [
  {id: 2, name: "Hanna", age: 25},
  {id: 5, name: "Andrii", age: 30},
  {id: 6, name: "Ron", age: 35}
];

function writeArrObjs(arr) {
  for (let obj of arr) {
    document.write(`<div>`);
    for (const key in obj) {
      document.write(`<a>${key}: ${obj[key]}</a><br>`);
    }
    document.write(`</div>`);
  }
}

writeArrObjs(arrObj);


// - створити функцію яка повертає найменьше число з масиву

const arr = [1, 2, 3, 4, 5, -10, -23455, 0.589, -34];


function smallestNumber(arr) {
  let smallestNumber = arr[arr.length - 1];
  for (let number of arr) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
}

document.write(smallestNumber(arr))


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let array = [1, 4, 5, 60, -30, 10]

function sum(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}

document.write(`<div>${sum(array)}</div>`);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let y = [10, 20, 30, 40]

function swap(arr, index1, index2) {
  let curr = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = curr;
  return arr;
}

document.write(`<div>${swap(y, 0, 1)}</div>`);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
  let res = 0;
  for (let index = 0; index < currencyValues.length; index++) {
    if (currencyValues[index].currency === exchangeCurrency) {
      res = sumUAH / currencyValues[index].value;
    }
  }
  return res;
}

document.write(`<div>${exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],
  'USD')}</div>`);
