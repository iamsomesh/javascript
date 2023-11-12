//for...of and for...in

/*
In JavaScript, the for...of and for...in loops are used for different purposes and operate on different types of iterable objects. Here's the key difference between them:

for...of loop:

Purpose: The for...of loop is used to iterate over the values of iterable objects like arrays, strings, maps, sets, and more. It provides a convenient way to access the values of an iterable one at a time.
Syntax:

for (const value of iterable) {
  // code to be executed for each value
}

for...in loop:

Purpose: The for...in loop is used to iterate over the properties (enumerable keys) of objects, including arrays and other objects. It is not meant for iterating over the values of iterable data structures, but rather for objects and their properties.
Syntax:
for (const key in object) {
  // code to be executed for each key
}

*/

// Example: for..of

const myArray = [2,34,6,7,8,4]
for (const arr of myArray){
  console.log(arr); // 2,34,6,7,8,4
}

//Example: for..in

for (const key in myArray){
  console.log(key); //0,1,2,3,4,5
}