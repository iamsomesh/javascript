/*
The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.


JavaScript has the following kinds of scopes:

Global scope: The default scope for all code running in script mode.
Module scope: The scope for code running in module mode.
Function scope: The scope created with a function.

In addition, variables declared with let or const can belong to an additional scope:

Block scope: The scope created with a pair of curly braces (a block).{}
*/

let a = 10
const b = 20
var c = 30
console.log(a,b,c); //10,20,30

{
  //{ curly braces means scope of anything }or block
  //if this braces with function means scope of this function we have to say
}

// /let's take an example of scope

let aa = 40
const bb = 50
var cc = 60

if (true) {
  console.log("Inside scope", aa+10, bb+10, cc+10)//Inside scope 50 60 70
}

console.log("outside the scope",aa,bb,cc);//outside the scope 40 50 60



//But what if we declare this varibales inside the scope

if (true) {
  let va1 = 10
  const va2 = 20
  var va3 = 30

  console.log("Inside the scope Va1", va1); //Inside the scope Va1 10
  console.log("Inside the scope Va2", va2); //Inside the scope Va2 20
  console.log("Inside the scope Va3", va3); //Inside the scope Va3 30
}

// console.log("outside the scope Va1", va1)*******Error - > ReferenceError: va1 is not defined******/
// console.log("outside the scope Va2", va2)*******Error - > ReferenceError: va2 is not defined******/
console.log("outside the scope Va3", va3); //outside the scope Va3 30 -> Var is global scope



// ****************************ReferenceError: Cannot access 'aaa' before initialization***********************************
//Let's take example here to define varible outside the scope and then print those varible inside the scope and then we redecalred this varibles it will gives this error
let aaa = 40
const bbb = 50
var ccc = 60

if (true) {
  // console.log(aaa, bbb, ccc)//ReferenceError: Cannot access 'aaa' before initialization
  
  //lets assume we have to declare varible inside a block or if else scope with same name
  let aaa = 70
  const bbb = 80
  var ccc = 90

  console.log("Inside the scope after deaclare aa,bb,cc", aa, bb, cc)
}


//example

var name = "Somesh"
console.log("Declaration of scope", name);//Declaration of scope Somesh

if (true) {
  var name = "Hitesh"
  console.log("Inside the scope",name)//Outside the scope Hitesh
}

console.log("Outside the scope",name);//Outside the scope Hitesh
//the problem arise here programmer decalre the name varible global but it change the value of name and log to take new value from scope, this is why its not good to use var, because programmer thaught I declare the name = "Somesh", but why it's show hitesh, and the if condition already written through another progammer with same name declare


//IMP points
//All the value write or code which is called block scope, and outside the if block here is global scope 
//All the value we have written in global scope is accessible in block scope
//But what we written inside block scope will be not accessible that's why the concept of let & const arise and it's best