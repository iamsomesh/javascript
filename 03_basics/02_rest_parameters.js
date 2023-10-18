//Rest parameters (...myArgs)

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
// The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort(), map(), forEach() or pop() can be applied on it directly.


//problem
//let's take a example of adding items in cart but we don't know how many items will add inside cart
function addingCartItems(a,b,c){
  console.log(a,b,c); //here we know how many items we passed but what if don't know then we have to create multiple parameter for handling items as argument to solve this problem we are used rest parameter
}

addingCartItems("item1", "item2", "item3")


//solution 
function addingCartPrice(...price){ //here ...price takes all value and convert into an array
  console.log(price);//[ 200, 300, 400, 500, 600 ]
  console.log(typeof price); //object
  console.log(Array.isArray(price)); //true
}


 const prices = [200,300,400,500]
//  addingCartPrice(prices)
addingCartPrice(200,300,400,500,600)


//Also we can use rest operator with some values
//ex- I need to store first two values in any parameter and want rest of us in one variable like this


function addingPrice(value1, value2, ...prices){
  console.log(value1)//somesh  - typeof -string
  console.log(value2)//24 - typeof -  number
  console.log(prices)//[200, 400, 600, 800] - typeof object
}

addingPrice("Somesh", 24, 200, 400, 600, 800)