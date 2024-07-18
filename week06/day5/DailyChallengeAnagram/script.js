function makeSortedArray(str){
    let arr = str.split('')
    arr.sort()
    let cleanArr = []
    arr.forEach(element => {
        if(element !== ' '){
            cleanArr.push(element.toLowerCase())
        };
    });

    return cleanArr.sort().join('')
}

function isAnagram(str1, str2){
    let arr1 = makeSortedArray(str1)
    let arr2 = makeSortedArray(str2)
    return arr1 === arr2

    if(arr1.length !== arr2.length){
        return false
    }

    arr1.forEach((element,index) => {
        if(element !== arr2[index]){
            return false
        }
    })

    return true
}


console.log(isAnagram("Astronomer","Moon starerttt"));
console.log(isAnagram("School master","The classroom"));
console.log(isAnagram("The Morse Code","Here come dots"));
