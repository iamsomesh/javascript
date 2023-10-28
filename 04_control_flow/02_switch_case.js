// Switch cases in JavaScript serve a specific purpose and are generally used when you have a single value or expression that you want to compare against multiple possible values. While you can achieve similar results using if-else statements

// Readability
// Efficiency
// Fall-through:

//syntax
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

//suppose we want to print month based on value - 1,2,3 , if value is 3 it should be print march
//also we can check with if-else condition, but here is more readbility, and efficency as well

let month = 3
switch (month) {
  case 1:
      console.log("jan");
    break;
  case 2:
      console.log("Feb");
    break;
  case 3: 
      console.log("march");
    break;
  default:
      console.log("unknown");
    break;
}


//using if-else 
if (month == 1) {
  console.log("jan");
} else if(month == 2){
  console.log("feb");
} else if(month == 3){
  console.log("march");
}else {
  console.log("unkown");
}

//if we are not using break, it will execute if case is meet after case is meet then it will execute after all the cases except default 

//suppose her we are not using break in case 3 the it will execute case 4 and 5 as well
let month1 = 3
switch (month1) {
  case 1:
      console.log("jan");
    break;
  case 2:
      console.log("Feb");
    break;
  case 3: 
      console.log("march");
  case 4: 
    console.log("april");
    break
  case 5: 
    console.log("may");
    break;
  default:
      console.log("unknown");
    break;
}
//op -> march, april, not may because in case 4 it has break;