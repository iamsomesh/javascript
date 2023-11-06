//Do-while-loop

// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, 

// let i = 0 -> initialize
// do {
  
// } while (condition);

let score = 1 //initialize

do {
  console.log(score); //this do block always execute, if condition is false, it will be run one time and if condition is true it will run till the condition become false

  score++ // increment
} while (score <=10 ); //condition


//do-while loop in array

let myArray = [1,2,3,4,5]
let i = 0
do {
  console.log(myArray[i]);
  i++
} while (i < myArray.length);