let name = "Somesh"
let repoCount = 30

//to concat the string we can easily use + for concat like this

console.log("my name is" + name + "and my repo count is" + repoCount) //but this is not good way

//User string interpolation using `` inside this `` ${}

console.log(`My name is ${name} and my repo count value is ${repoCount}`)

//another way to declare a sting
let name1 = new String("hitesh")
console.log(name1) //give this o/p [String: 'hitesh']
// and if i use this above thing in browser console it will give us along with function and it will give as key value pair string objectz
// String {'hitesh'}
// 0: "h"
// 1: "i"
// 2: "t"
// 3: "e"
// 4: "s"
// 5: "h"
// length: 6
// [[Prototype]]: String //this will give function of string

console.log(name1[0])

//String functions
console.log(name1.length); //length

console.log(name1.toUpperCase()); //toUpperCase -> to convert in uppercase and also it will not change original string

console.log(name1.charAt(2)) //to find the see the character at given 2 position

console.log(name1.indexOf('t'));// to find the specific position of character in string
