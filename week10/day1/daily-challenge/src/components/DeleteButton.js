import { useContext } from 'react'
import { AppContext } from '../App'
import { REMOVE_TASK } from '../App'


export default function DeleteButton({id}) {
  const { dispatch } = useContext(AppContext)

  const removeTask = (id) => {
    dispatch({type: REMOVE_TASK, payload: id})
  }
  return (
    <button onClick={() => removeTask(id)}> Remove </button>
  )
}
