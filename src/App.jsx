import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aboutus from './components/aboutus/Aboutus';
import Homepage from './components/homepage/Homepage';
import Gallery from './components/gallery/Gallery';
import Events from './components/events/Events';
import Login from './components/admin/Login';
import Contact from './components/contact/Contact';
import Work from './components/work-with-us/Work';
import Work2 from './components/work-with-us-2/Work2';
import Donate from './components/donate/Donate';
import Paymentpage from './components/donate/Paymentpage';
import Logout1 from './components/admin/Logout1';
import Forget from './components/admin/ForgetRequest'
import Cardpayment from './components/payment/Cardpayment';
import Paypal from './components/payment/Paypal';
import Echeque from './components/payment/Echeque';
import Success from './components/payment/Success';


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
      path: '/workwithus2',
      element: <Work2 />,
    },
    {
      path: '/donate',
      element: <Donate />,
    },
    {
      path: '/paymentpage',
      element: <Paymentpage/>,
    },
    {
      path: '/cardpayment',
      element: <Cardpayment/>,
    },
    {
      path: '/paypal',
      element: <Paypal/>,
    },
    {
      path: '/echeque',
      element: <Echeque/>,
    },
    {
      path: '/success',
      element: <Success/>,
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/forget',
      element: <Forget/>,
    },
    {
      path: '/logout',
      element: <Logout1/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
