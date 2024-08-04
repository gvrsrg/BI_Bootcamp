import { useState, createContext } from 'react';
import Display from './components/Display';
import Action from './components/Action';

export const AppContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("")

  return (
    <div className="App">
      <AppContext.Provider value={{count, setCount,title, setTitle}}>
        <Display />
        <Action />
      </AppContext.Provider>
    </div>
  );
}

export default App;
