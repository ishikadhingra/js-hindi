const coding = ["js", "html","css", "react", "python"]
//high order functions
// call back func m name ni hota func k 
// coding.forEach( function(item){
// console.log(item);

// })
// use arrow function ()=>{}
// coding.forEach((item)=>{
//  console.log(item);

// } )
// function printMe(item){
//  console.log(item);

// }
// coding.forEach(printMe)
const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
         langName: "html",
        langFile: "html-1"
    },
    {
         langName: "css",
        langFile: "style-css"
    },
]
myCoding.forEach((item)=>{
console.log(item.langName);
})