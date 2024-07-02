// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

const planePrices = {
    'london': 183,
    'paris': 220,
    'other': 300
}

function hotelCost(){
    const HOTEL_PRICE = 140
    let answer = prompt('How many nights would you like to stay in the hotel?')
    while (isNaN(answer)){
        answer = prompt('Please enter a number')
    }
    return answer * HOTEL_PRICE
}


function planeRideCost(){
    let answer = ''
    while (/\d/.test(answer) || answer.length == 0){
        answer = prompt('Please enter your destination (London, Paris or other')
    }

    if (!(answer.toLowerCase() in ['london', 'paris'])){
        answer = 'other'
    }
    return planePrices[answer.toLowerCase()]
}


function rentalCarCost(){
    const CAR_PRICE = 40
    const DISCOUNT = 0.95
    const DAYSFORDISCOUNT = 10


    let answer = prompt('How many days would you like to rent the car?')
    while (isNaN(answer)){
        answer = prompt('Please enter a number')
        }

    if (answer > DAYSFORDISCOUNT){
        return answer * CAR_PRICE * DISCOUNT
    }

    return answer * CAR_PRICE
    }



function totalVacationCost(){
    let totalCost = hotelCost() + planeRideCost() + rentalCarCost();
    return totalCost
}
function exercise4(){
    console.log(totalVacationCost())
}
