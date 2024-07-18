import { hashMyPassword, comparePassword } from "./hash.js";



const password = 'qwertyuiop';

let hashedPassword = hashMyPassword(password)

console.log(hashedPassword) 

console.log(comparePassword('qwerty', hashedPassword))
console.log(comparePassword('qwertyuiop', hashedPassword))

