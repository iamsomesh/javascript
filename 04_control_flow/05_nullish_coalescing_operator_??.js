// Nullish coalescing operator

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let user; //works on null and undefined only

user = null ?? "somesh"
console.log(user); //somesh

let user1;
user1 =  undefined ?? "yadav"
console.log(user1)//yadav


//what if the both value is not null and undefined

let val1 = 4
val2 = val1 ?? 5

console.log(val2); //4 if both operand is not null or undefined it will return left hand side operand

