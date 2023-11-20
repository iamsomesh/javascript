//filter() - A function to execute for each element in the array. Creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

//return -> Returns the elements of an array that meet the condition specified in a callback function.

const myNums = [5,3,7,9,8,1,3,4]
//here we also provide one condition in callback functions num> 5
const values = myNums.filter( (num) => num > 5) //here it implicit return you can se we not used () => {} curly braces for explicit return

// console.log(values)//[7,9,8] -> return the new arrays, after meet the condition specified in a callback function.


//explicit return
const value1 = myNums.filter( (num) => {
  return num > 4
})
// console.log(value1); //[5,7,9,8]


//****************************************Example********************************************** */

const employeData = [
  {
    id: 1,
    employee_name: "Tiger Nixon",
    employee_salary: 320800,
    employee_age: 6,
    employe_city: "Indore"
  },
  {
    id: 2,
    employee_name: "Garrett Winters",
    employee_salary: 170750,
    employee_age: 63,
    employe_city: "Pune"
  },
  {
    id: 3,
    employee_name: "Ashton Cox",
    employee_salary: 86000,
    employee_age: 66,
    employe_city: "Dhar"
  },
  {
    id: 4,
    employee_name: "Cedric Kelly",
    employee_salary: 433060,
    employee_age: 22,
    employe_city: "Bhopa"
  },
  {
    id: 5,
    employee_name: "Airi Satou",
    employee_salary: 162700,
    employee_age: 33,
    employe_city: "Indore"
  }
]

//forEach
// const valu = employeData.forEach( (item) => {
//   console.log(item.employee_name);
// })
// console.log(valu);

let data = employeData.filter( (employe) => employe.employee_age > 30) //here i did implicit return
// console.log(data);

data = employeData.filter( (employe) => {
  return employe.employe_city == "Indore" && employe.employee_age > 30
} )
console.log(data);
// [
//   {
//     id: 5,
//     employee_name: 'Airi Satou',
//     employee_salary: 162700,
//     employee_age: 33,
//     employe_city: 'Indore'
//   }
// ]