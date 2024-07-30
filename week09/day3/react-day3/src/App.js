import './App.css';
import React from 'react'
import VotingApp from './components/VotingApp.jsx';
import Counter from './components/Counter.js';
import Parent from './components/Parent.js';
import Child from './components/Child.js';
import ErrorBoundary from './ErrorBoundary.js';

function App() {
  //const [count, setCount] = React.useState(0)
  return (
    <div className="App">
      <VotingApp/>
      <br/>
      <ErrorBoundary fallback={<p>Counter 1 is down</p>}>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Counter 2 is down</p>}>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Counter 3 is down</p>}>
        <Counter />
      </ErrorBoundary>
      <br/>
      <Parent auth="admin">
        <Child />
      </Parent>

    </div>
  );
}

export default App;
