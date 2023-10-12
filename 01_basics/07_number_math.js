//Number

const score = 300 //in this condition score collect number data type implicity using dynamic typing
console.log(score)

const balance = new Number(30) //here we can defined number type value using new keyword , here it is explicity defined
console.log(balance)//[Number: 30]

//methods in number type

//toString()

console.log(balance.toString()) //it will give 30 but when we typeof(balance) it gives String type value
console.log(balance.toString().charAt(0).length) //when it become string we can perform many operation on string using string functions


//toFixed(), number of digits after decimal points, also round off decimal value into integer
console.log(balance.toFixed(2)) //30.00

const anotherNum = 30.39485
const aaN = anotherNum.toFixed(3) //30.395 //return type string
console.log(aaN, typeof aaN) //string


console.log(anotherNum.toFixed()); //30

//toLocaleString Converts a number to a string by using the current or specified locale.

const hundreds = 100000000
console.log(hundreds.toLocaleString()) //defualt in us standards //100,000,000
console.log(hundreds.toLocaleString("en-IN")) //10,00,00,000 -> indian standard


//**************************************Math library or Math object in JS*************************************************** */

console.log(Math)
console.log(Math.round(232.443)); //round of to integer value
console.log(Math.PI) //predefined property of Math library
console.log(Math.abs(-32)); //Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

console.log(Math.ceil(5.4)); //6 Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.floor(4.9)); //4 Returns the greatest integer less than or equal to its numeric argument.


//IMP Math property which are most used

//Math.random()

console.log(Math.random()); //Returns a pseudo random number between 0 and 1.
console.log(Math.random() );
const randomNumber = (Math.random() * 10)
console.log(Math.round(randomNumber));

//also we have to find the random value from in between min and max we can use this trick

const min  = 10
const max = 20

console.log(Math.round(Math.random() * (max - min + 1) + min )); // generate random  value in between 10-20