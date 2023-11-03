//break -The break statement terminates the current loop

for (let i = 1; i <=10; i++) {
 if(i == 5){
  console.log("it's 5 now after this statement i'm breaking");
  break;
}
  console.log(i);
}
//op -
// 1
// 2
// 3
// 4
// it's 5 now after this statement i'm breaking


// Continue
// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

for (let i = 1; i <=10; i++) {
  if(i == 5){
   console.log("Now it's skip i =5 and print all just skip current iteration");
   continue;
 }
   console.log(i);
 }
 //op
// 1
// 2
// 3
// 4
// Now it's skip i =5 and print all just skip current iteration
// 6
// 7
// 8
// 9
// 10