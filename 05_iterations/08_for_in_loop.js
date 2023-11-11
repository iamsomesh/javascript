//FOR IN LOOP

// syntax
// for (const key in object) {

// }

//For In loop work on Objects {} YESSSSSSSSSS!!!!!!!!!!!

const userDetails = {
  username: "iamsomesh",
  age: 24,
  city: "indore"
}

for (const key in userDetails) {
  // console.log(key) //username, age, city -> Okay so this will print key what about values

  //for value we can use key to find the value from userDetails object like this
  // console.log(userDetails[key]) //iamsomesh, 24, indore
}

// for (const [key, value] in userDetails) {
//   console.log(key);
// } not work like this it wil o/p randomly



//For In -> Array
const myArray = [5,6,9,2,"hello"]
for (const key in myArray){
  console.log(key); //it print index of array -> 0,1,2,3,4

  //how to access the value of array
  console.log(myArray[key]); //5,6,9,2,hello
}


//For..in -> Map ------------> XXXXXXXX NOT WORK becuase map is not iteratble object

const map = new Map()
map.set('IN', 'India')
map.set('RSA', "Russia")
map.set('FR', 'France')

for (const key in map){
  console.log(key);
}

