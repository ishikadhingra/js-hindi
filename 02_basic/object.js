// object.create is used for constructor
// object literals {}
// obj.email is not the correct way apply ["email"]
//Object.create constructor method
const mysym = Symbol("key1")
const myobj = {
name : "Ishika Dhingra",
[mysym]: "key1",
age : 23,
location : "Modinagar",
qualification: "BCA",
isloggedIn: "FALSE",
email: "ishikadhingra9924@gmail.com",



}
// console.log(myobj["email"])
// console.log(myobj[mysym])
myobj.email = "ishikadhingra9924@gmail.com"
Object.isFrozen(myobj)
myobj.email = "dhrishti@2025gmail.com"
console.log(myobj)
