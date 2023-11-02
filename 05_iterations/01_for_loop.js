//for loop or iteration

//syntax
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// first we have to declare and initailize a variable after we have to check certain condition if condition is true it will go inside the block scope and after that increament the value

//print number 1 to 10

for(let i = 1; i<= 10; i++){
  console.log(i);
}

//Check certain condition inside for loop
for(let i = 1; i<=6; i++){
  if(i == 5){
    console.log(`it's 5 == ${i}`);
  }
  console.log(i);
}

//nested for loop , for inside for

//let's print table from 1 to 5

for(i=1; i<=5; i++){
  console.log(`table of ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//in this nested for loop, first goes in outer loop with value of i =1 then goes inner loop and loop till the inner loop is not satify with there condition
// first outer loop * 10 times inner loop


//for loop to iterate on array, although we have different technique to iterate over arrays
const myArray = ["abc", true, "hello", 5, 88]
for(let i = 0; i < myArray.length; i++){
  console.log(myArray[i]);
}