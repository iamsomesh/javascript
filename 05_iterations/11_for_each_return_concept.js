//forEach() always return undefined, if we write return keyword in this secnario it return undefined as well

const superHeros = ["Batman", "spiderman", "Flash", "ironMan", "hulk", "antman"]

//here we can store all the iterators into on variable
const values = superHeros.forEach( (item) => {
  console.log(item);
})

console.log(values); //undefined



//if we add explicit return keyword 
const values1 = superHeros.forEach( (item) => {
  return item
})
console.log(values1);  //undefined