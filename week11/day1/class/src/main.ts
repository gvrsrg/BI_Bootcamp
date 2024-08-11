let username = 'John'
console.log(username);

username = 'Daniel'
console.log(username);

// username = 42
// console.log(username);

let a = 11
let b = "b"
let c = 33

// console.log(a + b)
// console.log(a + c)
// console.log(a / b)

let num: number = 36

num = 42

console.log(num)

let str1 = 'qwe'

let str2: string = 'qwe'

console.log(str1, str2)

let bool: boolean = true

console.log(bool)

let arr: number[] = [1, 2, 3]

console.log(arr)

let arr2: Array<number> = [1, 2, 3]

console.log(arr2)

let tuple: [number, string] = [1, '2']

console.log(tuple)

let any: any = 42
any = "asd"
any = true

console.log(any)

let void1: void = undefined

console.log(void1)

// let nvr: never
// console.log(nvr)

let union: number | string | boolean

union = 42
union = "42"
union = true


let u: undefined = undefined

console.log(u)

let regex: RegExp = /\w+/g;

console.log(regex)

let date: Date = new Date();

console.log(date)

let user1: object = {
    name:"John",
    age: 42
}

type User = {
    name: string,
    age: number,
    address?: string, //? - optional property
    active: boolean
}

let user2: User = {
    name:"John",
    age: 42,
    address: "London",
    active: true
}

let user3: User = {
    name:"John",
    age: 42,
    active: true
}
console.log(user1, user2, user3)

interface UserI {
    name: string,
    age: number,
    address?: string,
    active: boolean
}

enum Grades {
    A=1,
    B,
    C
}

let grade:Grades = Grades.B

console.log(Grades[3]);

let stat: "loading" | "success" | "failed"

stat = "success"

type StrOrNum = string | number

type StudGrade = StrOrNum | boolean

type Student ={
    name: string,
    age: number,
    isGood: StudGrade
}

let student1: Student = {
    name: "John",
    age: 42,
    isGood: 10
}

let student2: Student = {
    name: "John",
    age: 42,
    isGood: true
}

let student3: Student = {
    name: "John",
    age: 42,
    isGood: "yes"
}


console.log(student1, student2, student3)

const sum = (a: number, b: number): number =>{
    return a + b
}


console.log(sum(1, 2))

const greet = (name: string): void => {
    console.log(`Hello ${name}`)
}

greet("John")

type SumFunc = (a: number, b: number)=> number


const addition: SumFunc = (a, b) => {
    return a + b
}

const addOptional = (a: number, b?: number):number => {
    return a + (b || 0)
}