import './App.css';
import Shop from './components/Shop';
import Product from './components/Product';

import { Route, Routes, Link } from 'react-router-dom'  //old way
//import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; //new way


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
