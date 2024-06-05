const EventCard = ({ image, title, time, date, location }) => {
  return (
    <div className="max-w-md bg-orange-100 overflow-hidden md:hover:scale-110 transition duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer">
     
      <div className="relative">
        <img
          className="px-3 pt-5 h-56 w-full object-cover"
          src={image}
          alt={title}
        />
        <button className="absolute top-0 right-0 m-7 px-3 py-1 rounded-full bg-shfOrange text-white text-sm md:hover:bg-shfPurple">Book Now</button>
      </div>

      <div className="p-2">
        <h3 className="text-lg leading-tight font-medium text-black text-center">
          {title}
        </h3>
        <p className="mt-2 text-gray-700 text-center">
          {time} || {date}
        </p>
        <p className="mt-2 text-md text-gray-700 text-center">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
