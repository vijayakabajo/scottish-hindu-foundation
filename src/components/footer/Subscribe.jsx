import React from 'react';

const Subscribe = () => {
  return (
    <div className="text-white flex-col w-full justify-center items-center text-center sm:text-left">
      <h2 className="text-lg font-normal text w-full">Subscribe</h2>
      <div className="mt-2 w-full flex justify-center sm:justify-normal">
        <input className="text-black font-semibold px-2" type="text" placeholder="Enter Your Email"/>
        <button className="bg-shfOrange px-2">Subscribe</button>
      </div>
      <p className="text-xs font-thin mt-1 w-full">
        Your email is safe with us, We don&apos;t spam 
      </p>
    </div>
  );
};

export default Subscribe;
