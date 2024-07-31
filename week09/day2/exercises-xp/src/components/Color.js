import { useState, useEffect } from 'react'


export default function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert('useEffect reached',)
    setFavoriteColor("yellow")
  },[])
  

  return (
    <div>
        <h2>My favorite color is <i>{favoriteColor}</i></h2>
        <button onClick={()=>setFavoriteColor("blue")} >change to blue </button>

    </div>
  )
}
