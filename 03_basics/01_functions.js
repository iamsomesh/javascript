//creation of function


//use function keyword then name of function with paranthesis() and then add scope of function using {}
function sayMyName() {
  //this is the scope of function {}
  console.log("I'm ready to use whenever you want & when you called");
} //from starting to end means to function keyword to last } 5-8 line we called this as function definations

//if i just write name of function without any () we we called function refernce

sayMyName //function referance -> tum bs bta rhe ho ki ye function waha rhta hai

sayMyName() //excute -> execution of function with (), without () it's just reference

//function without argument and when we 
function addTwoNumber(num1, num2) {
  console.log(typeof num1, typeof num2); //undefined
  console.log(num1+num2);//NaN
  console.log(typeof(num1+num2));//Number
}

addTwoNumber()


//adding two number
function addTwoNumber1(num1, num2){//A parameter is a variable defined in a function or method declaration.
  console.log(num1+num2);
}

addTwoNumber1(3,4)///An argument is an actual value or expression that is passed to a function when it is called.



// **************************undefined********************************
//let's store the value of function in another variable
function addTwoNumber2(num1, num2){//A parameter is a variable defined in a function or method declaration.
  console.log(num1+num2);//console just print the value not return the value that's why it show undefined in the result varibale
}

const result = addTwoNumber2(3,4)
console.log("Result:", result); //Result: undefined


//**************************Function return****************************************** */
//let's return the value from the function
function addTwoNumber3(num1, num2){
 
//way to return
  // const sum = num1 + num2
  // return sum
  // console.log("I'm not print anything after return keyword");//this line will not execute because it's written after return keyword

  //Also we can return direct without holding value in variable

  return num1 + num2

}

const result1 = addTwoNumber3(8,4)
console.log(result1);


//example -use of string intepolation
function userLogin(username){
  return `${username} just logged in`
}

console.log(userLogin("Somesh"))

//example - if else
function userLogin1(username){
  if (username == undefined) { // we can also if(!username)
    console.log("Please enter user name");
    return
  }
  return `${username} just logged in`
}
console.log(userLogin1())

//example - set default value if we didn't pass argument
function userLogin1(username = "Demo"){
  return `${username} just logged in`
}
console.log(userLogin1()) //Demo just logged in
console.log(userLogin1("Somesh"))//Somesh just logged in