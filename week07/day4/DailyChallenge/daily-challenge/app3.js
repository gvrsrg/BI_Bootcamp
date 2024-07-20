import { read_file } from "./read-file.js";

let data = await read_file('./files/file-data.txt');
console.log(data);
