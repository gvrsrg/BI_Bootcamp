import React from 'react'

export default function Button({setCount}) {
  return (
    <button onClick={() => setCount(count => count + 1)}>+</button>
  )
}

