//Map Object
//Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. 

// A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration

// it always return uniqe value no duplicate value are there in map

const map = new Map() //object
map.set('IN', 'India')
map.set('RSA', "Russia")
map.set('FR', 'France')
map.set('IN', 'India') //if we add india but it will not print this beacuse it only print uniqe keys



console.log(map);//Map(3) { 'IN' => 'India', 'RSA' => 'Russia', 'FR' => 'France' }

//****************************ITERATE OVER MAP - USING FOR OF********************************* */

for (const key of map) {
  console.log(key);
}//[ 'IN', 'India' ]
// [ 'RSA', 'Russia' ]
// [ 'FR', 'France' ]
//here it return one key value in array 


//we can log the individual key value 

for (const [key, value] of map) {
  console.log(`Key: ${key}  --> value: ${value}`)
}
// Key: IN  --> value: India
// Key: RSA  --> value: Russia
// Key: FR  --> value: France


//only log values
for (const [key,val] of map) {
  console.log(val);  
}
// India
// Russia
// France