// object literals

const demoSym= Symbol('Kushwaha')
const user={
    name:'Sumit',
    age:24,
    [demoSym]:'Kushwaha',
    email:'sumit@yopmail.com',
    isLoggedIn:true,

}
//console.log(user);
//console.log(user.email);
//console.log(user["email"]);
//console.log(user.demoSym);  //undefined
//console.log(user[demoSym]); //Kushwaha

user.email= "kush@yopmail.com"

console.log(user.email);

//Object.freeze(user)
user.email= "kush1@yopmail.com" // This won't modify
console.log(user.email);

user.greeting = function(){
    console.log("Hello. Good day.")
}
user.greetingTwo = function(){
    console.log(`Hello. Good day ${this.name}`)
}
console.log(user.greeting());
console.log(user.greetingTwo());