
//declare symbol and use in this below object
const mySym = Symbol("i am symbol")
console.log(mySym, typeof mySym);//Symbol(i am symbol) symbol
//now I want to use symbol as a key in object how to use?

const userObject = {
  name: "Somesh", //here we can also use "name": "somesh" -> key as "name": but we use name: but behind the scene system will automatically take "name": as string
  age: 24,
  city: "indore",
  isLoggedIn: true,
  loggedInCount: ["monday", "friday"],
  // mySym: "symbol"//it is still string not a symbol
  [mySym]: "hello", //now we can use [mySym] above declared symbol as key for this object and this [mySym] symbol refrence to above mySym symbol now
  
  
  // [anotherSym]: "hii" //it will give error -> anotherSym is not defined
}

console.log(typeof userObject.mySym); //string -> it is not type of symbol

//way to access symbol inside object -> we can't access mySym userObject["mySym"] because mySym is symbol
console.log(userObject[mySym]); //hello -> if we want to access symbol we can use objectname[]-> without ""

console.log(userObject);
/*
{
  name: 'Somesh',
  age: 24,
  city: 'indore',
  isLoggedIn: true,
  loggedInCount: [ 'monday', 'friday' ],
  [Symbol(i am symbol)]: 'hello'
}
*/

