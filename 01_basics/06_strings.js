const name= "Sumit"
const age =21;

console.log(`My name is ${name} and age is ${age}`);

const userName = new String('sumit-kush-07')

// console.log(userName[0]);
// console.log(userName.__proto__);


// console.log(userName.length);
// console.log(userName.toUpperCase());
// console.log(userName.charAt(2));
// console.log(userName.indexOf('t'));

const newString = userName.substring(0, 4)
console.log(newString);

const anotherString = userName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sumit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sumit.com/sumit%207kush"

console.log(url.replace('%20', '-'))

console.log(url.includes('shiny'))

console.log(userName.split('-'));