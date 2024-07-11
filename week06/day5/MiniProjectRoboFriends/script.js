import {robots} from './assets/assets.js'

function makeRobotCard(robot) {

    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
    <img src="${robot.image}" alt="${robot.name}">
    <h2>${robot.name}</h2>
    <p>${robot.email}</p>
    `;

    return card;

}

const container = document.querySelector('.container');

for (const robot of robots) {

    container.append(makeRobotCard(robot));

}
