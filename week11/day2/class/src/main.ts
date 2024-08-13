//Classes
//access modifiers

/*
    public - all
    private - class
    protected - class+subclass
    readonly - constructor only
*/

// class User {
//     public name: string;
//     protected age: number;
//     protected active: boolean;

//     constructor(name: string, age: number, active: boolean) {
//         this.name = name;
//         this.age = age;
//         this.active = active;
//     }

//     public getAge(): string {
//         return `My age is ${this.age}`;
//     }

//     public getName(): string {
//         return `My name is ${this.name}`;
//     }

//     public getActive(): string {
//         return `I am ${this.active ? "active" : "not active"}`;
//     }

//     setAge(age:number) {
//         this.age = age
//     }

//     setName(name:string) {
//         this.name = name
//     }

//     setActive(active:boolean) {
//         this.active = active
//     }
// }

// let user1 = new User("John", 25, true)

// console.log(user1.getAge())
// //console.log(user1.age) // 
// console.log(user1.getName())
// console.log(user1.getActive())

// class Student extends User{

//     private email: string;

//     constructor(name: string, age: number, active: boolean, email: string) {
//         super(name, age, active);
//         this.email = email;
//     }

//     public getEmail(): string {
//         return `My email is ${this.email}`;
//     }

//     setEmail(email:string) {
//         this.email = email
//     }

//     setStudentAge(age:number) {
//         this.age = age
//     }

//     setStudentName(name:string) {
//         this.name = name
//     }

//     setStudentActive(active:boolean) {
//         this.active = active
//     }

// }

// let student1 = new Student("Anne", 22, true, "ann@univer.ac.il")

// console.log(student1.getName())
// console.log(student1.getAge())
// console.log(student1.getActive())
// console.log(student1.getEmail())

// //static methods

// class Peeps {
//     static count: number = 0
    
//     static getCount(): number {
//         return Peeps.count
//     }

//     public id:number

//     constructor(public name: string) {
//         this.id = ++Peeps.count
//         this.name = name
//     }


//     static getStaticName() {
//         return "static name"
//     }
// }


// console.log(Peeps.getStaticName())

// let peep1 = new Peeps("John")
// let peep2 = new Peeps("Mary")
// let peep3 = new Peeps("Ann")
// let peep4 = new Peeps("Josef")

// console.log(peep1.name, peep1.id)
// console.log(peep2.name, peep2.id)
// console.log(peep3.name, peep3.id)
// console.log(peep4.name, peep4.id)

// console.log(Peeps.getCount())

type UserType = {
    name: string;
    age: number;
    active: boolean;
} 

interface UserInterface {
    name: string;
    age: number;
    active: boolean;
    getAge(): number
} 


type Grade = {
    grade: number;
}


type StudentType = UserType & Grade

let student2:StudentType = {
    name: "John",
    age: 25,
    active: true,
    grade: 90
}

class User implements UserInterface {

    public _name: string;
    protected _age: number;
    private _active: boolean;

    constructor(name: string, age: number, active: boolean) {
        this._name = name;
        this._age = age;
        this._active = active;
    }

    public getAge(): number {
        return this._age;
    }

    public get age(): number {
        return this._age;
    }
    public get name(): string {
        return this._name;
    }
    public get active(): boolean {
        return this._active;
    }

    set age(age:number) {
        this._age = age
    }
    set name(name:string) {
        this._name = name
    }
    set active(active:boolean) {
        this._active = active
    }

}
