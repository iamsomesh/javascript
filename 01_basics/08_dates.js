//date in javascript is another type of object in js

let myDate = new Date()
console.log(myDate); //2023-10-11T10:28:14.565Z  this will give o/p  which is not readable

//to declare specific date
let anotherDate = new Date(2023,0,23) //here 0 takes 1 january which comes from index 0 //we can also pass timestamp
console.log(anotherDate.toLocaleDateString()); //1/23/2023 

//another way to declear specific mm-dd-yy something
let date = new Date("2023-10-11")
console.log(date.toLocaleDateString());

//timestamp exact value check krne k liye example - poll and quiz who will press the fast button it is useful
let timestamp = Date.now()
console.log(timestamp); //1697021115827 this time is in milisecond

console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getFullYear());


//conversion of date to simplify
//to convert this above date in string 
console.log(myDate.toString()); //Wed Oct 11 2023 16:01:11 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Wed Oct 11 2023
console.log(myDate.toISOString()) //2023-10-11T10:33:14.180Z
console.log(myDate.toJSON());  //2023-10-11T10:33:14.180Z
console.log(myDate.toLocaleDateString()); //10/11/2023
console.log(myDate.toLocaleString()); //10/11/2023
console.log(myDate.toLocaleTimeString()); //4:03:14 PM


//special method toLocalString()

let newDate = new Date()
const modifyDate = newDate.toLocaleString("default",{
  weekday:  "long"
})
console.log(modifyDate);