function parentAges(myAge=0){
    console.log("Your age is "+ myAge);
    momAge = myAge * 2
    dadAge = momAge * 1.2
    console.log("Your mom is " + momAge + " years old");
    console.log("Your dad is " + dadAge + " years old");
    return {momAge:momAge, dadAge:dadAge}
}

function ex(){
    let result = parentAges(45)
    console.log(result)
}
