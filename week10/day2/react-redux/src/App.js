import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Redux</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      {count}
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
