import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Garage from './components/Garage';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <div className="App">

      <Car carInfo={carinfo}/>

      <Garage size="small" />

    </div>
  );
}

export default App;
