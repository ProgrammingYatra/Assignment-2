import { Fragment } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Launches from "./pages/Launches/Launches";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/launches",
        element: <Launches />,
      },
      {
        path: "/about",
        element: <About />,
      },
      
    ],
  },
]);
function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
