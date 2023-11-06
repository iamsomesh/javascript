//for of loop -> another type of iterator

// syntax
//  for (const iterator of object) {
  
//  }

//iterate over array
const myArray = [1,2,3,4,5]

for (const arr of myArray) {
  // console.log(arr)
}//here we don't need to add condition and increment the value


//iterate over string
const greetings = "Hello World!"

for (const greet of greetings){
  // console.log(greet);
}



//********************FOR OF not work on object -> {this object -> key value} ************************************** */

const userDetails = {
  username: "iamsomesh",
  age: 23,
  city: "Bhopal"
}
console.log(userDetails);

// for (const obj of userDetails) { //for (const obj of userDetails) {
//   console.log(obj);    //TypeError: userDetails is not iterable
// }


// for (const [key, value] of userDetails) {
//   console.log(key, value);  //TypeError: userDetails is not iterable
// }