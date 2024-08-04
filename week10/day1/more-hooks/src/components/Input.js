import { useContext } from 'react'
import { AppContext } from '../App'

export default function Input() {
  const {setTitle} = useContext(AppContext)
  return (
    <div>
        <input onChange={(e) => setTitle(e.target.value)}></input>
    </div>
  )
}
