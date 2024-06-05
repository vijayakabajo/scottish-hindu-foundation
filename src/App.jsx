
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus";
import Homepage from "./components/homepage/Homepage";
import Gallery from "./components/gallery/Gallery";
import Events from "./components/events/Events";
import Donate from "./components/donate/Donate";

function App() {
  const router=new createBrowserRouter([
    {
      path: "/",
      element: <><Homepage/></>
    },
    {
      path: "/about",
      element: <><Aboutus/></>
    },
    {
      path: "/gallery",
      element: <><Gallery/></>
    },
    {
      path: "/events",
      element: <><Events/></>
    },
    {
      path: "/donate",
      element: <><Donate/></>
    },
  ]);

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
