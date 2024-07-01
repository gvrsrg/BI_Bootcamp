// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
function excercise2(){
    let colors = ["blue", "red", "green", "yellow", "purple"]

    function getSuffix(number){
        let suffixes = ["th","st","nd","rd"];
        let index = 0;
        if (number < 4 || number>20){
            index = Math.min(number%10,4)%4;
        }
        return suffixes[index]
    }

    for (let i = 0; i < colors.length; i++){
        let suffix = getSuffix(i+1);
        console.log(`My ${i+1}${suffix} choice is ${colors[i]}`)
    }
}