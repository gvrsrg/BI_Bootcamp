import { useState, useReducer } from 'react';

const initialState = {
  count: 5555
}

const INCREMENT = "plus"
const DECREMENT = "minus"

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload }
    case DECREMENT:
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}
function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <>
      <div>
        <h2>useState</h2> 

        <button onClick={() => setCount((count) => count - 1)}> - </button>
        {"  "+count+"  "}
        <button onClick={() => setCount((count) => count + 1)}> + </button>

      </div>

      <div>
        <h2>useReducer</h2> 
          <button onClick={() => dispatch({type:DECREMENT, payload:1})}> - </button>
          <button onClick={() => dispatch({type:DECREMENT, payload:10})}> -10 </button>
           {"  "+state.count+"  "}
          <button onClick={() => dispatch({type:INCREMENT, payload:1})}> + 1</button>
          <button onClick={() => dispatch({type:INCREMENT, payload:10})}> +10 </button>
      </div>


    </>
  );
}

export default App;
