/*
varible is used to store something in memory space , we can use 3 different types of keywords to defined variable
const for unchanged value, we can not change the value of const
let, and var both are used for variable to change the value at time, but let is used for block scope - {} and functional scope
var is global scope variable where we can use everywhere and we can change the value

*/


const accountId = 123
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountState = "Indore" //we can also defined variable in javascript without any keyword
let accountCountry  //If we log this accountCountry it will give undefined


// whar if i want to change the accountId
// accountId = 2222  - TypeError: Assignment to constant variable when we log this accountId

console.log(accountId, accountEmail, accountPassword, accountState, accountCountry)

//Now change the let and var
accountEmail = "change@gmail.com"
accountPassword = "321344"
accountState = "change state"
accountCountry = "defined"

//Now want to print all the varibales in one go, So i can use console.table which will give o/p as tabular form

console.table([accountId, accountEmail, accountPassword, accountState, accountCountry])