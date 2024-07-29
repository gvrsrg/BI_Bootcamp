import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello.js';
import users from './users.json'
import UserList from './components/UserList.js';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList users={users}/>
      </header>
    </div>
  );
}

export default App;
