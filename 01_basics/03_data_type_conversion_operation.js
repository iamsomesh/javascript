let score = 30

console.log(typeof score) //both are same typeof()
console.log(typeof(score))

let num = "30"
console.log(typeof(num))

let valueInNumber = Number(num)
console.log(typeof(valueInNumber))

//what if we convert this type of number 333abs

let num1 = "33asdf"
console.log(typeof(num1))

let valueInNum1 = Number(num1)
console.log(valueInNum1) //NaN not a number
console.log(typeof(valueInNum1)) // Still type is number


//what if we try to convert null

let num2 = null
console.log(typeof(num2))

let valueInNum2 = Number(num2)
console.log(valueInNum2, typeof(valueInNum2)) // convert null -> 0 and type Number

//what if we try to convert undefined 

let num3
console.log(typeof(num3))

let valueInNum3 = Number(num3)
console.log(valueInNum3, typeof(valueInNum3)) // convert undefined -> NaN and type Number


//convert boolean value into number

let num4 = true
console.log(typeof(num4))

let valueInNum4 = Number(num4)
console.log(valueInNum4, typeof(valueInNum4)) // convert undefined -> NaN and type Number

/*
1. String to num "33" => 33,  type -> Number
2. "33asdf" => NaN,  type -> Number
3. true => 1, false => 0,  type -> Number
4. null => 0,  type -> Number
5. undefined => NaN , type -> Number
*/

//convert num to boolean
let isLoggedIn = 1 //"" => false, "somesh" => true
console.log(typeof(isLoggedIn))

let isLoggedInConversion = Boolean(isLoggedIn)
console.log(isLoggedInConversion, typeof(isLoggedInConversion))

//convert number to string

let sumNumber = 33
console.log(typeof(sumNumber))

let sumNumberConversion = String(sumNumber)
console.log(typeof(sumNumberConversion), sumNumberConversion)