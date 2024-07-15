// 🌟 Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

//      - You will work with this part of the documention

//      - You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

//      - q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

//      - rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

//      - api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// 1) Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

function ex1() {
    
    const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

    fetch(`https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${API_KEY}&limit=25`)
    .then((res) => {
        if (!res.ok) {
        throw new Error(`Error - ${res.status}`);
        }
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error("Error fetching giphy.", err));
}

// 🌟 Exercise 2 : Giphy API
// Instructions
// 1) Read carefully the documention to understand all the possible queries that the URL accept.
// 2) Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// 3) Console.log the Javascript Object that you receive.


function ex2() {
    const options = {
        method: 'GET',
        mode: 'cors',
        crossDomain: true,
        referrer: ""
      };  
    const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    fetch(`https://api.giphy.com/v1/gifs/search?q=sun&offset=2&rating=g&api_key=${API_KEY}&limit=10`)
    .then((res) => {
        if (!res.ok) {
        throw new Error(`Error - ${res.status}`);
        }
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error("Error fetching giphy.", err));
}


// 🌟 Exercise 3 : Async Function
// Instructions
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// 1) Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// 2) Make sure to check the status of the Response and to catch any occuring errors.

function ex3() {
    const url = "https://www.swapi.tech/api/starships/9/";

    async function fetchData(url) {
    try {
        const res = await fetch(url);

        if (!res.ok) {
        throw new Error(`Error - ${res.status}`);
        }

        const data = await res.json();
        console.log(data.result.properties);
    } catch (err) {
        console.error(err);
    }
    }

    fetchData(url);
    
}

// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();// --> It will print 'calling', then wait for resolving a promise, wich will take 2 seconds, and the result of the promise ('resolved') will be printed.