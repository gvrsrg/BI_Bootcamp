// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
function excercise5() {
    console.log("Excercise 5")

    const family = {
        "daughter": {
            "firstName": "Barbara",
            "middleName": "Millicent",
            "nickName": "Barbie",
            "lastName": "Roberts",
            "age": 19
        },
        "mother": {
            "firstName": "Margaret",
            "middleName": "Janet",
            "nickName": "Margie",
            "lastName": "Roberts",
            "age": 45
        },
        "father": {
            "firstName": "George",
            "middleName": "Peter",
            "nickName": "Pete",
            "lastName": "Roberts",
            "age": 48
        },
        "sister": {
            "firstName": "Skipper",
            "middleName": "Madison",
            "nickName": "Skip",
            "lastName": "Roberts",
            "age": 16
        },
        "brother": {
            "firstName": "Ken",
            "middleName": "Carson",
            "nickName": "Ken",
            "lastName": "Roberts",
            "age": 21
        }
    }

    for (let key in family){
        console.log(key)
    }

    for (let key in family){
        console.log(family[key])
    }
    
}