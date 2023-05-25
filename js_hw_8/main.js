// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let users = [
  new User(12, "Hanna", "Illienko", 'hanna@gmail.com', 380679674667),
  new User(13, "Ostap", "Vyshnia", 'ostap@gmail.com', 380679634579),
  new User(14, "Andrii", "Chub", 'andrii@gmail.com', 380679673456),
  new User(15, "Olia", "Melnyk", 'olia@gmail.com', 380679634345),
  new User(16, "Lesia", "Mokra", 'lesia@gmail.com', 380679634290),
  new User(17, "Hanna", "Vyshnia", 'hanna3@gmail.com', 380679674233),
  new User(18, "Ostap", "Chub", 'ostap2@gmail.com', 380679634000),
  new User(19, "Andrii", "Hirkyi", 'andrii1@gmail.com', 380679673456),
  new User(20, "Olia", "Melnyk", 'olia4@gmail.com', 380969634345),
  new User(21, "Lesia", "Batiuk", 'lesia5@gmail.com', 380689635467),
];

console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

users = users.filter(value => (!(value.id % 2)));
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users = users.sort((a, b) => (a.id - b.id));
console.log(users);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
  constructor(id, name, surname, email, phone, [...order]) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = [...order];
  }
}

client1 = new Client(12, "Hanna", "Illienko", 'hanna@gmail.com', 380679674667, ["ноутбук", "настільна лампа", "квіти"]);
client2 = new Client(13, "Ostap", "Vyshnia", 'ostap@gmail.com', 380679634579, ["велосипед"]);
client3 = new Client(14, "Andrii", "Melnyk", 'andrii1@gmail.com', 380679634579, ["ніж", "гамак"]);
client4 = new Client(15, "Olia", "Vyshnia", 'ol12345@gmail.com', 380679634579, ["подарунковий папір", "ножиці"]);
client5 = new Client(16, "Hanna", "Melnyk", 'hanna12345@gmail.com', 380679634579, ["ноутбук"]);
client6 = new Client(17, "Lesia", "Hirkyi", 'lesia57@gmail.com', 380679634579, ["стілець розкладний"]);
client7 = new Client(18, "Kolia", "Chubaruk", 'kolia@gmail.com', 380679634677, ["ноутбук"]);
client8 = new Client(19, "Serhii", "Vyshnia", 'serhii@gmail.com', 380679634562, ["ноутбук", "фотоапарат"]);
client9 = new Client(20, "Lesia", "Vyshnia", 'lesia5@gmail.com', 380679634010, ["ноутбук", "комп'ютерна мишка"]);
client10 = new Client(21, "Serhii", "Chub", 'chub@gmail.com', 380679634577, ["гамак"]);

clients = [];
clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// clients = new Array(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients = clients.sort((a, b) => (a.order.length - b.order.length));
console.log(clients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engineVolume) {
  this.model = model;
  this.producer = producer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineVolume = engineVolume;
  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  }
  this.info = function () {
    console.log(
      `модель — ${this.model}\n`,
      `виробник — ${this.producer}\n`,
      `рік випуску — ${this.year}\n`,
      `максимальна швидкість — ${this.maxSpeed}\n`,
      `об'єм двигуна — ${this.engineVolume}\n`
    );
    if (this.driver) {
      console.log(
        `водій(ка) — ${this.driver.name}, ${this.driver.age}\n`
      );
    }
  }
  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = this.maxSpeed + newSpeed;
  }
  this.changeYear = function (newValue) {
    this.year = newValue;
  }
  this.addDriver = function ({...driver}) {
    this.driver = {...driver};
  }
}

let car1 = new Car("SUV", "Renault", 2018, 250, 2);
console.log(car1)
car1.drive()
car1.addDriver({name: "Vasyl", age: 32})
car1.info()
car1.increaseMaxSpeed(20)
console.log(car1.maxSpeed);
car1.changeYear(2019);
car1.info()


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Cars {
  constructor(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
      console.log(`$їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
      console.log(
        `модель — ${this.model}\n`,
        `виробник — ${this.producer}\n`,
        `рік випуску — ${this.year}\n`,
        `максимальна швидкість — ${this.maxSpeed}\n`,
        `об'єм двигуна — ${this.engineVolume}\n`
      );
      if (this.driver) {
        console.log(
          `водій(ка) — ${this.driver.name}, ${this.driver.age}\n`
        )
      }
    }
    this.increaseMaxSpeed = function (newSpeed) {
      this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
      this.year = newValue;
    }
    this.addDriver = function ({...driver}) {
      this.driver = {...driver};
    }
  }
}

let car2 = new Cars("SUV", "Renault", 2018, 250, 2);
car2.info()


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

let cinderellas = [
  new Cinderella("Hanna", 28, 39),
  new Cinderella("Iryna", 29, 38),
  new Cinderella("Olena", 30, 40),
  new Cinderella("Olia", 24, 39),
  new Cinderella("Olena", 35, 37),
  new Cinderella("Vira", 32, 39),
  new Cinderella("Tonia", 31, 36),
  new Cinderella("Ania", 32, 41),
  new Cinderella("Lida", 30, 42),
  new Cinderella("Lesia", 25, 41)
];

class Prince {
  constructor(name, age, shoesSize) {
    this.name = name;
    this.age = age;
    this.shoesSize = shoesSize;
  }
}

prince = new Prince("Andrii", 32, 40);

let cinderella;
for (person of cinderellas) {
  if (person.footSize === prince.shoesSize) {
    cinderella = person;
  }
}
console.log(cinderella)

let findCinderella = (arr, num) => (arr.find(value => value.footSize === num));

console.log(findCinderella(cinderellas, prince.shoesSize));
