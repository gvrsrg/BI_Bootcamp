import {robots} from './assets/assets.js'

function makeRobotCard(robot) {

    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
    <img class="circle" src="${robot.image}" alt="${robot.name}">
    <h2>${robot.name}</h2>
    <p>${robot.email}</p>
    `;

    return card;

}

const container = document.querySelector('.container');
function showRobots(arrRobots){
    container.innerHTML = '';
    for (const robot of arrRobots) {
        container.appendChild(makeRobotCard(robot));
    }
}

showRobots(robots)

const search= document.querySelector("#search")
search.addEventListener('input', (e)=>{
    const searchValue = e.target.value.toLowerCase();
    showRobots(robots.filter(item => item.name.toLowerCase().includes(searchValue) || searchValue === ''))
    console.log(searchValue)
})