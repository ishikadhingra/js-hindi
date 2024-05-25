// object.create is used for constructor
// object literals {}
// obj.email is not the correct way apply ["email"]
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
// console.log(myobj);
myobj.email= "drishti123@gmail.com"
object.freeze(myobj)
myobj.email= "sahil123@gmail.com"
console.log(myobj);
