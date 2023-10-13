//methods in array

const marvel_heros = ["thor", "hulk", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]


//push - push works and return the existing array
marvel_heros.push(dc_heros) //it will take dc_heros array as element in marvel_heros array 
console.log(marvel_heros); // [ 'thor', 'hulk', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

console.log(marvel_heros[3]); //[ 'superman', 'batman', 'flash' ]

//concat -Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const marvel_heros1 = ["thor", "hulk", "spiderman"]
const dc_heros1 = ["superman", "batman", "flash"]


const all_heros = marvel_heros1.concat(dc_heros1)
console.log(all_heros);//[ 'thor', 'hulk', 'spiderman', 'superman', 'batman', 'flash' ]

//we can also use the spread operator (...)

const all_new_heros = [...marvel_heros1,  ...dc_heros1]
console.log(all_new_heros);//[ 'thor', 'hulk', 'spiderman', 'superman', 'batman', 'flash' ]


//flat() -> method  -> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//we can also give parameter how depth we can solve or infinty to solve automatically

const another_array = [1,2,3,4,[5,6],7,[5,6,[7,8]]] //here is multi dimension aaray
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 5, 6, 7, 8]


//to check particular varible is array or not and convert into array
//isArray, Array.from, Array.of

//isArray
console.log(Array.isArray("Somesh")); //false
console.log(Array.isArray(all_new_heros)); //true

//Array.from -> Creates an array from an iterable object.

console.log(Array.from("somesh")) //[ 's', 'o', 'm', 'e', 's', 'h' ]

//Array.of -> A set of elements to include in the new array object.
//Returns a new array from a set of elements.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]

