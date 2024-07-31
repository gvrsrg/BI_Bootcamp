import './App.css';
import Car from './components/Car';
import Garage from './components/Garage';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <div className="App">

      <Car carInfo={carinfo}/>

      <Garage size="small" />

      <Events />

      <Phone />

      <Color />

    </div>
  );
}

export default App;
