import './App.css';
import React from 'react'
import VotingApp from './components/VotingApp';
import Counter from './components/Counter';
import Parent from './components/Parent';
import Child from './components/Child';
import ErrorBoundary from './ErrorBoundary';

function App() {
  //const [count, setCount] = React.useState(0)
  return (
    <div className="App">
      <VotingApp/>
      <br/>
      <ErrorBoundary  fallback={<p>Counter 1 is down</p>}>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Counter 1 is down</p>}>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Counter 1 is down</p>}>
        <Counter/>
      </ErrorBoundary>
      <br/>
      <Parent auth="sergey">
        <Child />
      </Parent>

    </div>
  );
}

export default App;
