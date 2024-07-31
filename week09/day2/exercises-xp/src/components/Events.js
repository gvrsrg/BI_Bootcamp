import React from 'react'

export default function Events() {
    const clickMe = () => {
        alert("I was clicked");
      };
      
      const handleKeyDown = (event) => {
        if (event.key === "Enter")
          alert(`The ENTER key was pressed, your input is: ${event.target.value}`);
      };
      


    return (
        <>
            <button onClick={clickMe}>Events</button>
            <input type="text" onKeyPress={handleKeyDown} />
        </>
    )
}
