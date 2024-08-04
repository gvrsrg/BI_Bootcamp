import { useContext } from 'react'
import { AppContext } from '../App'

export default function Title() {
  const {title} = useContext(AppContext)


  return (
    <div>Title - {title}</div>
  )
}
