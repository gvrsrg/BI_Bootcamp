function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function renderPerson(person, homeworldData) {

    const name = document.getElementById("name");
    const height = document.getElementById("height");
    const gender = document.getElementById("gender");
    const birthYear = document.getElementById("birth-year");
    const homeworld = document.getElementById("home-world");
    const spinner = document.getElementById('spinner');
    spinner.innerHTML = "";

    name.innerHTML = person.name;
    height.innerHTML = `Heigth: ${person.height}`;
    gender.innerHTML = `Gender: ${person.gender}`;
    birthYear.innerHTML = `Birth year: ${person.birth_year}`;
    homeworld.innerHTML = `Home World: ${homeworldData.name}`;

}


function renderError(error) {

    const name = document.getElementById("name");

    const height = document.getElementById("height");
    const gender = document.getElementById("gender");
    const birthYear = document.getElementById("birth-year");
    const homeworld = document.getElementById("home-world");
    const spinner = document.getElementById('spinner');
    spinner.innerHTML = "";
    name.innerHTML = error;
    height.innerHTML = "";
    gender.innerHTML = "";
    birthYear.innerHTML = "";
    homeworld.innerHTML = "";

}

function clearInfo() {
    const name = document.getElementById("name");

    const height = document.getElementById("height");
    const gender = document.getElementById("gender");
    const birthYear = document.getElementById("birth-year");
    const homeworld = document.getElementById("home-world");
    const spinner = document.getElementById('spinner');
    spinner.innerHTML = "";
    name.innerHTML = "";
    height.innerHTML = "";
    gender.innerHTML = "";
    birthYear.innerHTML = "";
    homeworld.innerHTML = "";

}


async function fetchFromSWAPI(url) {
    clearInfo();
    const loading = `
    <div class="fa-3x">
        <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        <i class="fa-solid fa-compact-disc fa-flip"></i>
        <br>Loading...
    </div>`;
    const spinner = document.getElementById('spinner');
    spinner.innerHTML = loading;
    try {
        const response = await fetch(url);
        if (!response.ok){
            spinner.innerHTML = "";
            renderError('Something went wrong. Try again.')
            throw new Error(response.status);
        }
        const data = await response.json();

        return data.result.properties;

    } catch (err) {
        renderError('Something went wrong. Try again.')
        throw new Error(err);
    }
}

function getPerson(numPerson) {
    const url = `https://www.swapi.tech/api/people/${numPerson}`;
    return fetchFromSWAPI(url);
}

function getWorld(worldURL) {
    return fetchFromSWAPI(worldURL)
}


const findBtn = document.getElementById("button");
findBtn.addEventListener("click", async () => {

    const person = await getPerson(getRandomInt(83));
    //const person = await getPerson(84); //to check error handling
    const { homeworld } = person;
    const homeworldData = await getWorld(homeworld);
  
    renderPerson(person, homeworldData);
})


