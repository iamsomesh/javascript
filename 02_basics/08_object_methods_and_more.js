const tinderUser = new Object
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samm"
tinderUser.loggedIn = false

// console.log(tinderUser);//{} there is no diff in both the declaration gives the same o/p


//*************************object inside object**********************************
const user = {
  email: "abc@gmail.com",
  fullname: {
    userfullname: {
      first_name: "Somesh",
      last_name:  "Yadav"
    }
  }
}
console.log(user);
console.log(user.fullname);//{ userfullname: { first_name: 'Somesh', last_name: 'Yadav' } }
console.log(user.fullname.userfullname.first_name); //somesh
//optional chaining ?  console.log(user.fullname?.userfullname.first_name);

//Methods in obj

//Merge two objects

const obj1 = { name: "somesh", email: "abc@gmail.com" }
const obj2 = { isLoggedIn: false, age: 23 }
//combine two object -> X not good way
// const obj3 = {obj1, obj2} //but it not merge it takes object inside this two objects
// console.log(obj3);
// {
//   obj1: { name: 'somesh', email: 'abc@gmail.com' },
//   obj2: { isLoggedIn: false, age: 23 }
// }

//combine using assign**************IMP********************
const obj3 = Object.assign(obj1, obj2)//also use optional paramteter safe way const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);//{ name: 'somesh', email: 'abc@gmail.com', isLoggedIn: false, age: 23 }
//it merege the soruce object into target object and return target object
console.log(obj1)//{ name: 'somesh', email: 'abc@gmail.com', isLoggedIn: false, age: 23 }

console.log(obj1 === obj3); //true

// but best way to combine object is using spread operator ...
const obj4 = {...obj1, ...obj2}
console.log(obj4);//{ name: 'somesh', email: 'abc@gmail.com', isLoggedIn: false, age: 23 }


//when we find the keys of object using Object.keys but it return the array 
console.log(Object.keys(obj4))//[ 'name', 'email', 'isLoggedIn', 'age' ] -> Also we can iterate on this array as well

//get the values
console.log(Object.values(obj4))//[ 'somesh', 'abc@gmail.com', false, 23 ]

//entries -> get array inside array of object key value pairs
console.log(Object.entries(obj4));//[[ 'name', 'somesh' ],[ 'email', 'abc@gmail.com' ],[ 'isLoggedIn', false ],[ 'age', 23 ]]


//when data comes from database, it generally comes array of object form
const users1 = [
  {
    email: "abc@gmail.com",
    age: 32
  },
  {
    email: "abc@gmail.com",
    age: 32
  },
  {
    email: "abc@gmail.com",
    age: 32
  }
]

console.log(users1[0].age); //32 Also here I use indexing but we can use array method like map and all
console.log(typeof users1); //object

//to check specific property exists within an object and return true or false accordingly.
console.log(tinderUser.hasOwnProperty("name")); //true