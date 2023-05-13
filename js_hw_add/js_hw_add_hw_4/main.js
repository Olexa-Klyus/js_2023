// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNumber(a, b, c) {
  let res = c;
  let arr = [a, b, c]
  for (let number of arr) {
    if (number < res) {
      res = number;
    }
  }
  console.log(res);
}

minNumber(10, -15, 355);

// v2
function minNumber1(a, b, c) {
  if (a < b && a < c) {
    res = a;
  } else if (b < a && b < c) {
    res = b;
  } else if (c < a && c < b) {
    res = c;
  }
  console.log(res);
}

minNumber1(10, -15, 355);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNumber(a, b, c) {
  if (a > b && a > c) {
    res = a;
  } else if (b > a && b > c) {
    res = b;
  } else if (c > a && c > b) {
    res = c;
  }
  console.log(res);
}

maxNumber(10000, -159, 355);


// - створити функцію яка повертає найбільше число з масиву

function maxNumberArr(array) {
  let res = array[array.length - 1];
  for (let number of array) {
    if (number > res) {
      res = number;
    }
  }
  return res;
}

console.log(maxNumberArr([-10, 1, 2, 3, 4, 5, 0.567, 356]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arrayAverage(array) {
  let sum = 0;
  for (let item of array) {
    sum += item;
  }
  res = sum / array.length;
  return res;
}

console.log(arrayAverage([1, 45, 26, 23, 456, -34, 0.453, -234]))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

function function1(...elements) {
  maxNumber = elements[elements.length - 1];
  for (let number of elements) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  console.log(maxNumber);
  minNumber = elements[elements.length - 1];
  for (let number of elements) {
    if (number < minNumber) {
      minNumber = number;
    }
  }
  return minNumber;
}

function1(1, 2, -34, 45, 6, 6, 7, 8, 8, 9, 9, 456565465, 6546, 456, 5445, 645);
console.log(function1(1, 2, -34, 45, 6, 6, 7, 8, 8, 9, 9, 456565465, 6546, 456, 5445, 645));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomNumbersArray(n) {
  array = [];
  let i = 0;
  while (i < n) {
    array[i] = Math.round(Math.random() * 100);
    i++;
  }
  return array;
}

console.log(randomNumbersArray(20));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

function randomNumbersArrayLimit(limit, n) {
  array = [];
  let i = 0;
  while (i < n) {
    array[i] = Math.round(Math.random() * limit);
    i++;
  }
  return array;
}

console.log(randomNumbersArrayLimit(8, 20));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverseArray(array) {
  let c = 1;
  let arrayX = [];
  for (let item of array) {
    arrayX[arrayX.length] = array[array.length - c];
    c++;
  }
  return arrayX;
}

console.log(reverseArray([1, 2, 3, 4, 5]))


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.


function function2(...elements) {
  if (elements.length === 1) {
    console.log(elements[0]);
  } else if (elements.length === 2) {
    console.log(elements[0] + elements[1]);
  }
}

function2(1, "hello");


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими
// індексами  та повертає новий результуючий масив.
//   EXAMPLE:
// [1,2,3,4]
//   [2,3,4,5]
// результат
//   [3,5,7,9]


function pairwiseAdd(arr1, arr2) {
  let arr3 = [];
  let index = 0;
  while (index < arr1.length) {
    arr3[arr3.length] = arr1[index] + arr2[index];
    index++;
  }
  return arr3;
}

console.log(pairwiseAdd([1, 2, 3, 4, 5], [10, 20, 30, 40, 50]))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//

function returnArrKeys(arr) {
  let resArray = [];
  for (let obj of arr) {
    for (let key in obj) {
      resArray[resArray.length] = key;
    }
  }
  return resArray;
}

console.log(returnArrKeys([{name: "Hanna", age: 25}, {model: "Viva"}, {address: "Lviv"}]));


//   - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function returnArrValues(arr) {
  let resArray = [];
  for (let obj of arr) {
    for (let key in obj) {
      resArray[resArray.length] = obj[key];
    }
  }
  return resArray;
}

console.log(returnArrValues([{name: "Hanna", age: 25}, {model: "Viva"}, {address: "Lviv"}]));
