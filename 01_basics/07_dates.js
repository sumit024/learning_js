// type of Date is Object////
let myDate= new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toLocaleString());

let myCreatedDate= new Date(2023, 0, 15)
console.log(myCreatedDate.toDateString())
let myCreatedDate2= new Date("2023-1-15")
console.log(myCreatedDate2.toDateString())

console.log(myCreatedDate.getDay())
console.log(myCreatedDate.getDate())
console.log(myCreatedDate.getMonth())
console.log(myCreatedDate2.toLocaleString())
console.log(myCreatedDate2.toLocaleString(
    'default',{
        weekday:"long"
    }
))