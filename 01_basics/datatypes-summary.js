//There are two types of data types
// Categgorize - the difference comes under in picture how to store data in memory and how we can access data through memory on the basis of this concept we have 2 data types
//Primitive - Call by value
//Non-Primitive/reference type - Call by reference


//Primitive/call by value->   7-types , String, Number, Boolean, Null-> Empty ek dum khali, not zero, Undefined, BigInt, Symbol

//Non-Primitive/reference type - Call by reference -> Array, Objects, functions


//Primitive
let userName = "somesh"//string
let userAge = 123//number
const userLoggedIn = false//booleam
const userTemperature = null//object
let userEmail;//undefined
const userId = Symbol("123")
const anotherUserId = Symbol("123")//symbol

console.log(userId === anotherUserId, userId, anotherUserId, typeof(userId))

//Non-Primitive/reference type -> Always return type-> object 

const myArray = ["hello", "hiii", "xyz"]

const myObject = {
  name: "somesh",
  age: 23
}

const myFunction = function(){
  console.log("hello world")
}

console.log(typeof(myArray))//object
console.log(typeof(myObject))//object
console.log(typeof(myFunction)) //function object