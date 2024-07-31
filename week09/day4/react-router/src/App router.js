import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Product from './components/Product';


import { Route, Routes, Link } from 'react-router-dom'
import Nav from './components/Nav';

function App() {


  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />

      </Routes>
    </div>
  );
}

export default App;
