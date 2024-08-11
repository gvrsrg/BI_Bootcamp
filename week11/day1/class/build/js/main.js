"use strict";
let username = 'John';
console.log(username);
username = 'Daniel';
console.log(username);
// username = 42
// console.log(username);
let a = 11;
let b = "b";
let c = 33;
// console.log(a + b)
// console.log(a + c)
// console.log(a / b)
let num = 36;
num = 42;
console.log(num);
let str1 = 'qwe';
let str2 = 'qwe';
console.log(str1, str2);
let bool = true;
console.log(bool);
let arr = [1, 2, 3];
console.log(arr);
let arr2 = [1, 2, 3];
console.log(arr2);
let tuple = [1, '2'];
console.log(tuple);
let any = 42;
any = "asd";
any = true;
console.log(any);
let void1 = undefined;
console.log(void1);
// let nvr: never
// console.log(nvr)
let union;
union = 42;
union = "42";
union = true;
let u = undefined;
console.log(u);
let regex = /\w+/g;
console.log(regex);
let date = new Date();
console.log(date);
let user1 = {
    name: "John",
    age: 42
};
let user2 = {
    name: "John",
    age: 42,
    address: "London",
    active: true
};
let user3 = {
    name: "John",
    age: 42,
    active: true
};
console.log(user1, user2, user3);
var Grades;
(function (Grades) {
    Grades[Grades["A"] = 1] = "A";
    Grades[Grades["B"] = 2] = "B";
    Grades[Grades["C"] = 3] = "C";
})(Grades || (Grades = {}));
let grade = Grades.B;
console.log(Grades[3]);
let stat;
stat = "success";
let student1 = {
    name: "John",
    age: 42,
    isGood: 10
};
let student2 = {
    name: "John",
    age: 42,
    isGood: true
};
let student3 = {
    name: "John",
    age: 42,
    isGood: "yes"
};
console.log(student1, student2, student3);
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 2));
const greet = (name) => {
    console.log(`Hello ${name}`);
};
greet("John");
const addition = (a, b) => {
    return a + b;
};
const addOptional = (a, b) => {
    return a + (b || 0);
};
