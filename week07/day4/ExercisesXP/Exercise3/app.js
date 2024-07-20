import { readFile, writeFile } from "./fileManager.js";


const fileNameFrom = './Hello World.txt'
const fileNameTo = './Bye World.txt'

console.log(readFile(fileNameFrom))

writeFile(fileNameTo, "Writing to the file")
