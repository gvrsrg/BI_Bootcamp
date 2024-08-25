import { createContext, ReactElement, useReducer } from "react"

type InitialStateType = {
  count: number;
  text: string;
}

const initialState: InitialStateType = {
  count: 0,
  text: "hello"
}


enum ActionsEnum {
  INCREMENT,
  DECREMENT
}

type ReducerAction = {
  type: ActionsEnum;
  payload?: number;

}


const reducer = (state: InitialStateType, action: ReducerAction): InitialStateType => {
  switch (action.type) {
    case ActionsEnum.INCREMENT:
      if (!action.payload) return state
      return { ...state, count: state.count + action.payload }
    case ActionsEnum.DECREMENT:
      if (!action.payload) return state
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}

interface AuthContentType {
  token: string;
  name: string;
}

const AuthContent = createContext<AuthContentType | null>(null)


export default function Counter():ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState)
  const increment = () => dispatch({type:ActionsEnum.INCREMENT, payload: 5})
  const decrement = () => dispatch({type:ActionsEnum.DECREMENT, payload: 5})
        
  return (
    <div>

      <button onClick={increment}> + </button>
      <span>{state.count}</span>
      <button onClick={decrement}> - </button>

    </div>
  )
}
