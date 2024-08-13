"use strict";
// 🌟 Exercise 1: Class with Access Modifiers
// Create a class Person with the following properties:
// A private property firstName of type string.
// A private property lastName of type string.
// A public property age of type number.
// A protected property address of type string.
// Also, include a constructor to initialize these properties and a method getFullName that returns the full name of the person.
// In this exercise, a class Person is created with different access modifiers for its properties: 
// private for firstName and lastName, 
// public for age, and protected for address. 
// The constructor initializes these properties, and the method getFullName returns the full name of the person.
class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    getFullName() {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        return "Engine started";
    }
}
// 🌟 Exercise 3: Using Intersection Types
// Instructions
// Create a function combineObjects that accepts two objects and combines them using intersection types.
// The function should return a new object containing all properties from both input objects.
// In this exercise, a function combineObjects accepts two objects of types T and U and returns a new object
// containing all properties from both input objects using intersection types.
// The function uses the spread operator to combine the properties of the two objects.
function combineObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
console.log(combineObjects({ name: "Sergey", age: 46 }, { name: "Sergey", married: true, numOfChildren: 3 }));
//{name: 'Sergey', age: 46, married: true, numOfChildren: 3}
console.log(combineObjects({ name: "Sergey", age: 46, numOfChildren: 3 }, { name: "Alex", married: false }));
//{name: 'Alex', age: 46, numOfChildren: 3, married: false} // - name property overwritten
// 🌟 Exercise 4: Using Generics with Classes
// Create a generic class Stack<T> that supports the following operations:
// A push method that adds an element of type T to the stack.
// A pop method that removes the top element from the stack and returns it.
// An isEmpty method that checks whether the stack is empty.
// In this exercise, a generic class Stack<T> represents a stack data structure. The class supports operations such as push, pop, and isEmpty. The push method adds an element of type T to the stack, the pop method removes and returns the top element, and the isEmpty method checks if the stack is empty.
class Stack {
    constructor(elements = []) {
        this.elements = [];
        this.elements = elements;
    }
    push(element) {
        this.elements.push(element);
    }
    pop() {
        return this.elements.pop();
    }
    isEmpty() {
        return this.elements.length === 0;
    }
}
const stack = new Stack([1, 2, 3]);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
// 🌟 Exercise 5: Using Generics with Functions
// Instructions
// Create a generic function filterArray<T> that accepts an array of type T and a predicate function (element: T) => boolean. 
// The function should return a new array containing elements that satisfy the predicate.
// In this exercise, a generic function filterArray<T> accepts an array of type T and a predicate function (element: T) => boolean.
// The function returns a new array containing elements that satisfy the predicate function. 
// This approach demonstrates how to use generics with functions to create flexible and reusable code for filtering arrays of various types.
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);
