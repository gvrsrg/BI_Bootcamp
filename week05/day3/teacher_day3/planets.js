let solarSystem = [
  { name: "Mercury", moon: 0, color: "orange" },
  { name: "Venus", moon: 0, color: "grey" },
  { name: "Earth", moon: 1, color: "blue" },
  { name: "Mars", moon: 2, color: "red" },
  { name: "Jupiter", moon: 79, color: "brown" },
  { name: "Satturan", moon: 82, color: "yello" },
  { name: "Uranus", moon: 27, color: "ligthblue" },
  { name: "Neptune", moon: 14, color: "darkblue" },
];

let main = document.getElementById("listPlanets");

for (let i = 0; i < solarSystem.length; i++) {
  let planet = document.createElement("div");
  planet.classList.add("planet");
  planet.innerText = solarSystem[i].name;
  planet.style.backgroundColor = solarSystem[i].color;
  main.appendChild(planet);

  let moons = solarSystem[i].moon;
  let left = 0;
  for (let j = 0; j < moons; j++) {
    let moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.left = left + "px";
    left += 15;
    planet.appendChild(moon);
  }
}


let len = solarSystem.length
for (let i = 0; i < len; i++) {

}

for(let i = solarSystem.length-1; i >= 0; i--){
    
}