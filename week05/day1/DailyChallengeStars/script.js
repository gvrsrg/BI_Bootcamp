function dailyChallengeStars1(){

    let size = 5

    let stars = "";

    for (let i = 0; i < size; i++){
        stars += "*";
        console.log(stars)
    }
}

function dailyChallengeStars2(){

    let size = 5

    let stars = "";

    for (let i = 0; i < size; i++){
        stars = "";
        for (let j = 0; j< i+1; j++){
            stars += "*";
        }
        console.log(stars)
    }
}