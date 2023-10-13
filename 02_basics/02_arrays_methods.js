//Array methods

const myArray = [6,4,8,5,9,2]

//methods
//push() -> insert element in last -> Appends new elements to the end of an array, and returns the new length of the array
myArray.push("hello")
console.log(myArray) //[ 6, 4, 8, 5, 9, 2, 'hello' ]

//pop() -> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

myArray.pop()
console.log(myArray);

//unshift() -> Inserts new elements at the start of an array, and returns the new length of the array.

myArray.unshift("hiii") //but it shift all the another element to next indexces, it's better to avoid for huge data 
console.log(myArray);

//shift)() -> Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(myArray.shift())
console.log(myArray);


//include -Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(myArray.includes(4));
console.log(myArray.includes(55));

//indexOf - Returns the index of the first occurrence of a value in an array, or -1 if it is not present
console.log(myArray.indexOf(2));
console.log(myArray.indexOf(89)); //-1


//join() - Adds all the elements of an array into a string, separated by the specified separator string.
const newArray = myArray.join()
console.log(newArray, typeof newArray);

//****************************************IMP METHOD****************************************************** */

//slice & splice

//slice - The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

console.log("A:", myArray);  //[ 6, 4, 8, 5, 9, 2 ]
const myArray1 = myArray.slice(1,3) //3 index is not inclusive

console.log(myArray1); //- [ 4, 8 ]
console.log(myArray);//[ 6, 4, 8, 5, 9, 2 ]


//splice - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//@returns — An array containing the elements that were deleted.

const anotherArray = [2,3,5,7,9,6]
console.log("B:", anotherArray);
const myArray2 = anotherArray.splice(1,3)

console.log(myArray2);//[ 3, 5, 7 ]
console.log(anotherArray);//[ 2, 9, 6 ]
