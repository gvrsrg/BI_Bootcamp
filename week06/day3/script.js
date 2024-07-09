function reduceNumber(n) {
    let result = n;
    while (result >= 10) {
        strN = new String(result).split('')
        arr = strN.map(item => parseInt(item))
        result = arr.reduce((prev, curr) => {
            return prev + curr;
        },0)
    }
    return result
}

console.log(reduceNumber(12345))
