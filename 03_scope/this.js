const user = {
username: "isha",
price: 999,

welcomeMessage : function (){
     console.log(`${this.price} , this is your new website`)
 console.log(this);
}
}
user.welcomeMessage();
// explicit return implicit return 

// function chai (){
//     let user = 'isha ';
//     console.log(this.user);
// }
// chai ()
// current context ko refer krta h this keyword  
// basic arrow function
// const adone = (num1, num2) =>{
//     return (num1+num2)
// }
// console.log(adone(3,8))
// // implicit return
// const adone1 = (num1, num2) =>  (num1+num2)

// console.log(adone1(3,8))
const month = "march"
switch (month) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
            console.log("feb");
            break;
    case "march":
            console.log("march");
            // break;
            case "april":
                console.log("april");   
    default:("may")
        break;
}
// falsy value  0, -0, 0n, null, undefined, nan, ""
// true values " ", "0", "false", [], {}, functio(){}
// ternary operator 
const icetea = 500
icetea <=400 ? console.log("yes"):console.log("no");
//condition ? true :false 
