const { products } = require('./products.js')

function findProduct(name) {

    return products.find(product => product.name === name)
    
}

let prod1 = findProduct('Book')
let prod2 = findProduct('Books')
let prod3 = findProduct('Laptop')
let prod4 = findProduct('Desk Chair')

console.log(prod1)
console.log(prod2)
console.log(prod3)
console.log(prod4)
