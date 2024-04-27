// Categorisation is based upon how data is being stored
// in memory and is being accessed

//  Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// primitives are call by value
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
myFunction()

console.log(typeof anotherId);


/////////// Stack and Heap memory in js//////

let userName="Sumit";
let userName2= userName;
userName2= "Kush";
console.log(userName);
console.log(userName2);

let user1 ={
    "name":"Sumit"
}
let user2=user1
user2.name="Kush";

console.log(user1.name);
console.log(user2.name);