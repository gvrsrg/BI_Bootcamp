export function multi(a,b) {
    return a * b
}

export function plus(a,b) {
    return a + b
}

export function minus(a,b) {
    return a - b
}

export function divide(a,b) {
    if (b===0){
        throw new Error("Division by zero!")
    }
    return a / b
}


// module.exports = {
//     multi,
//     plus,
//     minus,
//     divide
// }
