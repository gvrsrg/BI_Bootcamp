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

    private firstName: string;
    private lastName: string;
    public age: number;
    protected address: string;

    constructor(firstName: string, lastName: string, age: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    public getFullName(): string {
        return `My name is ${this.firstName} ${this.lastName}`;
    }

}

// 🌟 Exercise 2: Extending Interfaces

// Instructions
// Create an interface Vehicle with properties make and model, both of type string, and a method start that returns a string.
// Then create an interface Car that extends Vehicle and includes an additional property numberOfDoors of type number.

// In this exercise, an interface Vehicle is created with common properties (make and model) and a method (start).
// Another interface Car extends Vehicle and includes an additional property numberOfDoors. 
// A class Sedan implements the Car interface and provides the implementation for the start method.

interface Vehicle {
    make: string;
    model: string;
    start(): string;
}

interface Car extends Vehicle {
    numberOfDoors: number;
}

class Sedan implements Car {

    constructor(public make: string, public model: string, public numberOfDoors: number) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }

    start(): string {
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

function combineObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

console.log(combineObjects({ name: "Sergey", age: 46 }, { name: "Sergey", married: true, numOfChildren:3 }));
//{name: 'Sergey', age: 46, married: true, numOfChildren: 3}

console.log(combineObjects({ name: "Sergey", age: 46, numOfChildren:3 }, { name: "Alex", married: false }));
//{name: 'Alex', age: 46, numOfChildren: 3, married: false} // - name property overwritten


// 🌟 Exercise 4: Using Generics with Classes
// Create a generic class Stack<T> that supports the following operations:

// A push method that adds an element of type T to the stack.
// A pop method that removes the top element from the stack and returns it.
// An isEmpty method that checks whether the stack is empty.
// In this exercise, a generic class Stack<T> represents a stack data structure. The class supports operations such as push, pop, and isEmpty. The push method adds an element of type T to the stack, the pop method removes and returns the top element, and the isEmpty method checks if the stack is empty.



class Stack<T> {
    private elements: T[] = [];

    constructor(elements:T[]=[]){
        this.elements = elements
    }
    push(element: T) {
      this.elements.push(element);
    }
    pop(): T | undefined {
      return this.elements.pop();
    }
    isEmpty(): boolean {
      return this.elements.length === 0;
    }
  }
  
const stack = new Stack<number>([1,2,3]);

stack.push(4)
stack.push(5)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.pop())
console.log(stack.isEmpty())


// 🌟 Exercise 5: Using Generics with Functions
// Instructions
// Create a generic function filterArray<T> that accepts an array of type T and a predicate function (element: T) => boolean. 
// The function should return a new array containing elements that satisfy the predicate.

// In this exercise, a generic function filterArray<T> accepts an array of type T and a predicate function (element: T) => boolean.
// The function returns a new array containing elements that satisfy the predicate function. 
// This approach demonstrates how to use generics with functions to create flexible and reusable code for filtering arrays of various types.


function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[] {
    return arr.filter(predicate);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

console.log(evenNumbers);
