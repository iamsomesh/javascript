//basic comparision of value
/*
console.log( 2 > 1)
console.log( 2 < 1)
console.log( 2 == 1)
console.log( 2 >= 1)
console.log( 2 <= 1)
console.log( 2 != 1)
*/

//comparision with diff data types

console.log( "2" > 1)  //true
console.log( 2 < "1")  //false

//comparision with null, undefined it works diff
//avoid this type of conversion
console.log( null > 0)//false
console.log( null == 0)//false
console.log( null >= 0)//true

console.log( undefined == 0)//false
console.log( undefined > 0)//false
console.log( undefined >= 0)//false


//strict comparision === it check data type and value both

console.log(2 === 2)
console.log("2" === 2)