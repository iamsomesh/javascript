//arrow function () => {} or implicit arrow function () => ()


//normal function
function one() {
  let username = "Somesh"

  console.log(username)
}
one()

//arrow function Syntex: () => {}  
//we hold this function inside varible

const chai = () => {
  username = "Somesh"
  console.log(username); //somesh
}
chai()

//explicit return arrow function means -> use of curly braces {}

const addTwo = (num1, num2) => {
  return num1+num2
}

console.log(addTwo(2,3))

//implicit return arrow function() => () , also no need to write return keyword
const addTwo1 = (num1, num2) => (num1 + num2)

// or 
// const addTwo1 = (num1, num2) => num1 + num2

console.log(addTwo1(2,4))

//if you wrap in curly braces {} you must have to write return keyword based what you want to return
//and you use () no need to write return

// use of () in implicit return
//suppose you need to return object in this condition
const returnObj = () => {username: "Somesh"}
console.log(returnObj()) //undefined

//use ()
const returnObj1 = () => ({username: "Somesh"})
console.log(returnObj1()) //{ username: 'Somesh' }



//**********************************************************************************
//use of this keyword in different differnt functions

// const abc = function(){
//   console.log(this); //logs many o/ps
// }
// abc()

// function abc1() {
//   console.log(this); //logs many o/ps
// }
// abc1()

// //arrow function
// const abc2 = () => {
//   console.log(this); //{} -> empty object
// } 
// abc2()