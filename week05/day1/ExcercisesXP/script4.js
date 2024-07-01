// Exercise 4 : Building Management
// Instructions:


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

function excercise4() {
    console.log("Excercise 4")
    const building = {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
        },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent:  {
            sarah: [3, 990],
            dan:  [4, 1000],
            david: [1, 500],
        },
    }
    console.log(`Number of floors in the building: ${building.numberOfFloors}`)
    console.log(`Number of apartments on floor 1: ${building.numberOfAptByFloor.firstFloor} and 3: ${building.numberOfAptByFloor.thirdFloor}`)
    console.log(`Name of the second tenant: ${building.nameOfTenants[1]} and number of room is: ${building.numberOfRoomsAndRent.dan[0]}`)
    if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
        building.numberOfRoomsAndRent.dan[1] = 1200
    }
    console.log(`${building.nameOfTenants[1]}'s rent is ${building.numberOfRoomsAndRent.dan[1]}`)

}

