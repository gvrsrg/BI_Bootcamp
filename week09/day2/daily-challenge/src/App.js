import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import VotingApp from './components/VotingApp';

function App() {
  const [language, setLanguage] = useState([
    { name: 'PHP', votes:0 },
    { name: 'Python', votes:0 },
    { name: 'JavaScript', votes:0 },
    { name: 'Java', votes:0 }
  ])
  return (
    <div className="App">
      <VotingApp setLanguage={setLanguage} language={language}/>

    </div>
  );
}

export default App;
