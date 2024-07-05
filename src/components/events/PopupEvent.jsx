import React from 'react';

const PopupEvent = (event, onClose) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="relative container bg-white flex flex-col lg:flex-row justify-center items-center gap-4 px-4 py-6 mx-4 md:mx-10 lg:mx-20 my-10 lg:my-16 max-h-screen overflow-y-auto">
        {/* Close Button */}
        <button className="absolute top-2 right-2" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="image w-full lg:w-1/2 flex justify-center items-center object-cover">
          <img
            src="https://via.placeholder.com/300x400"
            alt="EventModal"
            className="object-cover max-w-full h-auto"
          />
        </div>

        <div className="text-container space-y-4 p-4">
          <h1 className="font-bold text-2xl lg:text-3xl">Event Description</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            molestiae sit aspernatur debitis, nulla architecto. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Exercitationem unde id
            ab molestias similique illum quae esse rerum totam cumque?
          </p>
          <hr className="w-full border-t-1 border-gray-700 opacity-30" />
          <div className="schedule flex flex-row space-x-4">
            <div className="flex flex-col font-bold">
              <pre>Date     :</pre>
              <pre>Time     :</pre>
              <pre>Location :</pre>
            </div>
            <div className="text-gray-700">
              <pre>{event.date}</pre>
              <pre>{event.time}</pre>
              <pre>{event.location}</pre>
            </div>
          </div>
          <button className="mt-8 px-3 py-1 rounded-full bg-shfOrange text-white text-sm md:hover:bg-shfPurple">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupEvent;
