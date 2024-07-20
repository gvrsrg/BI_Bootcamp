import {greet} from './greeting.js'

import { colorfulMessage } from './colorful-message.js';
import { read_file } from "./read-file.js";


console.log(colorfulMessage(greet('Sergey')));

let data = await read_file('./files/file-data.txt');
console.log(data);