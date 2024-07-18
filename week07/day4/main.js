import {getInfo} from "./info.js";

const url = 'https://jsonplaceholder.typicode.com/users'


getInfo(url)
.then(info => console.log(info))