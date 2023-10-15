//we can use function inside object, and use as key
//also we can use function as a variable in js


const user = {
  name: "Somesh", //here we can also use "name": "somesh" -> key as "name": but we use name: but behind the scene system will automatically take "name": as string
  age: 24,
  city: "indore",
  isLoggedIn: true,
  loggedInCount: ["monday", "friday"]
}

//lets add one more key as function in existing user object

user.greeting = function(){
  console.log("Hello from function");
}

//here we can see user.greeting and  user.greeting()

console.log(user.greeting); //greeting: [Function (anonymous)]--> function is not executed yet it just gives us reference
console.log(user.greeting());//Hello from function

console.log(user);
/*
{
  name: 'Somesh',
  age: 24,
  city: 'indore',
  isLoggedIn: true,
  loggedInCount: [ 'monday', 'friday' ],
  greeting: [Function (anonymous)]
}
*/

//this keyword -> We we want to reference the same object we can use this keyword
//now I want to reference the name of object to reference inside the function

 user.greetingTwo = function(){
  console.log(`Hello from function, I am ${this.name}`); // we can access all the properties of user object inside function using this keyword
}

console.log(user.greetingTwo()); //Hello from function, I am Somesh