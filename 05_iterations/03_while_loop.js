//While loop is also used for iteration it's just another iteration like for loop

//Syntax - also this also work like for loop , initalization, condition, increment
// let i = 0 - Initialization
// while (condition) { 
//   i++ -- Increment
// }

// print 2 table
let i = 2
while(i <= 20){
  console.log(i);
  i = i+2
}

// iterate over the array
let myArray = ["batman", "superman", "flash"]
let index = 0
while(index < myArray.length)
{
  console.log(myArray[index]);
  index ++
}