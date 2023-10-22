

// ++++++++++++++++++++++++++++++ INTERSTING -> Hoisting -> function/expression +++++++++++++++++++++++++++++++++++++++++++
//Here we create two function in different ways

//Normal function creation
function oneAdd(num){
  return num+1
}
console.log(oneAdd(5))


//Here we use a varible to store function and we called some time expression or function
const twoAdd = function(num){
  return num+2
}
console.log(twoAdd(5))


//But problem -> Let's execute both function before we declareation

//Here I excute or call function before it's declaration

console.log(oneAdd1(5)) //it gives same result 6 -> No error at all

function oneAdd1(num){
  return num+1
}


//Problem arise here, when we execute function before the function declaration

console.log(twoAdd2(5)) //ReferenceError: Cannot access 'twoAdd2' before initialization

const twoAdd2 = function(num){
  return num+2
}
