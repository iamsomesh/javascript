//Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way. It can be especially useful when working with complex data structures or when you want to access specific properties of an object.

const person = {
  name: "Somesh",
  age: 24,
  city: "mumbai",
  isLoggedIn: false,
  personState: "MP"
}

//suppose now I need to use name in multiple place, one way in normal way
console.log(person.name);// somesh, but what if i need to use this name in multiple place

//use object destructuring
const {name, age, city, isLoggedIn} = person

//I can change the name of object attribute like this
const {personState: state} = person
console.log(state);//MP


console.log(name, age, city,state); //now I can use name instead of person.name for extract the value from object

//n this example, we have an object called person, and we use object destructuring to create 5 variables: name, city,age, isLoggedIn and personstate. These variables are assigned the values of the corresponding properties in the person object.


//*****************************Destructuring with aliases******************************************** */
//aliases when destructuring, which can be helpful when the variable names you want to use conflict with existing variable names or keywords:
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

// Destructuring with aliases
const { firstName: fName, lastName: lName } = person1;

console.log(fName); // 'John'
console.log(lName); // 'Doe'


// *******************Destructuring with default values*********************************
//provide default values in case the property doesn't exist in the object:
const person2 = {
  firstName: 'John',
  lastName: 'Doe',
};

// Destructuring with default values
const { firstName, lastName, age3 = 25 } = person2;

console.log(firstName); // 'John'
console.log(lastName);  // 'Doe'
console.log(age);       // 25 (default value)