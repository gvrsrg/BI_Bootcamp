// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
function excercise3(){
    let num = 0
    do{
        num = prompt("Enter number")
        if (isNaN(num)){
            num = 0
        } else{
            num = Number(num)
        }
    } while (num < 10)

    console.log(num)
}