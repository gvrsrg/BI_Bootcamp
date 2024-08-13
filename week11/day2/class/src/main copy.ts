// function overload

function add(a:number, b:number):number;
function add(a:string, b:string):string;

function add(a:string|number, b:string|number):string|number{

    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }else if(typeof a === "string" && typeof b === "string"){
        return a + b;
    }else{
        return -1
    }
}

const addRest = (a:number, ...rest:number[]) =>{
    return a + rest.reduce((a, b) => a + b, 0)
}

console.log(add(1, 2));
console.log(add("Hello ", "World"));
console.log(addRest(10, 2, 3, 4, 5, 6, 7, 8, 9, 10))



//DOM elements

const img1= document.getElementById("img");
const img2= document.getElementById("img")!;
const img3= document.getElementById("img") as HTMLImageElement;

// if (img1) {
//     img1.src = add("https://", "www.google.com");

// img2.src = add("https://", "www.google.com");
// img3.src = add("https://", "www.google.com");

const input = <HTMLInputElement>document.querySelector("input")
const input1 = document.querySelector("input") as HTMLInputElement

const yearElement = document.getElementById("year") as HTMLSpanElement
const year:string = new Date().getFullYear().toString();
yearElement ? yearElement.textContent = year : ''