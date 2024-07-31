// Create a new Functional Component named Phone. Use the state hook to create the following state variables:
// brand: "Samsung"
// model: "Galaxy S20"
// color: "black"
// year: 2020

import React from 'react'


export default function Phone() {
    const [brand, setBrand] = React.useState("Samsung");
    const [model, setModel] = React.useState("Galaxy S20");
    const [color, setColor] = React.useState("black");
    const [year, setYear] = React.useState(2020);

    const changeColor = () => setColor(color=="blue"?"black":"blue");


    return (

        <div>
            <h1>My phone is a {brand}</h1>
            <p>It is a {color} {model} from {year}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}