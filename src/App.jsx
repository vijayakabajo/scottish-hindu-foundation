import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aboutus from './components/aboutus/Aboutus';
import Homepage from './components/homepage/Homepage';
import Gallery from './components/gallery/Gallery';
import Events from './components/events/Events';
import Donate from './components/donate/Donate';
import Login from './components/admin/Login';
import Contact from './components/contact/Contact';
import Work from './components/work-with-us/Work';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/about',
      element: <Aboutus />,
    },
    {
      path: '/gallery',
      element: <Gallery />,
    },
    {
      path: '/events',
      element: <Events />,
    },
    {
      path: '/contactus',
      element: <Contact/>,
    },
    {
      path: '/workwithus',
      element: <Work />,
    },
    {
      path: '/donate',
      element: <Donate />,
    },
    {
      path: '/login',
      element: <Login/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
