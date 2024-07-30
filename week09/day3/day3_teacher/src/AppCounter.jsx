// import VotingApp from "./components/VotingApp";
import { useState } from "react";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;

/**
 * 1. Create a Counter component:
 *    - This component should have a state variable named 'count' initialized to 0.
 *    - Display the value of 'count' in the Counter component.
 *
 * 2. Create a Button component:
 *    - This component should increase the 'count' by one each time it is clicked.
 *
 * 3. Use the Counter in App, Button components in Counter.
 */
