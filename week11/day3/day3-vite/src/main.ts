//Index signatures/keys

interface EmployeeInterface {
  [key: string | number]: string | number | boolean;
  name: string;
  age: number;
  role: string;
}

let employee1: EmployeeInterface = {
  name: "Sergey",
  age: 46,
  role: "developer",
};

// const logEmployee = (
//   employee: EmployeeInterface,
//   key: keyof EmployeeInterface
// ): void => {
//   console.log(key, employee[key]);
// }

//console.log(employee1.name);
// console.log(employee1["age"]);

employee1.active = true

// dynamic keys

//let prop1:string = "name"

//console.log(employee1[prop1 as keyof EmployeeInterface]);
//console.log(employee1[prop1 as keyof type of employee1]);

// logEmployee(employee1, "age")

// interface Student {
//   name: string;
//   grade: number;
//   courses?:string[]
// }

// const logStudent = (
//   student: Student,
//   key: keyof Student
// ): void => {
//   console.log(key, student[key]);
// }

// const student1: Student = {
//   name: "Sergey",
//   grade: 77
// }

// const student2: Student = {
//   name: "John",
//   grade: 75,
//   courses: ["Math", "English"]
// }

// Object.keys(student1).forEach(key => logStudent(student1, key as keyof Student))

// console.log(student2.courses?.[0])

// Record type <T>

// type keys = "name" | "age" | "role"
// type EmployeeType = Record<keys, string | number>

// const employee2: EmployeeType = {
//   name: 77,
//   age: 46,
//   role: "developer",
// }

// console.log(employee2)

// for (let key in employee2){
//   console.log(key, employee2[key as keyof EmployeeType])
//   console.log(key, employee2[key as keyof typeof employee2])
// }

// Generics

//const strEcho = (value: string): string => value;

//const echo = <T>(value: T): T => value;

// console.log(echo(42));
// console.log(echo("Hello"));
// console.log(echo(true));
// console.log(echo({ name: "Sergey", age: 46 }));

// interface boolCheck<T> {
//   arg: T;
//   is: boolean;
// }



// const isObj = <T>(value: T): boolCheck<T> => {
//   let is = typeof value === "object" && !Array.isArray(value) && value !== null;
//   return { arg: value, is };
// };

// console.log(isObj(42));
// console.log(isObj("Hello"));
// console.log(isObj(true));
// console.log(isObj([1, 2, 3]));
// console.log(isObj({ name: "Sergey", age: 46 }));
// console.log(isObj(null));

interface HasId {
  id: number;
}

// const checkHasID = <T extends HasId>(obj: T): T => {
//   return obj;
// };

// console.log(checkHasID({ id: 42, name: "Sergey", age: 46 }));
// console.log(checkHasID({ name: "Sergey", age: 46 }));

const userJson = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];


const getUserInfo = <T extends HasId, K extends keyof T> (users: T[], key: K): T[K][] => {
  return users.map(user => user[key]);
}

console.log(getUserInfo(userJson, "email"));


// Generics with class

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }

}


const state = new StateObject("Sergey");
console.log(state.state);
state.state = "Anton";
console.log(state.state);
//state.state = 123;
console.log(state.state);





// Utility types 

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const post1: Partial<Post> = {
  id: 1,
  title: "Hello",
  content: "World",
}





