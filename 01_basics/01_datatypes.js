// alert("3+3");
//  console.log(alert); we  are using node js not browser.

// use strict use as a code new version


// this is node js not in browser

// let age = 19;
//nunber 12344
// bigint
// null empty
// boolean
// string
// null 
// undefined means not declaring a value
// symbol  unique these are primitive datatype
// object non primitive
console.log(typeof undefined);


// stack primitive -->  heap -> non primitive
let ishika = "text";
let ishika2= ishika;
ishika2= "dhingra";
// console.log(ishika);
// console.log(ishika2);



let userone={
    mail:"ishika@gmail.com",
    phone: 283838,
}
let  usertwo= userone;
userone.mail = "dhingra@gmail.com";
console.log(userone.mail)
console.log(usertwo.mail)