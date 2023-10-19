//we can pass object and array inside function


//Array inside function
const values = [2,4,5,7,8,9]
function returnArray(getValues){
  return getValues
}

console.log(returnArray(values))//[2,4,5,7,8,9]
console.log([3,4,68,9]) //we can direct pass array as well//[3,4,68,9]


//object inside function

const user = {
  username: "Somesh",
  age: 23
}

function returnUserDetails(getUser){ //we can use any name as paramaeter and used this name inside this function
  return `My name is ${getUser.username} and age is ${getUser.age}`
}

console.log(returnUserDetails(user))//My name is Somesh and age is 23

//pass object directly
console.log(returnUserDetails({
  username: "Sam",
  age: 44
}))//My name is Sam and age is 44