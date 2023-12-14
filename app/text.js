let a = 5;
const B = 6;

// let, const, var
// ---------------

// Define
// let - var
// const - constant
// var - deprecated

// Scope
/*
if(true) {
  const a = 'ES5';
}
console.log(a);
*/

// Hoisting
/*
var b = undefind;
console.log(b);
b = 5;
*/
// Example
/*
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function(x) {
    return function() {
      console.log(x);
    };
  }(i);
};
*/
/*
var buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function() {
    console.log(i);
  };
};
*/
// const
const ARR = [1,2,3,4,5];
ARR.push(6);
console.log(ARR);

const OBJ = {
  es: 'ES6'
};
OBJ.es = 'ES7)))';
OBJ = 'str';
console.log(OBJ);

// spread, REST
// ---------------

// Example 1 - array
/*
const num1 = [1,2,3,4];
const num2 = [5,6,7,8];
//Array.prototype.push.apply(num1, num2);
console.log([...num1, num2]);
*/
// Example 2 - object
/*
const A = {
  a: 'default',
  b: 'just_test'
};
const B = {
  a: 'value_from_b'
}
//var c = Object.assign(B, A);
let c = {
  ...A,
  ...B
}
console.log(c);
*/
// Example 3 - function
/*
const arr = [1,2,3];
function sum(a,b,c) {
  return a+b+c;
}
// sum(arr[0], arr[1], arr[2]);
// sum.apply(null, arr);
console.log(sum(...arr));
*/
// Example 1 - REST

function res(arg, arg2, ...REST) {
  console.log(arg, arg2, REST);
}
res(1, 2, 3, 4, 5, 6, 7);

// Template string
// ---------------

// Syntax
// `${dynamic_value}`;

// Example 1 - string
/*
function greet(name) {
  //console.log('Hello ' + name + '!');
  console.log(`Hello ${name}!`);
}
greet('Max');
*/
// Example 2 - URL API string
/*
const URL = '/api';
let path1 = 'test';
let path2 = 'test2';
let path3 = 'test3';

//const API_URL = URL + '/' + path1 + '/' + path2 + '/' + path3;
const API_URL = `${URL}/${path1}/${path2}/${path3}`;
console.log(API_URL);
*/
// Example 3 - Multiple string
/*
function emailMessage(name, mail, status) {
  return `
    Hello ${name},
    Your email ${mail} has been ${status}!
    Thank you for subscription!
  `
}
console.log(emailMessage('Jack', 'jack@mail.com', 'approved'));
*/
// Example 4 - Template
/*
generate() {
    return `
    <li class="news">
      <a href="${this.url}" target="_blank" class="news__link">
        <figure class="news__figure">
          <img src="${this.urlToImage}" alt="${this.title}" class="news__image">
          <figcaption class="news__description">
            <h1 class="news__title">${this.title}</h1>
            <p class="news__text">${this.description}</p>
            <span class="news__date">${new Date(this.publishedAt).toLocaleDateString()}</span>
            <cite class="news__author">${this.author}</cite>
          </figcaption>
        </figure>
      </a>
    </li>`;
  }
*/
// Example 5 - Tagging

const name = 'Jack';
console.log(toUppercase`Hello ${name}!`);
function toUppercase(litArr, value) {
  console.log(litArr, value);
  return litArr[0] + value.toUpperCase() + litArr[1];
}

// Arrow functions
// ---------------

// Example 1 - default arguments
/*
function greet(name = 'Jack', age = 20) {
  return `Hello ${name}, your age is ${age}!`;
};
console.log(greet());
*/
// Example 2 - arrow functions syntax
/*
// () => {}
const greet = (name, age) => `Hello ${name}, your age is ${age}!`
*/
// Example 3 - cases of syntax
/*
// 1) Using name:
   const FUNC = () => {};

// 2) Default syntax:
   (a,b) => {
    let sum = a + b;
    return sum;
   };

// 3) One argument:
   a => {
    let sum = a + 1;
    return sum;
   };

// 4) No arguments:
   () => {
    let sum = a + b;
    return sum;
   };

// 5) If one line, don't need `return`:
   a => a * 2;
   (a,b) => a*b;

// 6) Object literal:
   () => ({ a:2 });

// 7) IIFE:
   (() => {null})();
*/
// Example 3 - context

let person = {
  userName: 'Jack',
  greet: function() {
    window.setTimeout(() => {
      console.log(this.userName, this);
    }, 1000);
  }
};
person.greet();




 //dsvdsv

 //sdvdsvds

 // for...of
// ---------------

const names = ['Jack', 'Max', 'Leo'];

for(let name in names) {
  //console.log(name);
}


for(let index in names) {
  //console.log(names[index]);
}


for(let name of names) {
  console.log(name);
}

// Objects
// ---------------

let name = 'Jack';
let sex = 'male';
let age = 20;

let person = {
  name,
  sex,
  age,
  greet() {
    console.log(`Hello ${this.name}`);
  },
  get:password() {
    return this.name + this.age;
  }
}

person.name;
person['name'];

let firstName = 'name';
person[firstName];

// person = {
//   [firstName]: 'Max'
// }

// Object.defineProperty(person, 'password', {
//   get: function() {
//     return this.name + this.age;
//   }
// })


console.log(person);

// Class
// ---------------

class Task {
  constructor(title = Task.getDefaultTitle(), isCompleted = false) {
    this.title = title,
    this._isCompleted = isCompleted,
    Task.counter += 1
  }

  static getDefaultTitle() {
    return 'Title text';
  }

  completed() {
    this.isCompleted = true;
  }

  get isCompleted() {
    return this._isCompleted === true ? 'task is completed' : 'task is not completed'
  }
}

Task.counter = 0;

let task = new Task('Learn ES6', false);

console.log(task.isCompleted, task._isCompleted);

// Inheritance
// ---------------

class Task {
  constructor(title = '') {
    this.title = title,
    this.isCompleted = false
  }

  completed() {
    this.isCompleted = true;
  }
}

class SubTask extends Task {
  constructor(title) {
    super(title)
  }

  completed() {
    super.completed();
    console.log(`task ${this.title} is completed!`)
  }
}

let task = new Task('Learn ReactJS');
let subTask = new SubTask('Learn ES6');

task.completed();
subTask.completed();

console.log(task);
console.log(subTask);

//class declaration
class Task {};

//class expression
let Task = class Task {};

//

// Array destructuring
// ---------------

//const people = ['Jack', 'Max', 'Leo'];

// let jack = people[0];
// let max = people[1];
// let leo = people[2];

// let [jack, max, leo] = ['Jack', 'Max', 'Leo']];

// console.log(jack, max, leo);

// const rate = [1,50,100, [1000, 2000]];

// let [low, middle, high, [higher, sup]] = rate;

// console.log(low, middle, high, higher, sup);

function calculate([a,b]) {
  return [a,b];
}

let [a, b] = calculate([1, 10]);

console.log(a,b);

// Object destructuring
// ---------------

let person = {
  name: 'Jack',
  age: 20,
  address: {
    city: 'Minsk'
  }
}

//let {name = 'Max',age = 20} = {};
//let { name: personName, age: personAge } = person;
//let { address: { city = 'Brest' } } = person;
//console.log(city);

function getData({ name, age }) {
  //console.log(name, age);
  return { name, age }
}

let {name, age} = getData(person);
console.log(name, age);

// Symbols
// ---------------

// let symbol = Symbol.for('mySymbol');
// let symbolName = Symbol.keyFor(symbol)
// console.log(symbolName);


let person = {
  name: 'Jack',
  age: 20,
  [Symbol.for('password')]: 'Jack20',
  [Symbol.for('nickname')]: 'Freeman'
}

// console.log(person[Symbol.for('password')]);
console.log(Object.getOwnPropertySymbols(person));

// Promise
// ---------------

// const promise = new Promise((resolve, reject) => {
//   throw new Error('some error...');
//   setTimeout(() => {
//     if(true) {
//       resolve('promise completed!');
//     } else {
//       reject();
//     }
//   }, 1000);
// });
//
//
// promise
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(res => res.json())
  .then(data => data)
  .then(data => console.log('!!!', data))
  //.then(data => render(data))
  .catch(() => console.log('some error...'));

  // Async/Await
// ---------------
/*
const fetchData = () => Promise.resolve({
  data: ['Jack', 'Max', 'Leo']
})

const getNamesData = () => {
  fetchData()
    .then(data => {
      console.log(data);
      return 'done';
    })
}

const getNamesData2 = async () => {
  console.log(await fetchData());
  return 'done';
}

getNamesData();
getNamesData2();
console.log(getNamesData2());

const fetchData = () => Promise.reject('some error...');
const getNamesData = async () => {
  try {
    console.log(await fetchData());
  } catch(error) {
    console.log(error);
  }
}
getNamesData();
*/

const load = () => {
  Promise.resolve(5)
    .then(a => {
      Promise.resolve(10)
        .then(b => console.log(a+b))
    })
}
load();

const load2 = async () =>{
  const a = await Promise.resolve(5);
  const b = await Promise.resolve(10);
  console.log(a+b)
}
load2();

// Iterators
// ---------------
/*
let names = ['jack', 'max', 'leo'];

for (let name of names) {
  console.log(name);
}
*/

let generateNumbers = {
  start: 1,
  end: 10
}

generateNumbers[Symbol.iterator] = function() {
  let current = this.start;
  let last = this.end;

  return {
    next() {
      if(current <= last) {
        return {
          done: false,
          value: current++
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

for (let number of generateNumbers) {
  console.log(number);
}

// Generators
// ---------------
/*
function *generate() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (err) {
    console.log('Custom error: ', err);
  }
}
let iterator = generate();
console.log(iterator.next());
console.log(iterator.throw(new Error('some error...')));
console.log(iterator.next());
*/
/*
function *generateRange(start, end) {
  let current = start;
  while(current <= end) {
    yield current++;
  }
}

for (let number of generateRange(1, 10)) {
  console.log(number);
}
*/
let object = {
  *generateRange(start, end) {
    let current = start;
    while(current <= end) {
      yield current++;
    }
  }
}
for (let number of object.generateRange(1, 10)) {
  console.log(number);
}

// Set & Map
// ---------------

// Map
/*
let map = new Map();

map
  .set('str', 'string')
  .set(1, 'number')
  .set(true, 'boolean');

console.log(map.get(1));
console.log(map.get(true));
console.log(map.size);
*/

// let map = new Map([
//   ['str', 'string'],
//   [1, 'number'],
//   [true, 'boolean']
// ])

// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map.size);
// console.log(map.has(1));
// console.log(map.delete(1));
// console.log(map.size);
// console.log(map.clear());
// console.log(map.size);
// Iteration
// keys(), values(), entries()


// Set
let jack = {name: 'Jack'};
let max = {name: 'Max'};
let leo = {name: 'Leo'};

let users = new Set();

users
  .add(jack)
  .add(max)
  .add(leo)
  .add(jack)
  .add(max)
console.log(users.size);
users.forEach(user =>console.log(user));
//Methods
//add()
//delete(item)
//has(item)
//clear()

// WeackMap & WeackSet

// Modules
// ---------------
// Variables
export let one = 1;

let two = 2;
let three = 3;
export { two, three };

// Class
class Person {
  constructor(name) {
    this.name = name
  }
}

// Function
function sayHello() {
  console.log('hello!')
}

export { Person, sayHello }

// Rename
export { one as once, two as twice };

//Import
import { one, two } from './file.js';

// Rename Import
import { one as num1, two as num2 } from './file.js';

// One Import
import * as numbers from './file.js';

// default export
export default class Person {
  constructor(name) {
    this.name = name
  }
}

import Person from './file.js';
