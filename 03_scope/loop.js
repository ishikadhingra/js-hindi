// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`)
// index = index+2
// }
// let score = 11
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <=10);
//for  of
// ["","",""]
// [{},{},{}]
const arr = [1,2,3,4,5]
for (const element of arr) {
    console.log(element);
    
}
const greeting = "helloworld"
for (const element of greeting) {
    // console.log(`Each char is ${element}`)
}
// maps
const map = new Map()
map.set('In', "India")
map.set('USA',"United States of America")
map.set('Fr', "France")
map.set('In', "India")
// console.log(map); map unique value k liye jana jata h or jis order m unhi order m rhta h 
for (const [key, value] of map) {
    // console.log(key, ':-', value);
} 
const myObject = {
    'game1' : 'nfs',
    'game2' : 'spiderman'
}
for (const [key,value] of myObject) {
    console.log(key, ':-', value);

}
