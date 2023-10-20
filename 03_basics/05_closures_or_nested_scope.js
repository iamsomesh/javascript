//nested scope in javascript / scope level /Closures

// a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// this is simple exmple of how we can use nested function scope or closures
function one(){
  const username = "Somesh"
  
  function  two(){

    const website = "youtube"

    console.log(username)
    console.log(website)
  }

  two()
}
one()


//But what if I want to access this website variabe outside of it current function scope
function one(){
  const username = "Somesh"
  
  function  two(){

    const website = "youtube"

    console.log(username) //we can use username inside his child function
    console.log(website)
  }

  //here access website variable outside of his function ****************************
  // console.log(website)//ReferenceError: website is not defined

  two()

  console.log(username) //somesh -> it is accessible because username is declared in his current scope
  
}

one()

//what If i want to use username here outside the function?
// console.log(username);//ReferenceError: username is not defined ******************************