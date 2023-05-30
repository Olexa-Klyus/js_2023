// - створити блок,
//   - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement("div");
div.classList.add("wrap", "collapse", "alpha", "beta");

div.style.backgroundColor = "white";
div.style.color = "#888888";
div.style.fontSize = "25px";

document.body.append(div);

let clone = div.cloneNode(true);
document.body.append(clone);


// - Є масив:
//   ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//

let arr = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement("ul")

for (const item of arr) {
  let li = document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);
}


// - Є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


for (const element of coursesAndDurationArray) {
  let div = document.createElement("div");
  for (const key in element) {
    let li = document.createElement("li");
    li.innerText = `${key}: ${element[key]}`;
    div.appendChild(li);
  }
  document.body.appendChild(div);
}


// =========================
//   - Є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//   Завдання робити через цикли.


for (const element of coursesAndDurationArray) {
  let div = document.createElement("div");
  div.classList.add("item");
  let h1 = document.createElement("h1");
  h1.classList.add("heading");
  h1.innerText = `${element.title}`;
  let p = document.createElement("p");
  p.classList.add("description");
  p.innerText = `${element.monthDuration}`;
  div.append(h1, p);
  document.body.appendChild(div);
}


// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//   Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//

let simpsons = [
  {
    name: 'Bart',
    surname: 'Simpson',
    age: 10,
    info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
  },
  {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
    photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
  },
  {
    name: 'Marge',
    surname: 'Simpson',
    age: 38,
    info: 'Марджорі Жаклін "Мардж" Сімпсон (дівоче Був\'є) (англ. Marjorie Jacqueline "Marge" Simpson) - постійний персонаж мультиплікаційного серіалу "Сімпсони", її озвучує Джулія Кавнер. Зазвичай носить зелену сукню, червоні балетки, на шиї — намисто зі штучних перлів і їздить помаранчевим універсалом. У неї шикарне синє волосся, яке вона зазвичай збирає в дуже високу зачіску. Очі кольору горіха (19s6e). Основне заняття — домогосподарка, більшу частину часу проводить у турботі про будинок, дітей та Гомера. Мардж копіює стереотип провінційної американської домогосподарки 50-х років. Мардж – єдиний член сім\'ї, який відвідує церкву добровільно. Намагається підтримувати моральність як своєї сім\'ї, а й усього міста. Відмінно готує, особливо славляться її свинячі відбивні та зефір. Улюблена страва – локшина з олією.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
  },
  {
    name: 'Lisa',
    surname: 'Simpson',
    age: 9,
    info: 'Ліза Марі Сімпсон (англ. Lisa Marie Simpson) - героїня мультиплікаційного серіалу "Сімпсони". Середня дитина в сім\'ї, восьмирічна дівчинка, що виділяється серед інших Сімпсонів насамперед своїм розумом і розважливістю.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
  },
  {
    name: 'Maggie',
    surname: 'Simpson',
    age: 1,
    info: 'Маргарет Евелін "Меґґі" Сімпсон (англ. Margaret Evelyn "Maggie" Simpson) - персонаж мультсеріалу "Сімпсони". Вперше з\'явилася на телебаченні в шоу Трейсі Ульман, в короткометражці Good Night (англ.) рос. 19 квітня 1987 року. Меггі була придумана і розроблена карикатуристом Меттом Грейнінгом, поки він чекав на зустріч з Джеймсом Л. Бруксом. Названа на честь молодшої сестри Грейнінга. Після появи у шоу Трейсі Ульман, через три роки сім\'я Сімпсонів здобула власний серіал на телеканалі Fox, дебют відбувся 17 грудня 1989 року.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
  },
];

for (const simpson of simpsons) {
  div = document.createElement("div");
  div.classList.add("member");
  document.body.appendChild(div);
  let h3 = document.createElement("h3");
  h3.innerText = `${simpson.name} ${simpson.surname}, ${simpson.age} y.o.`;
  let p = document.createElement("p");
  p.innerText = `${simpson.info}`;
  let img = document.createElement("img");
  img.src = simpson.photo;
  div.append(h3, p, img);
}


// =========================
//   Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//

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

for (const course of coursesArray) {
  let product = document.createElement("div");
  product.classList.add("product");
  document.body.appendChild(product);

  let title = document.createElement("div");
  title.classList.add("characteristic", "title");
  title.innerText = `${course.title}`;

  let monthDuration =  document.createElement("div");
  monthDuration.classList.add("characteristic", "monthDuration");
  monthDuration.innerText = `Month duration: ${course.monthDuration}`;

  let hourDuration = document.createElement("div");
  hourDuration.classList.add("characteristic", "hourDuration");
  hourDuration.innerText = `Hour duration: ${course.hourDuration}`;

  let modules = document.createElement("ul");
  modules.classList.add("characteristic", "list");
  modules.innerText = "modules:";
  for (let item of course.modules) {
    let li = document.createElement("li");
    li.innerText = item;
    modules.appendChild(li);
  }
  product.append(title, monthDuration, hourDuration, modules);
}
