// - Напишіть функцію cutString(str, n), яка ділить рядки на підрядки, які складаються з n символів.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let subStrArr = [];

let cutString = (str, n) => {
  for (let i = 0; i < str.length; i += n) {
    subStrArr.push(str.substring(i, i + n));
  }
  return subStrArr;
}
document.writeln(cutString("1234512345rrrrr12345iiiii", 5));
document.write('<br>')


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості
// символів. let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => (str.substring(0, length));
document.writeln(delete_characters("Сміливі завжди мають щастя", 7));
document.write('<br>')


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//   let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => (str.replaceAll(" ", "-").toUpperCase());
document.write(insert_dash("HTML JavaScript PHP"));
document.write('<br>')


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.

let firstToUpper = (str) => (str.charAt(0).toUpperCase() + str.slice(1));
document.write(firstToUpper("hhhhh"));
document.write('<br>')


// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let CorrectName = (name) => (name.replaceAll(".", " ").replaceAll("-", " ").replaceAll("_", " ").replaceAll("   ", " ").replaceAll("  ", " "));

document.write(CorrectName(n1), "<br>");
document.write(CorrectName(n2), "<br>");
document.write(CorrectName(n3), "<br>");


//   - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNum100 = (n) => {
  let res = [];
  for (let num = 1; num <= n; num++) {
    res.push(Math.round(Math.random() * 100));
  }
  return res;
}

document.write(randomNum100(10));
document.write('<br>')


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let arr = randomNum100(10).sort((a, b) => (a - b));
document.write(arr);
document.write('<br>')


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let a = randomNum100(10).filter(value => (!(value % 2) && value > 0));
document.write(a);
document.write('<br>')


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
  let strArr = [];
  str = str.split(" ");

  for (let item of str) {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    strArr.push(item);
  }
  res = strArr.join(" ");
  return res;
}

document.write(capitalize("Сьогодні сонячна погода"));
document.write('<br>')


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// дані до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validator = (email) => {

  let atChar = email.indexOf("@");
  let dotChar = email.lastIndexOf(".");
  let spaceChar = email.indexOf(" ");


  if (atChar === -1 || atChar === 0) {
    return false;
  }
  if (dotChar === -1 || dotChar === 0 || !(dotChar - atChar >= 2) || (dotChar === email.length - 1)) {
    return false;
  }
  if (!(spaceChar === -1)) {
    return false;
  }

  email = email.split("@");
  let local = email[0].toUpperCase();
  let domain = email[1].toUpperCase();

  if (email.length !== 2) {
    return false;
  }
  if (local.length === 0 || domain.length < 4) {
    return false;
  }
  if (!(domain.includes("."))) {
    return false;
  }
  if (local[local.length - 1] === "." || local[0] === ".") {
    return false;
  }
  if ((local.length > 64) || local.length + domain.length > 255) {
    return false;
  }

  local = local.split("");
  local.forEach(char => {
    if (!((char.charCodeAt(0) > 48 && char.charCodeAt(0) < 57) || (char.charCodeAt(0) > 65) && char.charCodeAt(0) < 90)
      || (char.charCodeAt(0) === 95))
      return false;
  })
  domain = domain.split("");
  domain.forEach(char => {
    if (!((char.charCodeAt(0) > 48 && char.charCodeAt(0) < 57) || (char.charCodeAt(0) > 65) && char.charCodeAt(0) < 90)
      || (char.charCodeAt(0) === 45))
      return false;
  })
  return true;
}

let email1 = "someemail@gmail.com";
let email2 = "someeMAIL@gmail.com";
let email3 = "someeMAIL@i.ua";
let email4 = "some.email@gmail.com";
document.write(validator(email1), '<br>', validator(email2), '<br>', validator(email3), '<br>', validator(email4), '<br>');


// Check the Domain and Local address lengths - the local is limited to 64 characters,
// and the total length of the pair is 255 characters.

let checkLength = (email) => {
  email = email.split("@");
  return `The local length is ${email[0].length}, total: ${email[0].length + email[1].length}`;
}

document.write(checkLength("someemail@gmail.com"));


// - є масив
let coursesArray = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced']
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced']
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java']
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
  }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

coursesArray = coursesArray.sort((a, b) => {
  return b.modules.length - a.modules.length
});

console.log(coursesArray);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//   let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringsearch) => {
  str = str.split("")
  let i = 0;
  for (let char of str) {
    if (char === stringsearch) {
      i++;
    }
  }
  return i;
}

console.log(count("rhsrhxtrxrhstrhs", "r"));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//   let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

cutString = (str, n) => (str.split(" ").slice(0, n).join(" "));

console.log(cutString("Ти знаєш, що ти людина? Ти знаєш про це чи ні?", 5))


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
  {
    title: "Book1Title",
    pageCount: 265,
    genre: ["non-fiction", "non-fiction"],
    authors: [{name: "Olha", age: 45}, {name: "Andrii", age: 26}]
  },
  {
    title: "Book111Title",
    pageCount: 365,
    genre: ["non-fiction"],
    authors: [{name: "Olha", age: 45}, {name: "Hanna", age: 35}]
  },
  {
    title: "Book2Title",
    pageCount: 55,
    genre: "art",
    authors: [{name: "Hanna", age: 35}]
  },
  {
    title: "Book333Title",
    pageCount: 905,
    genre: ["history", "non-fiction"],
    authors: [
      {name: "Andrii", age: 35},
      {name: "Andrii", age: 45},
      {name: "Hanna", age: 32},
      {name: "Oksana", age: 38},
      {name: "Serhii", age: 32}
    ]
  }
]


// -знайти наібльшу книжку.
largestBook = books.sort((a, b) => (b.pageCount - a.pageCount)).slice(0, 1);
console.log(largestBook);


// - знайти книжку/ки з найбільшою кількістю жанрів

genreBooks = (arr) => {
  books = arr.sort((a, b) => (b.genre - a.genre));
  res = books.filter(book => book.genre.length === books[0].genre.length);
  return res;
}

console.log(genreBooks(books));

// - знайти книжку/ки з найдовшою назвою

titleBooks = (arr) => {
  books = arr.sort((a, b) => (b.title - a.title));
  res = books.filter(book => book.title.length === books[0].title.length);
  return res;
}

console.log(titleBooks(books));


// - знайти книжку/ки які писали 2 автори

twoAuthorsBooks = (arr) => (arr.filter(book => book.authors.length === 2));
console.log(twoAuthorsBooks(books));


// - знайти книжку/ки які писав 1 автор

oneAuthorsBooks = (arr) => (arr.filter(book => book.authors.length === 1));
console.log(oneAuthorsBooks(books));


// - вісортувати книжки по кількості сторінок по зростанню

let ascPageBooks = (arr) => (arr.sort((a, b) => (a.pageCount - b.pageCount)));
console.log(ascPageBooks(books));
