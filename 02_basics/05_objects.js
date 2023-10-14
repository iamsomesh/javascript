//object literals

const user = {
  name: "Somesh", //here we can also use "name": "somesh" -> key as "name": but we use name: but behind the scene system will automatically take "name": as string
  age: 24,
  city: "indore",
  isLoggedIn: true,
  loggedInCount: ["monday", "friday"],
  "last_name": "yadav" //console.log(user.full_name)//undefined when we are use string as key we can not access using (.) dot

}

console.log(user); /*{
  name: 'Somesh',
  age: 24,
  city: 'indore',
  isLoggedIn: true,
  loggedInCount: [ 'monday', 'friday' ]
}*/

console.log(typeof user); //object

//adding more key value to existing object
user.friends = ["abc", "xyz"]

console.log(user); /*{
  name: 'Somesh',
  age: 24,
  city: 'indore',
  isLoggedIn: true,
  loggedInCount: [ 'monday', 'friday' ],
  friends: [ 'abc', 'xyz' ]
}*/
//access individual value of object using (.)dot, using [""]


//access name of object
console.log(user.name);

//also access using [""]
console.log(user["name", "age"]);

//want to change the name of above object
user.name = "YadavSomesh" //overide the name of object
console.log(user);

//Freeze or lock the value of object then we can not modify the object
Object.freeze(user) //-> Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

user.name = "Back to somesh after freeze"
console.log(user);

