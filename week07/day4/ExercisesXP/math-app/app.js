import lodash from 'lodash';
import { add, multiply } from './math.js'

const mathAdd = add(4,6)
const mathMultiply = multiply(4,9)

console.log("add: ", mathAdd);
console.log("multiply: ", mathMultiply);

console.log("divide: ", lodash.divide(mathMultiply, mathAdd));
console.log("subtract: ", lodash.subtract(mathMultiply, mathAdd));



