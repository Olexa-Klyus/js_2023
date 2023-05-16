//
// Всі функції повинні бути описані стрілочним типом!!!!
//   - створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)

let minNumber = (a, b, c) => {
  if (a < b && a < c) {
    res = a;
  } else if (b < a && b < c) {
    res = b;
  } else if (c < a && c < b) {
    res = c;
  }
  console.log(res);
}

minNumber(0, -25, 355);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (a, b, c) => {
  if (a > b && a > c) {
    res = a;
  } else if (b > a && b > c) {
    res = b;
  } else if (c > a && c > b) {
    res = c;
  }
  console.log(res);
}

maxNumber(100, -15.9, 35);


// - створити функцію яка повертає найбільше число з масиву

let maxNumberArr = (array) => {
  let res = array[array.length - 1];
  for (let number of array) {
    if (number > res) {
      res = number;
    }
  }
  return res;
}

console.log(maxNumberArr([-10, 1, 2, 3, 4, 5, 0.567, 356]));


// - створити функцію яка повертає найменше число з масиву

let minNumberArr = (array) => {
  let res = array[array.length - 1];
  for (let number of array) {
    if (number < res) {
      res = number;
    }
  }
  return res;
}

console.log(minNumberArr([-100, 0.5, 356]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrayS = [100, 200, 300]

let sumArr = (arr) => {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}

console.log(sumArr(arrayS));


// - Дано натуральне число n. Виведіть всі числа від 1 до n.
let naturalNums = (n) => {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}

naturalNums(10);


// - Дано два цілі числа A та В . Виведіть всі числа від A до B включно: за зростанням, якщо A < B,
// або за спаданням у протилежному випадку.

let sequenceAB = (a, b) => {
  if (a < b) {
    for (let item = a; item <= b; item++) {
      console.log(item);
    }
  } else if (b < a) {
    for (let item = a; item >= b; item--) {
      console.log(item);
    }
  }
}

let a = 10;
let b = 15;
sequenceAB(a, b);
sequenceAB(b, a);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let switchI = (array, i) => {
  let temp = array[i];
  array[i] = array[i + 1];
  array[i + 1] = temp;
  return array;
}

console.log(switchI([9, 8, 0, 4], 0));
console.log(switchI([9, 8, 0, 4], 1));
console.log(switchI([9, 8, 0, 4], 2));


// - Створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1, 0, 6, 0, 3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


let zerosToEndArr = (arr) => {
  let add = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      i--;
      add++;
    }
  }
  let t = 1;
  while (t <= add) {
    arr.push(0);
    t++;
  }
  return arr;
}

console.log(zerosToEndArr([1, 0, 6, 0, 3]));
console.log(zerosToEndArr([0, 1, 2, 3, 4]));
console.log(zerosToEndArr([0, 0, 1, 0]));
console.log(zerosToEndArr([0, 0, 0, 0, 0, 0, 1, 10, 0, 0, 2324]));
