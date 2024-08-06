import { useContext } from 'react'
import { AppContext } from '../App'
import DeleteButton from './DeleteButton'

export default function TaskList() {
  const {state} = useContext(AppContext)

  return (
    <div>
        {state.tasks.map((item, i) => {
          return (
          <div key={i}>
            {item.name}
            <DeleteButton id={item.id} />
          </div>)
        })}

    </div>
  )
}
