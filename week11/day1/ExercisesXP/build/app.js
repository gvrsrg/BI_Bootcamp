"use strict";
// Exercise 1
const message = "Hello World!";
console.log("message: ", message);
// Exercise 2
const age = 46;
const username = "Sergey";
console.log("age: ", age);
console.log("name: ", username);
// Exercise 3
let id;
id = 123;
console.log("id: ", id);
id = "j3qq4-h7h2v-2hch4-m3hk8-6m8vw";
console.log("id: ", id);
// Exercise 4
function checkNumber(num) {
    if (num > 0) {
        return "Number is positive";
    }
    else if (num < 0) {
        return "Number is negative";
    }
    else {
        return "Number is 0";
    }
}
console.log(checkNumber(-42));
console.log(checkNumber(0));
console.log(checkNumber(42));
// Exercise 5
function add(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    if (typeof input1 === "string" && typeof input2 === "string") {
        return input1 + input2;
    }
    throw new Error("Inputs must both be numbers or both be strings");
}
console.log(add(5, 5));
console.log(add("Hello ", "World"));
// Exercise 6
function getDetails(name, age) {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}
console.log(getDetails("Sergey", 46));
function createPerson(name, age) {
    return { name, age };
}
const person = createPerson("Sergey", 46);
console.log(person);
// Exercise 8
let num = 77;
let num1 = num;
console.log(num1, typeof num1);
console.log(num, typeof num);
const element = document.getElementById("subtitle");
element.value = "Hello, TypeScript!";
// Exercise 9
var EnvType;
(function (EnvType) {
    EnvType["dev"] = "dev";
    EnvType["test"] = "test";
    EnvType["prod"] = "prod";
})(EnvType || (EnvType = {}));
function getAction(env, userRole) {
    switch (true) {
        case userRole == "admin":
            return "Full access granted";
        case userRole == "developer" && env === EnvType.dev:
            return "Access to dev environment";
        case userRole == "tester" && env === EnvType.test:
            return "Access to test server";
        case userRole == "user" && env === EnvType.prod:
            return "User access to production database";
        default:
            return "You Shall Not Pass!!!";
    }
}
console.log(getAction(EnvType.dev, "admin"));
console.log(getAction(EnvType.dev, "developer"));
console.log(getAction(EnvType.test, "tester"));
console.log(getAction(EnvType.prod, "user"));
console.log(getAction(EnvType.prod, "big-bad-hAcKer"));
function greet(name = "Alice") {
    return `Hi there ${name}!`;
}
console.log(greet("Bob"));
console.log(greet());
