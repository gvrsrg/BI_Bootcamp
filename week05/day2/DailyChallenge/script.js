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
        moonContainer = document.createElement('div');
        moonContainer.classList.add('mooncontainer')
        for (let moon in moons){
            let newMoon = document.createElement('div')
            newMoon.classList.add('moon')
            newMoon.classList.add('mooninline')  //moon1, moon2 ...
            newMoon.textContent = planetDetails["moons"][moon]
            moonContainer.append(newMoon)
        }
        planetDiv.append(moonContainer)
    }    
    }


function dailyChallenge(){
    var stylemooninline = document.createElement('style');
    stylemooninline.type = 'text/css';
    stylemooninline.innerHTML = '.mooninline { display:inline-block; position: relative; }';
    document.getElementsByTagName('head')[0].appendChild(stylemooninline);

    var stylemooncontainer = document.createElement('style');
    stylemooncontainer.type = 'text/css';
    stylemooncontainer.innerHTML = '.mooncontainer { display: flex; flex-direction: row;}';
    document.getElementsByTagName('head')[0].appendChild(stylemooncontainer);


    
    for (let planet of planets){
        let newDiv = document.createElement('div')
        newDiv.classList.add('planet')
        newDiv.classList.add(planet.toLocaleLowerCase())
        newDiv.textContent = planet
        populatePlanetWithMoons(newDiv)
        document.querySelector('.listPlanets').append(newDiv)
    }
}