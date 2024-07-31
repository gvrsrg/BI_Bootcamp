import React from 'react'
import { useState } from 'react'

export default function Events() {
  const [isToggleOn, setToggle] = useState(true)
    const clickMe = () => {
        alert("I was clicked");
      };
      
      const handleKeyDown = (event) => {
        if (event.key === "Enter")
          alert(`The ENTER key was pressed, your input is: ${event.target.value}`);
      };

    const toggle = () =>{
        setToggle(!isToggleOn)
    }
      


    return (
        <>
            <button onClick={clickMe}>Events</button>
            <input type="text" onKeyPress={handleKeyDown} />
            <button onClick={toggle} checked={isToggleOn}>{isToggleOn?'ON':'OFF'} </button>
        </>
    )
}
