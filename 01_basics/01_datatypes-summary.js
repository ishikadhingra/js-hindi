// primitive
// 7 types : string, number, boolean, null, undefined, symbol, Big Int
// reference type (non-primitive)
// arrays, objects, functions
const score  =100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId)
const bigNumber = 4848484848483448n
const hero= ["isha", "popy", "sahil"]
let myObj={
    name:"isha",
    age:22,
}

const myfunction = function(){
console.log("helloworld");
}
console.log(typeof anotherId);