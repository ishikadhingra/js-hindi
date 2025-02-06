const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc,curr){
   console.log(`acc: ${acc} and curr:${curr}`);
    return acc+curr
},3)
console.log(myTotal)
//const total = mynums.reduce((acc,curr)=>(acc+curr),-)
