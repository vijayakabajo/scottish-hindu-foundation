/* eslint-disable react/prop-types */
import React from 'react';

const EventCard = ({ image, title, time, date, location, status, onClick }) => {
  return (
    <div
      className="font-inter relative max-w-md bg-orange-100 overflow-hidden lg:hover:scale-110 transition duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
      onClick={onClick}
    >
      <div className="">
        <img
          className="px-3 pt-5 h-56 w-full object-cover relative"
          src={image}
          alt={title}
        />
        <span className="absolute top-6 right-3 bg-gray-200 text-black text-xs font-bold px-2 py-1 m-2 rounded">
          {status}
        </span>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <h3 className="text-lg leading-tight font-semibold text-black text-center">
          {title}
        </h3>
        <p className="mt-2 text-gray-700 text-center text-sm">
          {date} | {time}
        </p>
        <p className="text-md text-gray-700 text-center text-sm">{location}</p>
        <button className="w-28 px-5 py-2 mt-4 mb-3 text-sm text-nowrap rounded-full bg-shfOrange text-white md:hover:bg-shfPurple">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
