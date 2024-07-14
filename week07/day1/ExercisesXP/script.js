// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
function ex1() {
    const compareToTen = (num) =>{
        return new Promise((resolve, reject) => {
            if (num <= 10) resolve("The number is less than or equal to 10");
            else reject("The number is greater than 10");
        })
    }

    compareToTen(15)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        
    compareToTen(8)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}


// Create a promise that resolves itself in 4 seconds and returns a “success” string.
function ex2() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 4000);
    });
    console.log(promise);
    promise
    .then((data) =>{
        console.log(data)
        console.log(promise);
    });

}


// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
function ex3() {
    const promise1 = Promise.resolve(3);
    const promise2 = Promise.reject("Boo!");
    console.log(promise1);
    console.log(promise2);
}

