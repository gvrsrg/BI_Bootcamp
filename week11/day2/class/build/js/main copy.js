"use strict";
// function overload
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        return -1;
    }
}
const addRest = (a, ...rest) => {
    return a + rest.reduce((a, b) => a + b, 0);
};
console.log(add(1, 2));
console.log(add("Hello ", "World"));
console.log(addRest(10, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//DOM elements
const img1 = document.getElementById("img");
const img2 = document.getElementById("img");
const img3 = document.getElementById("img");
// if (img1) {
//     img1.src = add("https://", "www.google.com");
// img2.src = add("https://", "www.google.com");
// img3.src = add("https://", "www.google.com");
const input = document.querySelector("input");
const input1 = document.querySelector("input");
const yearElement = document.getElementById("year");
const year = new Date().getFullYear().toString();
yearElement ? yearElement.textContent = year : '';
