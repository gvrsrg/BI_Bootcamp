import { useContext } from 'react'
import { AppContext } from '../App'

export default function Button() {
  const {setCount} = useContext(AppContext)
  return (
    <>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </>
  )
}
