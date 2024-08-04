import './App.css';

import React, { Component } from 'react'
import ErrorBoundary from "./ErrorBoundary";
import { Child, Color } from './components/Color';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState(({ counter }) => {
      if (counter + 1 === 5) {
        throw new Error("AAAAAAAAaaaaaaaaaaaa!!!!!!!!!111111");
      }
      return { counter: counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
      </div>
    );
  }
}





function App() {
  return (
    <div className="App">
        <h2>Click on the numbers to increase the counters.</h2>
        <h2>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h2>
        <hr/>
        <p>
        These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.
        </p>

        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr/>
        <p>
        These two counters are each inside of their own error boundary. So if one crashes, the other is not affected..
        </p>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <hr/>
        <p>
        This counter is not inside of boundary. So if crashes, all other components are deleted.
        </p>
        <BuggyCounter />

        <Color />
        <Child />

    </div>
  );
}

export default App;
