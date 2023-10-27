//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN

// Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block)
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)


user = [] //true values [],{}, true, 12,"string", "0", "false", new Date(), -42, 12n, Infinity, -Infinty, " "(we add space in empty string), function() {}

if (user) {
  console.log("true value")
}else{
  console.log("falsy value");
}


//******************************Some IMP************************************** */
// false == 0 -> true
// false == '' -> true
// '' == 0 -> true