const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

const solarSystem = [
    { 
        planet: "Mercury", 
        color: "#b0b0b0",  // Gray
        moons: [] 
    },
    { 
        planet: "Venus", 
        color: "#e3c990",  // Pale yellow
        moons: [] 
    },
    { 
        planet: "Earth", 
        color: "#0000ff",  // Blue
        moons: ["Moon"] 
    },
    { 
        planet: "Mars", 
        color: "#ff0000",  // Red
        moons: ["Phobos", "Deimos"] 
    },
    { 
        planet: "Jupiter", 
        color: "#ffa500",  // Orange
        moons: ["Io", "Europa", "Ganymede", "Callisto", "Amalthea", "Himalia", "Elara", "Pasiphae", "Sinope", "Lysithea", "Carme", "Ananke", "Leda"] 
    },
    { 
        planet: "Saturn", 
        color: "#ffd700",  // Gold
        moons: ["Mimas", "Enceladus", "Tethys", "Dione", "Rhea", "Titan", "Hyperion", "Iapetus", "Phoebe"] 
    },
    { 
        planet: "Uranus", 
        color: "#00ffff",  // Cyan
        moons: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon", "Caliban", "Sycorax", "Prospero", "Setebos", "Stephano", "Trinculo"] 
    },
    { 
        planet: "Neptune", 
        color: "#0000ff",  // Blue
        moons: ["Triton", "Nereid", "Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "Proteus", "Halimede", "Psamathe", "Sao", "Laomedeia", "Neso"] 
    }
];

function populatePlanetWithMoons(planetDiv){
    let planetName = planetDiv.textContent
    let planetDetails = solarSystem[planets.indexOf(planetName)]

    planetDiv.style.backgroundColor = planetDetails["color"]
    planetDiv.classList.add(planetName)
    let moons = planetDetails["moons"]
    if (moons.length>0){
        let moonContainer = document.createElement('div');
        moonContainer.classList.add('mooncontainer')
        for (let moon in moons){
            let newMoon = document.createElement('div')
            newMoon.classList.add('moon')
            newMoon.style.left = moon*30+'px'
            newMoon.textContent = planetDetails["moons"][moon]
            moonContainer.appendChild(newMoon)
        }
        planetDiv.appendChild(moonContainer)
    }    
    }


function dailyChallenge(){
    let container = document.getElementsByClassName('listPlanets')[0]
    for (let planet of planets){
        let newDiv = document.createElement('div')
        newDiv.classList.add('planet')
        newDiv.classList.add(planet.toLocaleLowerCase())
        newDiv.textContent = planet
        populatePlanetWithMoons(newDiv)
        container.append(newDiv)
    }
    let button = document.getElementById('populatePlanets')
    button.setAttribute('disabled', true);
}