// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313
function displayNumbersDivisible(divisor){
    let sum = 0
    let array23 = []
    for (let i = 0; i <= 500; i++){
        if (i%divisor == 0){
            array23.push(i)
            sum += i
        }
    }
    console.log(array23.join(' '))
    console.log(sum)
}

function exercise1(){
    displayNumbersDivisible(23)
}
