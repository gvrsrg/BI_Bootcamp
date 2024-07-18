import { multi, plus, minus, divide } from './math.js';

try {
    console.log(multi(4,0));
} catch (error) {
    console.log(error.message);
}

try {
    console.log(plus(6,1));
} catch (error) {
    console.log(error.message);
}

try {
    console.log(minus(8,0));
} catch (error) {
    console.log(error.message);
}

try {
    console.log(divide(12,2))
} catch (error) {
    console.log(error.message);
}

try {
    console.log(divide(12,0))
} catch (error) {
    console.log(error.message);
}
