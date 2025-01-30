// Immediately invoked function expre3ssion
(function chai (){
    //name iife
    console.log(`DB CONNECTED`);

})();
((name)=>{
    //unnamed iife
    console.log(`${name}`);

})('ishika');


// ()-> function ki defination likhte h
// ()-> function ko execute krta h 
// global scope k pollution s problem hoti h layi baar to global scope k var ya declaration  uska pollution ko htana k liye hm iife k use krta h 