//for..each loop - The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order.
//this loops direct added in array's property, if we can see in console in prototype ,it is like concat and other method.
/*
The forEach() method calls a function for each element in an array.

The forEach() method is not executed for empty elements.
*/

//Syntax - array.forEach(function(currentValue, index, arr), thisValue)
/*
function() - Required - A function to run for each array element.
currentValue - The value of the current element.
index - The index of the current element.
arr - The array of the current element.
thisValue -  value passed to the function as its this value.
*/

const superHeros = ["Batman", "spiderman", "Flash", "ironMan", "hulk", "antman"]

superHeros.forEach( function iteration(){} )//forEach method takes a callback function, so let's suppose to take one normal function to understand

//callback function -> No name
//so let's take one more step forward

superHeros.forEach( function () {}) //function without name

//next step -> noramlly we pass parameter() in function but here we run call callback function on array so it will automatically,it works on each element

superHeros.forEach( function(item) {
  // console.log(item);
}) //we pass parameter for each element, we can perform any operation on this value item inside function scope or function body


//Using Arrow function and shorthand 
superHeros.forEach( (val) => {
  // console.log(val);
})

//We can pass our custom function or normal function inside callback function inside forEach 
//first i creating normal function
function printMe(item){
  console.log(item);
}

//we can pass on this function as callback function in forEach

superHeros.forEach( printMe ) //we give printMe as a parameter that's why we don't use printMe() - not execute here --> here we just give reference not execute


//it takes more than one argument -> item,index, arr -> on which array we use this method
superHeros.forEach( (item, index, arr) => {
  console.log(item, index, arr);
} )
//o/p
// Batman 0 [ 'Batman', 'spiderman', 'Flash', 'ironMan', 'hulk', 'antman' ]
// spiderman 1 [ 'Batman', 'spiderman', 'Flash', 'ironMan', 'hulk', 'antman' ]
// Flash 2 [ 'Batman', 'spiderman', 'Flash', 'ironMan', 'hulk', 'antman' ]
// ironMan 3 [ 'Batman', 'spiderman', 'Flash', 'ironMan', 'hulk', 'antman' ]
// hulk 4 [ 'Batman', 'spiderman', 'Flash', 'ironMan', 'hulk', 'antman' ]
// antman 5 [ 'Batman', 'spiderman', 'Flash', 'ironMan', 'hulk', 'antman' ]


//We used mostly in array of object [{}, {}, {}]
//need all username from this object inside array
const userDetails = [
  {
    username: "Somesh",
    age: 23
  },
  {
    username: "XYZ",
    age: 24
  },
  {
    username: "ABC",
    age: 66
  },
  {
    username: "Hitesh",
    age: 34
  }
]

userDetails.forEach((item) => {
  //want to access the usernames 

  console.log(item.username); 
})
// Somesh
// XYZ
// ABC
// Hitesh