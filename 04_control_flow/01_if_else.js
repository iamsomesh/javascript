//control flow -make a decision based on the condition - like if else condition, switch
//some basic operators to check condition , > , < , >=, <=, ==, ===

const isUserLoggedIn = true

//==
if (2 == "2"){
  console.log("executed");
}//executed

// === what if want to check strict, value and its type
if (2 === "2") {
  console.log("executed");
} else {
  console.log("it's not executed")
}
//op- it's not executed

//check multiple condition
const balance = 500
if (balance < 100) {
  console.log("balance is less than 500");
} else if (balance < 200 )
{
  console.log("balance is less than 500");
} else if (balance < 300)
{
  console.log("balance is less than 500");
}else{
  console.log("balance is less than 1000");
}