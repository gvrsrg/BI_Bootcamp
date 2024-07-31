import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Nav from "./components/Nav";
import "./App.css";

import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home title={"Dashboard"} />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/shop'
          element={
            <>
              <Shop />
            </>
          }
        />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
