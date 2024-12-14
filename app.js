// Task NO 01

var globalVar = "I am a var";
let globalLet = "I am a let";
const globalConst = "I am a const";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

console.log(window.globalVar);
console.log(window.globalLet);
console.log(window.globalConst);


// Task NO 02

function Scope() {
  var varVariable = "I am a var variable";
  let letVariable = "I am a let variable";
  const constVariable = "I am a const variable";

  console.log(varVariable);
  console.log(letVariable);
  console.log(constVariable);
}
Scope();

console.log(varVariable);
console.log(letVariable);
console.log(constVariable);


// Task NO 03


{
  var varVariable = "I am var";
  let letVariable = "I am let";
  const constVariable = "I am const";
}

console.log(varVariable);
console.log(letVariable);
console.log(constVariable);



// Task NO 04


console.log(myVar);
var myVar = 10;
console.log(myVar);


// Task NO 05

//let
console.log(myLetVariable);
let myLetVariable = 10;

//const
console.log(myConstVariable);
const myConstVariable = 20;



// Task NO 06


// var
var x = 10;
var x = 20;
console.log(x);

// let 
let y = 10;
let y = 20;
console.log(y)

// const 
const z = 10;
const z = 20;

console.log(z)


// Task NO 07


// var 
var x = 10;
x = 20;
console.log(x);


// let
let y = 10;
y = 20;
console.log(y);


// const
const z = 10;
z = 20;



// Task NO 08


{
  console.log(myLetVar);
  let myLetVar = 10;
}


{
  console.log(myConstVar);
  const myConstVar = 20;
}


// Task NO 09


{

  var globleVar = 10
}
console.log(globleVar)



{
  let globleVar = 10
}
console.log(globleVar)



{
  const globleVar = 10
}
console.log(globleVar)



// Task NO 10


const firstName = "Muhammad";
const lastName = "Anas";

const fullName = `${firstName} ${lastName}`;

console.log(`Full Name: ${fullName}`);


// Task NO 11


const address = `
Karachi , Pakistan , Sindh , South Distric
`;

console.log(address);


// Task NO 12


let num1 = 5;
let num2 = 10;

let result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

console.log(result);

// Task NO 13


function multiply() {
  let numb1 = 5;
  let numb2 = 10;
  return numb1 * numb2;
}

console.log(`The product of ${num1} and ${num2} is: ${multiply()}`);


// Task NO 14



function logTemplate(strings) {

  console.log(strings);
}

let name = "MuhammadAnas";
let age = 24;

logTemplate`Hello, my name is ${name} and I am ${age} years old.`;



// Task NO 15



// Task NO 16


let currentHour = 10;

let message = currentHour < 12
  ? `Good morning! The time is ${currentHour} AM.`
  : `Good afternoon! The time is ${currentHour - 12} PM.`;

console.log(message);



// Task NO 17
const shoppingList = ['Apples', 'Bananas', 'Carrots', 'Tomatoes', 'Milk'];

let htmlList = '<ul>';

for (let i = 0; i < shoppingList.length; i++) {
  htmlList += `<li>${shoppingList[i]}</li>`;
}

htmlList += '</ul>';

console.log(htmlList);


// Task NO 18


const Backtick = `This is a backtick: \``;
console.log(Backtick);



// Task NO 19

let table = `
  <table border="1">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
`;

for (let row = 1; row <= 3; row++) {
  table += `
    <tr>
      <td>Row ${row} - Cell 1</td>
      <td>Row ${row} - Cell 2</td>
      <td>Row ${row} - Cell 3</td>
    </tr>
  `;
}

table += `
    </tbody>
  </table>
`;

console.log(table);




// Task NO 20

let ages = 20;

let canVote = ages >= 18 ? "Yes" : "No";

console.log(canVote);



// Task NO 21


let number = 7;

let evenOrOdd = (number % 2 === 0) ? "Even" : "Odd";

console.log(evenOrOdd);



// Task NO 22


let score = 85;

let grade = score >= 90 ? "A" :
  score >= 80 ? "B" :
    score >= 70 ? "C" :
      score >= 60 ? "D"
        : "F";

console.log(grade);


// Task NO 23


let isLoggedIn = true;

let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

console.log(statusMessage);



// Task NO 24

let isMember = true;
let purchaseAmount = 150;

let discount = (isMember && purchaseAmount > 100) ? (purchaseAmount * 0.10) : 0;


console.log(discount);


// Task NO 25

function maxValue() {
  let a = 10;
  let b = 20;
  return a > b ? a : b;
}


console.log(maxValue()); 


// Task NO 26

function greet(name) {
  if (name === undefined || name === "") {
    return "Hello, guest!";
  } else {
    return `Hello, ${name}!`;
  }
}
console.log(greet()); 


// Task NO 27

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const modifiedNumbers = numbers.map(num => (num % 2 === 0 ? num * 2 : num * 3));

console.log(modifiedNumbers);


// Task NO 28


const stringsArray = ["apple", "cat", "dog", "banana", "egg"];

const filteredArray = stringsArray.filter(str => str.length > 3 ? true : false);

console.log(filteredArray);


// Task NO 29


const originalArray = [1, 2, 3, 4, 5];

const copiedArray = [...originalArray];

console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);


// Task NO 30


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray);


// Task NO 31


let numberss = [10, 20, 30, 40];

let updatedNumbers = [5, ...numberss, 50];

console.log(updatedNumbers);



// Task NO 32


const originalObject = {
  name: "MuhammadAnas",
  age: 30,
  profession: "Developer"
};

const copiedObject = { ...originalObject };

console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);



// Task NO 33



const object1 = {
  key1: "value1_from_object1",
  key2: "value2_from_object1",
  key3: "value3_from_object1",
};

const object2 = {
  key2: "value2_from_object2",
  key3: "value3_from_object2", 
  key4: "value4_from_object2",
};

const mergedObject = {
  ...object1,
  ...object2,
};

console.log(mergedObject);




// Task NO 34


const user = {
  name: "Muhhammad Anas",
  age: 30,
  email: "anas@example.com"
};

const updatedUser = {
  ...user,
  email: "anasmail@example.com",
  address: "123 Main St"
};

console.log(updatedUser);




// Task NO 35



function sum(a, b, c) {
  return a + b + c;
}

const numbers = [10, 20, 30];

const result = sum(...numbers);

console.log(result);




// Task NO 36



function combineArrays(...arrays) {
  return arrays.flat();
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combinedArray = combineArrays(array1, array2, array3);
console.log(combinedArray);



// Task NO 37



function multiply(first, ...args) {
  return args.map(arg => arg * first);
}

const result = multiply(2, 3, 4, 5, 6);

console.log(result);




// Task NO 38



let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let copiedArray = [...nestedArray];

copiedArray[0][0] = 10;
copiedArray[1][1] = 20;  

console.log("Original Array:", nestedArray);
console.log("Copied Array:", copiedArray);




// Task NO 39



function sum(...args) {
  return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum(10, 20));   
console.log(sum(5, 5, 5, 5)); 
console.log(sum(7));       
console.log(sum());




// Task NO 40

function average(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return sum / numbers.length;
}

console.log(average(1, 2, 3));    
console.log(average(5, 10, 15, 20));                  
console.log(average(7));                               
console.log(average());                


// Task NO 41


const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;

console.log('First:', first);
console.log('Rest:', rest);   



// Task NO 42


const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

const [, , ...remainingColors] = colors;

console.log(remainingColors);




// Task NO 43



const person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: '123 Main St, Springfield, IL'
};

const { name, email, ...rest } = person;

console.log(name);
console.log(email);
console.log(rest);   




// Task NO 44



const student = {
  id: 1,
  name: "John Doe",
  grades: [90, 85, 88],
  info: {
    age: 20,
    major: "Computer Science"
  }
};

const { id, name, info: { major }, ...rest } = student;

console.log(id);    
console.log(name);    
console.log(major);                     
console.log(rest); 
                                           



// Task NO 45



function filterEven(...numbers) {
  return numbers.filter(num => num % 2 === 0);
}

console.log(filterEven(1, 2, 3, 4, 5, 6)); 
console.log(filterEven(10, 15, 20));       
console.log(filterEven(7, 9, 13, 16));    
console.log(filterEven(2, 4, 6, 8, 10)); 




// Task NO 46



function combineAndSort(...arrays) {
  return [].concat(...arrays).sort((a, b) => a - b);
}

const array1 = [3, 1, 4];
const array2 = [9, 2, 5];
const array3 = [8, 6, 7];

const result = combineAndSort(array1, array2, array3);
console.log(result);




// Task NO 47




const fruits = ["apple", "banana", "cherry"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);  
console.log(secondFruit); 
console.log(thirdFruit);




// Task NO 48



const colors = ["red", "green", "blue", "yellow"];

const [primaryColor, , tertiaryColor] = colors;

console.log("Primary Color:", primaryColor);
console.log("Tertiary Color:", tertiaryColor);







// Task NO 49




const numbers = [1, 2, 3, 4, 5];

const [firstNumber, ...remainingNumbers] = numbers;

console.log("First Number:", firstNumber)
console.log("Remaining Numbers:", remainingNumbers);






// Task NO 50


const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const { name, age, city } = person;

console.log(name); 
console.log(age);
console.log(city);



// Task NO 51



const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2021
};

const { make: carMake, model: carModel, year: carYear } = car;

console.log(carMake); 
console.log(carModel); 
console.log(carYear);  



// Task NO 52


const settings = {
  theme: 'dark',
};

const { theme, language = 'English' } = settings;

console.log(theme);  
console.log(language); 



// Task NO 53


const nestedArray = [[1, 2], [3, 4], [5, 6]];

const [[a], [b], [c]] = nestedArray;

console.log(a); 
console.log(b); 
console.log(c);




// Task NO 54


const profile = {
  username: 'john_doe',
  details: {
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield, USA'
  }
};

const { username, details: { email, address } } = profile;

console.log(username);
console.log(email);   
console.log(address);   



// Task NO 55


const data = {
  id: 1,
  info: [
    { name: "Alice" },
    { age: 25 }
  ]
};

const { id, info: [{ name }, { age }] } = data;

console.log(id);  
console.log(name); 
console.log(age);  



// Task NO 56


function printCoordinates([x, y]) {
  console.log(`x: ${x}, y: ${y}`);
}

printCoordinates([5, 10]);
printCoordinates([15, 20]); 
printCoordinates([100, 200]); 




// Task NO 57


function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user1 = { name: "Alice", age: 30 };
const user2 = { name: "Bob", age: 25 };

displayUser(user1);  
displayUser(user2);  



// Task NO 58

const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
};

const propertyNames = Object.keys(book);

console.log(propertyNames);


// Task NO 59


const student = {
  name: 'John Doe',
  age: 16,
  grade: '10th',
  school: 'Greenwood High'
};

const properties = Object.keys(student);

console.log(properties.length);


// Task NO 60


const product = {
  name: 'Laptop',
  price: 1200,
  category: 'Electronics'
};

Object.keys(product).forEach(key => {
  console.log(`${key}: ${product[key]}`);
});



// Task NO 61


const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genre: "Sci-Fi"
};

const propertyValues = Object.values(movie);

console.log(propertyValues);



// Task NO 62


const scores = {
  math: 90,
  science: 85,
  english: 88
};

const values = Object.values(scores);

const totalSum = values.reduce((acc, value) => acc + value, 0);

console.log('Total Sum:', totalSum);



// Task NO 63


const user = {
  username: 'johndoe',
  email: 'johndoe@example.com',
  location: 'New York'
};

const values = Object.values(user);

values.forEach(value => {
  console.log(value);
});



// Task NO 64


const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2021
};

const entries = Object.entries(car);

console.log(entries);





// Task NO 65


const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

const personArray = Object.entries(person);

console.log(personArray);



// Task NO 66


const settings = {
  theme: 'dark',
  notifications: true,
  privacy: 'high'
};

Object.entries(settings).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});




// Task NO 67


const inventory = {
  apples: 5,
  bananas: 12,
  oranges: 15,
  grapes: 8
};

const keysWithValueGreaterThan10 = Object.keys(inventory).filter(key => inventory[key] > 10);

console.log(keysWithValueGreaterThan10);




// Task NO 68


const temperatures = {
  morning: 15, 
 afternoon: 22,
  evening: 18    
};

const fahrenheitTemperatures = Object.entries(temperatures).map(([time, tempInCelsius]) => {
  const tempInFahrenheit = (tempInCelsius * 9/5) + 32;
  return [time, tempInFahrenheit];
});

const transformedTemperatures = Object.fromEntries(fahrenheitTemperatures);

console.log(transformedTemperatures);



// Task NO 69


const roles = {
  admin: 'Administrator',
  editor: 'Content Editor',
  viewer: 'Content Viewer'
};

const swappedRoles = Object.fromEntries(
  Object.entries(roles).map(([key, value]) => [value, key])
);

console.log(swappedRoles);



// Task NO 70


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterAndMap(array, filterFn, mapFn) {
  return array.filter(filterFn).map(mapFn);
}

const isOdd = num => num % 2 !== 0;

const square = num => num * num;

const result = filterAndMap(numbers, isOdd, square);

console.log(result);



// Task NO 71


// Create an array of words
const words = ["apple", "banana", "cherry", "date"];

function sortAndReduce(array, sortFn, reduceFn) {
  const sortedArray = array.sort(sortFn);
  
  return sortedArray.reduce(reduceFn);
}

function sortAlphabetically(a, b) {
  return a.localeCompare(b);
}

function concatenate(accumulator, currentValue) {
  return accumulator + currentValue;
}

const result = sortAndReduce(words, sortAlphabetically, concatenate);

console.log(result);



// Task NO 72


function printGreeting(message) {
  console.log(message);
}


function greet(name, callback) {
  const greetingMessage = `Hello, ${name}!`;
  callback(greetingMessage);
}

greet('Alice', printGreeting);



// Task NO 73


function fetchData(callback) {
  setTimeout(() => {
    const data = { message: "Data fetched successfully!" };
    
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data.message);
}

fetchData(displayData);



// Task NO 74


const add = (a, b) => {
return a + b
}
console.log(add(20,30))

// Task NO 75


const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);




// Task NO 76

function outer() {
  let x = 10;

  function inner() {
  }

  inner();
}

outer();


// Task NO 77


function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); 
counter2();



// Task NO 78


function greet(name, message = "Hello") {
  console.log(message + ", " + name + "!");
}


greet("Alice");  
greet("Bob", "Good morning"); 



// Task NO 79


function calculateArea(width = 10, height = 5) {
  return width * height;
}

console.log(calculateArea()); 

console.log(calculateArea(7, 8));  




// Task NO 80


const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);



// Task NO 81


const words = ["apple", "banana", "cherry"];

const uppercaseWords = words.map(word => word.toUpperCase());

console.log(uppercaseWords);



// Task NO 82


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);



// Task NO 83


const words = ["apple", "banana", "cherry", "date"];

const longWords = words.filter(word => word.length > 5);

console.log(longWords);




// Task NO 84


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
  console.log(number);
});



// Task NO 85


const words = ["apple", "banana", "cherry"];

words.forEach(word => {
  console.log(word.length);
});



// Task NO 86


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);



// Task NO 87


const words = ["Hello", "world", "this", "is", "JavaScript"];

const result = words.reduce((accumulator, currentWord) => {
  return accumulator + " " + currentWord;
});

console.log(result);



// Task NO 88


const numbers = [1, 3, 5, 7, 8];

const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log(hasEvenNumber);



// Task NO 89


const words = ["elephant", "giraffe", "hippopotamus"];

const allLongWords = words.every(word => word.length > 5);

console.log(allLongWords);  



// Task NO 90


const numbers = [1, 3, 5, 7, 8];

const firstEvenNumber = numbers.find(num => num % 2 === 0);

console.log(firstEvenNumber);



// Task NO 91


const words = ["apple", "banana", "cherry", "date"];

const longWord = words.find(word => word.length > 5);

console.log(longWord);



// Task NO 92


const numbers = [1, 3, 5, 7, 8];

const index = numbers.findIndex(num => num % 2 === 0);

console.log(index);



// Task NO 93



const words = ["apple", "banana", "cherry", "date"];

const index = words.findIndex(word => word.length > 5);

console.log(index);




// Task NO 94

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => {
  console.log("Hello, world!");
});



// Task NO 95


function fetchData() {
  return new Promise((resolve, reject) => {
  
      const data = { id: 1, name: 'John Doe' };
      resolve(data); 
    }); 
  ;
}

fetchData()
  .then((data) => {
    console.log('Fetched Data:', data); 
  })
  .catch((error) => {
    console.error('Error:', error); 
  });



// Task NO 96



function fetchUserData() {
  return new Promise((resolve, reject) => {
    
    const userData = {
      name: "John Doe",
      
    };

    
    if (!userData.age) {
      reject("Error: User data is missing the age property.");
    } else {
      resolve(userData);
    }
  });
}

fetchUserData()
  .then((data) => {
    console.log("User data fetched successfully:", data);
  })
  .catch((error) => {
    console.error(error);
  });



// Task NO 97


function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; 
      if (success) {
        resolve({ temperature: 25, condition: 'Sunny', city: 'New York' });
      } else {
        reject('Failed to fetch weather data. Please try again later.');
      }
    }, 1000);
  });
}


getWeather()
  .then((data) => {
    console.log('Weather data fetched successfully:', data);
  })
  .catch((error) => {
    console.error('Error fetching weather data:', error);
  });


// Task NO 98


function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sayHello() {
  await delay(2000); 
  console.log("Hello, world!");
}

sayHello();



// Task NO 99


async function fetchUserData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return await response.json();
}

async function getUserData() {
  try {
    const userData = await fetchUserData();
    console.log("User data fetched successfully:", userData);
  } catch (error) {
    console.error("An error occurred while fetching user data:", error.message);
  }
}

getUserData();



// Task NO 100



function fetchUser() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({ name: 'John Doe', age: 30 });
      }, 1000); 
  });
}

function fetchPosts(user) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve([
              { id: 1, title: 'First Post', content: 'This is the first post' },
              { id: 2, title: 'Second Post', content: 'This is the second post' },
          ]);
      }, 1000);
  });
}

async function getUserAndPosts() {
  try {
      const user = await fetchUser();
      console.log('User Data:', user);

      const posts = await fetchPosts(user);
      console.log('User Posts:', posts);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

getUserAndPosts();



// Task NO 101


const fetchUser = (userId) => {
  const users = {
    1: { id: 1, name: "Alice" },
    2: { id: 2, name: "Bob" },
  };

  return new Promise((resolve, reject) => {
    const user = users[userId];
    if (user) {
      resolve(user);
    } else {
      reject(new Error(`User with ID ${userId} not found`));
    }
  });
};

const getUserInfo = async (userId) => {
  try {
    const user = await fetchUser(userId);
    console.log("User found:", user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
};

getUserInfo(1);
getUserInfo(3);


// Task No 102


function apiCall(endpoint) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000 + 500; 
    setTimeout(() => {
      if (Math.random() < 0.9) { 
        resolve(`Data from ${endpoint}`);
      } else {
        reject(`Error fetching data from ${endpoint}`);
      }
    }, delay);
  });
}

async function getData() {
  try {
    console.log("Starting API calls...");

    const data1 = await apiCall("Endpoint 1");
    console.log(data1);

    const data2 = await apiCall("Endpoint 2");
    console.log(data2);

    const data3 = await apiCall("Endpoint 3");
    console.log(data3);

    console.log("All API calls completed.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

getData();
