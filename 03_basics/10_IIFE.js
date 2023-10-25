//Immediately Invoked Function Expression - is a JavaScript function that runs as soon as it is defined 0r Self-Executing Anonymous Function

//main use case
//1. This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

//syntax (funtion())(execute); or ()();
// (function(){

// })();

// or

// (() => {
  //
// })(); - using arrow function

//


//example -senario - Suppose we want when I run my application and when application is run instan my db connection is also connected in this scenario IIFE is used and many use case

//with normal function -> Named iife
(function chai(){
  console.log('DB CONNECTED')
})();//; is must required without ; it will not execute another function

//using arrow function
( () => {
  console.log('DB CONNECTED TWO');
})();

(()=>( console.log('DB CONNECTED from implicit return arrow function') ))();

//let's pass some argument 
((num1, num2) => ( num1 + num2));console.log((5,6));

//ex
((name) => {
  console.log(name)
})('somesh');