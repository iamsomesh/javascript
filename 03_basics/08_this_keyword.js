//this is used for refer current context-> (Values)-(kis bare me baat hori), or used to access the current context variable -> {scope}

const users = {
  username: "Somesh",
  price: 999,

  greeting: function(){

    //it will not work
    // console.log(`${username}, welcome to website`) //ReferenceError: username is not defined
    
    //what If I want to use the username inside this function -> Need to use (this) keyword instead of users.username

    console.log(`${this.username}, welcome to website`) //Somesh, welcome to website
    //here this refer the current context -> so in this case user{scope}

    //let's log this keyword here
    console.log(this);//{ username: 'Somesh', price: 999, greeting: [Function: greeting] } -> Current Context
  }
}

users.greeting()//Somesh, welcome to website


//suppose I write username static in users object, and it will change if another users comes in place of username and change the username

users.username = "Samm" //here current context value will be change in object
users.greeting()//Samm, welcome to website


//what if i log this keyword alone here*************IMP******************
console.log(this); //{}
//Here we are using the node, and (this) refer to empty object which is current context, but in browser it show different 

//if we log (this) in browser it show different look like this
// Window {0: Window, 1: Window, 2: Window, 3: global, 4: global, window: Window, self: Window....
//it's because in earlier there is only one way to execute js inside browser, and engine also there,
// now we have to take engine outside like node, deno..now we have standalone engine

//and when we run engine inside browser so global object is called window object, that's why we captured window object, like click, formsubmit and all..




//normal function
function one() {
  console.log(this);//there is something inside (this)
  //if we log this
  /*<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
  } */
}
one()


//normal function
function one1() {
  let username = "Somesh"

  // console.log(this) //-> It will print lot more 

  //is it possible to print this.username inside function?? -> So this context work inside object only not in function
  console.log(this.username); //undefined

  if (true) {
    console.log(this.username); //undefined
  }
}
one1()