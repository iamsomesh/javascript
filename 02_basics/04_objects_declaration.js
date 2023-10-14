//object in js
// The Object type represents one of JavaScript's data types. 

//It is used to store various keyed collections and more complex entities.

// Objects can be created using the Object() constructor or the object initializer / literal syntax.

//2- way to declare object -> Literal and -> Constructor

//When we create object using constructor it will create singleton,but

//when we create object using literal it will create multiple instance

//declare object using constructor

const objConstructor = Object()
objConstructor.name = "somesh"

console.log(objConstructor,typeof objConstructor);//{ name: 'somesh' } object

const objCons1 = Object.create(null) //[Object: null prototype] {}
objCons1.name = "somesh"
console.log(objCons1);


//declare object using literals

const obj = {} //declare a object in js using literals

console.log(obj, typeof obj);//{} object