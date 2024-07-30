import { useState } from "react";
import Parent from "./components/Parent";
import Child from "./components/Child";
import Counter from "./components/Counter";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<p>Counter 1 is down</p>}>
        <Counter />
      </ErrorBoundary>

      <ErrorBoundary fallback={<p>Counter 2 is down</p>}>
        <Counter />
      </ErrorBoundary>

      <Parent auth='admin'>
        <Child />
      </Parent>
    </>
  );
}

export default App;
