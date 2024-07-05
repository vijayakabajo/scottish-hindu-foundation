/* eslint-disable react/prop-types */
import React from 'react';

const EventCard = ({ image, status, title, desccription, time, date, location, type }) => {
  return (
    <div className="max-w-md bg-orange-100 overflow-hidden md:hover:scale-110 transition duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer">
     
      <div className="relative">
        <img
          className="px-3 pt-5 h-56 w-full object-cover"
          src={image}
          alt={title}
        />
        <p className="absolute top-0 right-0 m-7 px-3 py-1 rounded-xl bg-white text-gray-700 text-sm">{status}</p>
      </div>


      <div className="p-2 flex flex-col justify-center">
        <h3 className="text-lg leading-tight font-medium text-black text-center">
          {title}
        </h3>
        <p className="mt-2 text-gray-700 text-center">
          {time}  |  {date}
        </p>
        <p className="mt-2 text-md text-gray-700 text-center">{location}</p>
        <button className='px-5 py-2 my-8 mx-24 rounded-full bg-shfOrange text-white text-sm md:hover:bg-shfPurple'>Book Now</button>
      </div>
    </div>
  );
};

export default EventCard;
