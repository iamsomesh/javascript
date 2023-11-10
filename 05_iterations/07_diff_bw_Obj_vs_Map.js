//Diff b/w object and Map

/*
In JavaScript, both objects and maps are used to store and manage collections of key-value pairs, but they have some key differences in terms of their characteristics and use cases.

Key Types:

Objects: In JavaScript objects, the keys are always strings or symbols. If you try to use a non-string/symbol key, it will be automatically converted to a string.
Maps: In Map objects, the keys can be of any data type, including primitive values (e.g., numbers, strings, and symbols) and even objects or functions. The key equality is determined by reference, so objects with the same content but different references are considered different keys.
Iteration Order:

Objects: The order of properties in an object is not guaranteed to be maintained, and it depends on the JavaScript engine's implementation. In practice, most engines maintain insertion order for string keys, but this behavior is not specified in the ECMAScript standard.
Maps: Maps guarantee that the order of key-value pairs remains the same as they were added, making it easier to iterate through them in a predictable order.
Size Property:

Objects: There is no built-in method to retrieve the number of properties in an object directly. You need to manually iterate through the object's properties to count them.
Maps: Maps have a size property that allows you to easily get the number of key-value pairs they contain.
Use Cases:

Objects: JavaScript objects are widely used for general-purpose data storage and are especially convenient when dealing with string keys and when you don't require a specific order for the key-value pairs.
Maps: Maps are more suitable for cases where the order of key-value pairs is important (e.g., implementing data structures like ordered dictionaries), and when non-string keys or complex objects as keys are needed.
*/


// Using an object
const obj = {};
obj[1] = 'one';
obj['2'] = 'two';
obj[3] = 'three';

// Using a map
const map = new Map();
map.set(1, 'one');
map.set('2', 'two');
map.set(3, 'three');

console.log(obj[1]);  // 'one'
console.log(map.get(1));  // 'one'

// Iterating over object properties
for (const key in obj) {
  console.log(key, obj[key]);
}

// Iterating over map entries
for (const [key, value] of map.entries()) {
  console.log(key, value);
}


// while both objects and maps can be used for storing key-value pairs in JavaScript, the choice between them depends on your specific use case, especially regarding key types, iteration order, and the need for maintaining a specific order for key-value pairs.