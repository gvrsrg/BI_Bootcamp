import './App.css';
import { useState, useReducer, useRef, createContext } from 'react'
import { v4 as uuid4 } from 'uuid'
import TaskList from './components/TaskList';


export const AppContext = createContext()
export const initialState = {tasks:[]}

export const ADD_TASK = 'add_task'
export const REMOVE_TASK = 'remove_task'


export const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, {id: uuid4(), name: action.payload, active:true}] }
    case REMOVE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
    default:
      return state
  }
}





function App() {
  const [state, dispatch] = useReducer(taskReducer,initialState)
  const inputRef = useRef()

const addTask = () => {
  dispatch({type: ADD_TASK, payload: inputRef.current.value})
  inputRef.current.value = ''
  inputRef.current.focus()
} 

const removeTask = (id) => {
  dispatch({type: REMOVE_TASK, payload: id})
} 

return (
  <AppContext.Provider value={{ dispatch, state }}>
    <div className="App">
      <h1>Enhanced Task Manager</h1>
      <input placeholder="Add task..." ref={inputRef} />
      <button onClick={() => addTask()}> Add </button>
      <div>
        <h2>Tasks</h2>
        <TaskList />
      </div>

    </div>
  </AppContext.Provider>
  );
}

export default App;
