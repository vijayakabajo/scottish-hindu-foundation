import { Link } from "react-router-dom";
import React from 'react';

const Donatecard = () => {
  return (
    <div className="relative h-svh w-full">
      <img
        className="w-full h-full object-cover saturate-100 blur-sm mix-blend-difference brightness-50"
        src="/Images/donate-bg.jpg"
        alt="Image"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-center">
        <div>
          <p className="text-bold font-montserrat">Join Us In The Journey!!</p>
          <h1 className="text-5xl font-bold mt-4 font-playfair">
            A Tale Of Scottish Hindus
            <br />
            In Scotland
          </h1>
          <p className="text-sm font-thin mt-4 font-inter">
            Welcome To The Official Website Of The Scottish Hindu Foundation{" "}
            <br />
            We Are Thrilled To Have You Here.
          </p>

          <div className="flex mt-8 justify-center">
            <Link to="/donate">
              <button className="bg-shfOrange font-light font-inter hover:bg-shfPurple transition duration-300 text-white py-2 px-10 mr-4 rounded-full">
                Donate
              </button>
            </Link>
            
            <button className="bg-transparent hover:bg-red-600 font-inter transition duration-300 text-white py-2 px-4 border-2 border-white rounded-full">
              Report an Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donatecard;
