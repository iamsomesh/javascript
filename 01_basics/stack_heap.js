//stack and heap memory

//We can store all the primitive data types in stack memory -> copy the element/duplicate
//But 
//non-primitve data types store in heap and it's not copy another it just take it refernce


//Stack Memory concept
let myName = "Somesh"

let myFriendName = myName  //in this condition not refence the main myName varible, it copy this value and then put in this varible not change original varible not affect first varible

console.log(myName)
console.log(myFriendName)

//now change the value of myFriendName

myFriendName = "Hitesh"

console.log(myFriendName)

//Heap Memory concept

let myObject = {
  name: "Somesh",
  age: 25
}
console.log(myObject)

myObject.age = 32

// let anotherObject = {
//   name: myObject.name,
//   age: "34"
// }

let anotherObject = myObject
console.log(anotherObject)


anotherObject.name = "Hitesh" //When I change the name of anotherObject object it actual change the refernece of actual object in heap memory 
console.log(anotherObject.name) //Hitesh
console.log(myObject)

// myObject --> ------------------
//               {
//                 name: "Somesh",
//                 age: 25
//               }
//              -------------------

// anotherObject = myObject
// anotherObject.name = ""