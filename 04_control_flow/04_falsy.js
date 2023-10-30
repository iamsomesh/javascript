// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

// null
// undefined
// false	
// NaN	
// 0	
// -0	
// 0n	
// ""


user = 0 //falsy values - 0,-0,null, undefined, NaN, false,0n(BigInt), ""

if(user){
  console.log("user is logged in");
}else{
  console.log("user is not logged in");
}//user is not logged in