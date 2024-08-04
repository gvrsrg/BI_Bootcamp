import { useContext } from 'react'
import { AppContext } from '../App'

export default function ShowCounter() {
  const { count } = useContext(AppContext)
  
  return (
    <>
        <h2>ShowCounter - {count}</h2>
    </>
  )
}
