//Some imp string methods or sanetize the string 
 let someString = "Hello-somesh"

 //substring -> break into substring and provide first and last index as a parameter no negative
 let anotherString = someString.substring(0,5)
 console.log(anotherString); //hello

//slice -> 
let someString1 = someString.slice(0,5) //it accept negative value as well
console.log(someString1);

//trim() remove whitespacesc + line terminator suppose some one input form name and enter whitespaces in begining and end 

let someString2 = "      somesh      "
console.log(someString2);//         somesh  <- o/p 
console.log(someString2.trim());//somesh -<o/p //it remove start and end whitespace, also have methods like trimStart(), trimEnd()

//replace() -> very useful ex-> someone want enter any url with whitespace so browser automatically takes %20 as whitespace and we want to remove from the url
// https://iamsomesh.github.io/personal%20portfolio/ 
//actual url -> https://iamsomesh.github.io/personal-portfolio/
const url = "https://iamsomesh.github.io/personal%20portfolio/"
console.log(url.replace("%20", "-"))

console.log(url.includes("portfolio")); //return true /false to search given string is present or not


//split or break the string based on any thing, want to part of string
//split(seperator, limit)

let splitString = "Hello-somesh"
console.log(splitString.split("-")) //also it return the array  [ 'Hello', 'somesh' ] here is seperator is '-'

let anotherSplitString = "my name is somesh yadav" 
console.log(anotherSplitString.split(' ')); // i want to seperate given above string based on white spaces
//o/p -> [ 'my', 'name', 'is', 'somesh', 'yadav' ]