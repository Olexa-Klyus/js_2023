// --створити масив з:
//   - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr1 = [1, 15, 23, 45, 24]
let arr2 = ["1", "hello", "23", "45", "24"]
let arr3 = [1, "hello", true, 0, false]

console.log(arr1)
console.log(arr2)
console.log(arr3)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = [];
arr4[0] = 1;
arr4[1] = 2;
arr4[2] = true;
arr4[3] = "hello";
arr4[4] = 445;
arr4[5] = 5;

console.log(arr4)


//-------------------------------------------------------------------------------------------------
// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// 1. перебрати його циклом while
let t = 0;
while (t < arr5.length) {
  console.log(arr5[t]);
  t++;
}
// 2. перебрати його циклом for
for (let v = 0; v < arr5.length; v++) {
  console.log(arr5[v])
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let w = 1;
while (w < arr5.length) {
  console.log(arr5[w]);
  w += 2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let b = 1; b < arr5.length; b += 2) {
  console.log(arr5[b]);
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let f = 0;
while (f < arr5.length) {
  if (!(arr5[f] % 2)) {
    console.log(arr5[f]);
  }
  f++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let e = 0; e < arr5.length; e++) {
  if (!(arr5[e] % 2)) {
    console.log(arr5[e]);
  }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let r = 0; r < arr5.length; r++) {
  if (!(arr5[r] % 3)) {
    arr5[r] = "okten";
  }
}
console.log(arr5)
// 8. вивести масив в зворотньому порядку.
for (let s = arr5.length - 1; s > -1; s--) {
  console.log(arr5[s]);
}
console.log("*************")

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (ззаду наперед)  #########

// 7. замінити кожне число кратне 3 на слово "okten"
for (let d = arr5.length - 1; d > -1; d--) {
  if (!(arr5[d] % 3)) {
    arr5[d] = "okten";
  }
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let e = arr5.length - 1; e > -1; e--) {
  if (!(arr5[e] % 2)) {
    console.log(arr5[e]);
  }
}

console.log("*************")

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let g = arr5.length - 1;
while (g > -1) {
  if (!(arr5[g] % 2)) {
    console.log(arr5[g]);
  }
  g--;
}

console.log("*************")

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let m = arr5.length - 1; m > -1; m -= 2) {
  console.log(arr5[m], m);
}

console.log("*************")

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let u = arr5.length - 1;
while (u > -1) {
  console.log(arr5[u], u);
  u -= 2;
}

console.log("*************")

// 2. перебрати його циклом for
for (let pp = arr5.length - 1; pp > -1; pp--) {
  console.log(arr5[pp])
}

console.log("*************")
console.log("*************")

// 1. перебрати його циклом while
let ee = arr5.length - 1;
while (ee > -1) {
  console.log(arr5[ee]);
  ee--;
}
console.log("*************")
//-------------------------------------------------------------------------------------------------


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let num of numbers) {
  console.log(num)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strs = ["1, 2, 3, 4, 5, 6, 7, 8, 9, 10", "hhh", "oop", "567", "-", "h", "e", "l", "l", "o"]
for (let str of strs) {
  console.log(str)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let diff = ["1, 2, 3", true, undefined, 0, 567, "-", "", null, NaN, 60.4]
for (let item of diff) {
  console.log(item)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let diff2 = [1, 5, "hello", true, false, 0, "smth", "uuu", "12345", "76867"]
for (let item of diff2) {
  if (typeof item == "boolean") {
    console.log(item)
  }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let diff3 = [-1, 115, 0.345543, true, false, 0, 757, "uuu", "12345", "76867"]
for (let item of diff3) {
  if (typeof item == "number") {
    console.log(item)
  }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let diff4 = [1, 5, "hello", true, false, 0, "smth", "uuu", "12345ggg", "76867"]
for (let item of diff4) {
  if (typeof item == "string") {
    console.log(item)
  }
}
//-------------------------------------------------------------------------------------------------


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let arr6 = [];
arr6[0] = 1;
arr6[1] = 2;
arr6[2] = true;
arr6[3] = "hello";
arr6[4] = 445;
arr6[5] = 5;
arr6[6] = false;
arr6[7] = "hello-hello-hello";
arr6[8] = null;
arr6[9] = -0.05;

for (let item of arr6) {
  console.log(item)
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let item = 1; item <= 10; item++) {
  console.log(item)
  document.write(`<div>${item}</div>`)
}


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let item1 = 1; item1 <= 100; item1++) {
  console.log(item1);                                 // every current step number
  document.write(`<div>${item1}</div>`);
}
// v2
let item1 = 1;
for (item1; item1 <= 100; item1++) {
}
console.log(item1);                           // last current step number
document.write(`<div>${item1}</div>`);


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

let stepNumber = 1;
for (let item = 1; item <= 200; item += 2) {
  stepNumber++;
}
console.log(stepNumber)
document.write(`<div>${stepNumber}</div>`)


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let item = 1; item <= 100; item++) {
  if (!(item % 2)) {
    console.log(item)
    document.write(`<div>${item}</div>`)
  }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let item = 1; item <= 100; item++) {
  if (item % 2) {
    console.log(item)
    document.write(`<div>${item}</div>`)
  }
}
//-------------------------------------------------------------------------------------------------


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

const books = [
  {
    title: "Book1",
    pageCount: 269,
    authors: [{name: "Hanna", age: 35}, {name: "Maksym", age: 35}, {name: "Petro", age: 39}],
    genre: ["non-fiction",]
  },
  {
    title: "Book256",
    pageCount: 177,
    authors: [{name: "Olha", age: 35}, {name: "Olena", age: 29}],
    genre: ["non-fiction",]
  },
  {
    title: "BookBook",
    pageCount: 561,
    authors: [{name: "Olha", age: 35},],
    genre: ["fiction", "fantasy"]
  },
]

// -знайти наібльшу книжку.
let pageCount = 0;
let largestBook;
for (let book of books) {
  if (book.pageCount > pageCount){
    largestBook = book;
    pageCount = book.pageCount;
  }
}
console.log(largestBook, largestBook.pageCount)


// - знайти книжку/ки з найбільшою кількістю жанрів
const listGenreCountBook = [];
let genreCount = 0;
let genreBook;
for (let book of books) {              // find the largest number of genres
  if (book.genre.length > genreCount){
    genreBook = book;
    genreCount = book.genre.length;
  }
}
for (let book = 0; book < books.length; book++) {       // find the books with the largest number of genres
  if (books[book].genre.length === genreCount){
    listGenreCountBook[book] = books[book];
  }
}
console.log(listGenreCountBook)



// - знайти книжку/ки з найдовшою назвою
const listTitleLengthBook = [];
let titleLength = 0;
let titleLengthBook;
for (let book of books) {                 // find the largest length
  if (book.title.length > titleLength){
    titleLengthBook = book;
    titleLength = book.title.length;
  }
}
for (let book = 0; book < books.length; book++) {       // find the books with the largest length
  if (books[book].title.length === titleLength){
    listTitleLengthBook[book] = books[book];
  }
}
console.log(listTitleLengthBook)


// - знайти книжку/ки які писали 2 автори
let authors = 2;

for (let book of books) {
  if (book.authors.length === authors){
    console.log(book);
  }
}


// - знайти книжку/ки які писав 1 автор
let authors1 = 1;

for (let book of books) {
  if (book.authors.length === authors1){
    console.log(book);
  }
}
