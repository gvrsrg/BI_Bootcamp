import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Nav from "./components/Nav";
import "./App.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
/**Routering */

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <footer>copyright 2024</footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
