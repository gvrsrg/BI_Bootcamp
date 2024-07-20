import { people } from "./data.js";

// Write a function that calculates and prints the average age of all the persons in the array.

// Use the imported array and the average age function in app.js.

function averageAge(arr) {

    return arr.reduce((acc, person) => acc + person.age, 0) / arr.length
    
}

console.log(averageAge(people))
