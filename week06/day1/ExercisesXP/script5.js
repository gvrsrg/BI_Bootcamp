// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

//function declaration
function kgToGrams1(kg) {
    return kg * 1000;
    }

    console.log(kgToGrams1(1));


//function expression    
let kgToGrams2 = function (kg){
    return kg * 1000;
}

// function expression assigns function to variable. Function itself doesn't have a name, it is anonymous function

console.log(kgToGrams2(2));

//arrow function
const kgToGrams3 = kg => kg * 1000

console.log(kgToGrams3(3));


