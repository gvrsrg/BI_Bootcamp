// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
function ex1() {
    const person = {
        name: 'John Doe',
        age: 25,
        location: {
            country: 'Canada',
            city: 'Vancouver',
            coordinates: [49.2827, -123.1207]
        }
    }
    
    const {name, location: {country, city, coordinates: [lat, lng]}} = person;
    
    console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
    // I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)    
}




// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'
function ex2() {
    function displayStudentInfo(objUser){
        const {first, last} = objUser;
        console.log(`Your full name is ${first} ${last}`);
    }

    displayStudentInfo({first: 'Elie', last:'Schoppik'});
    
}

// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

function ex3() {
    const users = { user1: 18273, user2: 92833, user3: 90315 }

    const usersArray = Object.entries(users);

    console.log(usersArray);

    console.log(usersArray.map((user) => [user[0], user[1] * 2]));
}

function ex4() {
    class Person {
        constructor(name) {
          this.name = name;
        }
    }
    const member = new Person('John');
    console.log(typeof member);
    //object
}


function ex5() {
    class Dog {
        constructor(name) {
          this.name = name;
        }
      };    
    // 1
    // // // This doesn't call super to assign name
    // class Labrador extends Dog {
    //     constructor(name, size) {
    //         this.size = size;
    //     }
    // };


    // 2
    // This is correct
    class Labrador extends Dog {
        constructor(name, size) {
            super(name);
            this.size = size;
        }
    };


    // // 3
    // // This doesn't get name as a constructor parameter
    // class Labrador extends Dog {
    //     constructor(size) {
    //         super(name);
    //         this.size = size;
    //     }
    // };


    // 4
    // Must call super(name) to assign name
    // class Labrador extends Dog {
    //     constructor(name, size) {
    //         this.name = name;
    //         this.size = size;
    //     }
    // };

    let ddd = new Labrador("Goofy","large")
    console.log(ddd)
}


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. 
//The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

function ex6() {
    const object1 = { number: 5 }; 
    const object2 = object1; 
    const object3 = object2; 
    const object4 = { number: 5};

    object1.number = 4;
    console.log(object1.number)
    console.log(object2.number)
    console.log(object3.number)
    console.log(object4.number)
    
    class Animal{

        constructor(name, type, color){
            this.name = name
            this.type = type
            this.color = color
        }


    }
    class Mamal extends Animal{

        constructor(name, type, color){
            super(name, type, color)
        }

        sound(theSound){
            console.log(`${theSound}  I'm a ${this.type}, named ${this.name} and I'm ${this.color}`)
        }

    }

    let farmerCow = new Mamal("Lily", "cow", "brown and white")

    farmerCow.sound("Moooo")
    



}