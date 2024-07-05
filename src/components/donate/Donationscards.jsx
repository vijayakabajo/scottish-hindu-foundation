import React from 'react';

const Donationscards = ({src, title, description}) => {
  return (
    <>
    <div className="max-w-md overflow-hidden lg:hover:scale-110 transition duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="image">
        <img className="w-full h-52 object-cover" src={src} alt={title} />
      </div>
      <div className="px-4 py-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-4 py-4">
        <button className="bg-shfOrange hover:bg-shfPurple text-white font-base py-1 px-3 rounded-full">
          Donate Now
        </button>
      </div>
    </div>     
    </>
  )
}

export default Donationscards
