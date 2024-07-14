// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

function dc1() {
        
    const makeAllCaps = (arr) =>{
        return new Promise((resolve, reject) => {
            if(arr.every((item) => typeof item === "string")) 
                resolve(arr.map((item) => item.toUpperCase()));
            else reject("Not all words are strings");
        })
    }

    const sortWords = (arr) =>{
        return new Promise((resolve, reject) => {
            if(arr.length > 4) 
                resolve(arr.sort());
            else reject("Array length is less than 4");
        })
    }


    //in this example, the catch method is executed
    makeAllCaps([1, "pear", "banana"])
        .then((arr) => sortWords(arr))
        .then((result) => console.log(result))
        .catch(error => console.log(error))

    //in this example, the catch method is executed
    makeAllCaps(["apple", "pear", "banana"])
        .then((arr) => sortWords(arr))
        .then((result) => console.log(result))
        .catch(error => console.log(error))

    //in this example, you should see in the console, 
    // the array of words uppercased and sorted
    makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
        .then((arr) => sortWords(arr))
        .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
        .catch(error => console.log(error))

}

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

function dc2() {
    const toJs = (morse)=>{
        return new Promise((resolve, reject) => {
            if(morse === "{}") reject("The morse javascript object is empty");
            else resolve(JSON.parse(morse));
        })
    }

    const toMorse = (morseJS)=>{
        return new Promise((resolve, reject) => {
            const userWord = prompt("Enter a word or a sentence");
            if(userWord.split('').every(letter => Object.keys(morseJS).indexOf(letter.toLowerCase())!=-1)){
                if(morseJS === undefined) reject("The morse javascript object is empty");
                else resolve(userWord.split('').map(letter => morseJS[letter.toLowerCase()]));
            } else {
                let badSymbols = new Set(userWord.split('').filter(letter => Object.keys(morseJS).indexOf(letter.toLowerCase())==-1))
                let badSymbolsStr = [...badSymbols].join(',')
                reject(`The character${badSymbolsStr.length>1? 's' : ''} ${badSymbolsStr} ${badSymbolsStr.length>1? "don't" : "doesn't"} exist in the morse javascript object`);
            }
        })
    }

    const joinWords = (morseTranslation)=>{
        const container = document.getElementById('container')
        container.innerHTML = morseTranslation.join("<br>")
    }

    toJs(morse)
        .then((morse) => toMorse(morse))
        .then((morseJS) => joinWords(morseJS)
        )
        .catch(error => console.log(error)) 
}


    
