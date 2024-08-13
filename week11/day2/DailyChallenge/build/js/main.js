"use strict";
// Create a function called validateUnionType that accepts a value and an array of allowed types (as strings).
//The function should check if the value is of one of the allowed types and return true if it is;
// otherwise, it should return false. Use this function to validate the type of variables in a program.
function validateUnionType(value, allowedTypes) {
    return allowedTypes.includes(typeof value);
}
const allowedTypes = ["string", "number", "boolean"];
console.log(validateUnionType("hello", allowedTypes));
console.log(validateUnionType(42, allowedTypes));
console.log(validateUnionType(true, allowedTypes));
console.log(validateUnionType(null, allowedTypes));
console.log(validateUnionType(undefined, allowedTypes));
console.log(validateUnionType({}, allowedTypes)); // false
