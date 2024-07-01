// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

function excercise6() {
    console.log("Excercise 6")
    const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
    }
    let result = []
    for (let key in details) {
        result.push(`${key} ${details[key]}`)
    }

    console.log(result.join(" "))
    
}