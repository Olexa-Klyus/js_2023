// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
a = "hello world";
b = "lorem ipsum";
c = "javascript is cool";

let strLength = (str) => console.log(str.length);

strLength(a);
strLength(b);
strLength(c);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = "hello world";
let str2 = "lorem ipsum";
let str3 = "javascript is cool";

let str1New = str1.toUpperCase();
let str2New = str2.toUpperCase();
let str3New = str3.toUpperCase();

console.log(str1New, str2New, str3New);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let strA = "HELLO WORLD";
let strB = "LOREM IPSUM";
let strC = "JAVASCRIPT IS COOL";

console.log(strA.toLowerCase());
console.log(strB.toLowerCase());
console.log(strC.toLowerCase());


// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str = " dirty string   "
str = str.trim();
console.log(str);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(" ");

let arr = stringToArray(str);
console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let ar = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
ar = ar.map(item => item.toString());
console.log(ar);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

let nums = [11, 21, 3];

let sortNums = (nums, direction) => {
  if (direction === "ascending") {
    nums.sort((a, b) => {
      return a - b;
    })
  } else if (direction === "descending") {
    nums.sort((a, b) => {
      return b - a;
    })
  }
  return nums;
}
console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));


// ==========================
// - є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray = coursesAndDurationArray.sort(
  (obj1, obj2) => {
    return obj2.monthDuration - obj1.monthDuration;
  })

console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

durationMoreThan5 = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(durationMoreThan5);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

coursesAndDurationArray = coursesAndDurationArray.map(
  (value, index) => {
    value.id = index + 1;
    return value;
  });
console.log(coursesAndDurationArray);


// =========================
//   описати колоду карт (від 6 до туза без джокерів)
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
// }

let cards = [
  {cardSuit: 'spade', value: '6', color: 'black'},
  {cardSuit: 'diamond', value: '6', color: 'red'},
  {cardSuit: 'heart', value: '6', color: 'red'},
  {cardSuit: 'clubs', value: '6', color: 'black'},
  {cardSuit: 'spade', value: '7', color: 'black'},
  {cardSuit: 'diamond', value: '7', color: 'red'},
  {cardSuit: 'heart', value: '7', color: 'red'},
  {cardSuit: 'clubs', value: '7', color: 'black'},
  {cardSuit: 'spade', value: '8', color: 'black'},
  {cardSuit: 'diamond', value: '8', color: 'red'},
  {cardSuit: 'heart', value: '8', color: 'red'},
  {cardSuit: 'clubs', value: '8', color: 'black'},
  {cardSuit: 'spade', value: '9', color: 'black'},
  {cardSuit: 'diamond', value: '9', color: 'red'},
  {cardSuit: 'heart', value: '9', color: 'red'},
  {cardSuit: 'clubs', value: '9', color: 'black'},
  {cardSuit: 'spade', value: '10', color: 'black'},
  {cardSuit: 'diamond', value: '10', color: 'red'},
  {cardSuit: 'heart', value: '10', color: 'red'},
  {cardSuit: 'clubs', value: '10', color: 'black'},
  {cardSuit: 'spade', value: 'jack', color: 'black'},
  {cardSuit: 'diamond', value: 'jack', color: 'red'},
  {cardSuit: 'heart', value: 'jack', color: 'red'},
  {cardSuit: 'clubs', value: 'jack', color: 'black'},
  {cardSuit: 'spade', value: 'queen', color: 'black'},
  {cardSuit: 'diamond', value: 'queen', color: 'red'},
  {cardSuit: 'heart', value: 'queen', color: 'red'},
  {cardSuit: 'clubs', value: 'queen', color: 'black'},
  {cardSuit: 'spade', value: 'king', color: 'black'},
  {cardSuit: 'diamond', value: 'king', color: 'red'},
  {cardSuit: 'heart', value: 'king', color: 'red'},
  {cardSuit: 'clubs', value: 'king', color: 'black'},
  {cardSuit: 'spade', value: 'ace', color: 'black'},
  {cardSuit: 'diamond', value: 'ace', color: 'red'},
  {cardSuit: 'heart', value: 'ace', color: 'red'},
  {cardSuit: 'clubs', value: 'ace', color: 'black'},
];
// - знайти піковий туз

let aceSpades = cards.filter(value =>
  value.cardSuit === "spade" && value.value === "ace");
console.log(aceSpades[0]);

// - всі шістки

let sixes = cards.filter(value => value.value === "6");
console.log(sixes);

// - всі червоні карти

let redCards = cards.filter(value => value.color === "red");
console.log(redCards);

// - всі буби

let diamondCards = cards.filter(value => value.cardSuit === "diamond");
console.log(diamondCards);

// - всі трефи від 9 та більше

let clubsGreaterThan9 = cards.filter(value =>
  value.cardSuit === "clubs" && !(value.value < 9));
console.log(clubsGreaterThan9);


// =========================
//   Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }

let cardsReducedByCardSuit = cards.reduce(
  (accumulator,
   card) => {
    if (card.cardSuit === "spade") {
      accumulator.spades.push(card);
    } else if (card.cardSuit === "diamond") {
      accumulator.diamonds.push(card);
    } else if (card.cardSuit === "heart") {
      accumulator.hearts.push(card);
    } else if (card.cardSuit === "clubs") {
      accumulator.clubs.push(card);
    }
    return accumulator;
  }, {spades: [], diamonds: [], hearts: [], clubs: []})

console.log(cardsReducedByCardSuit);


// =========================
//   взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

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

// --написати пошук всіх об'єктів, в який в modules є sass

let sassIncludeObj = coursesArray.filter(
  value => value.modules.includes("sass")
)
console.log(sassIncludeObj);

// --написати пошук всіх об'єктів, в який в modules є docker

let dockerIncludeObj = coursesArray.filter(
  value => value.modules.includes("docker")
)
console.log(dockerIncludeObj);
