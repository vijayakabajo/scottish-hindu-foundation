
import { Link } from 'react-router-dom';

const Footercontent = () => {
  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8 text-sm font-thin">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="">
          <h2 className="text-white text-lg font-normal">Quick Links</h2>
          <ul className="text-gray-400 nav-links font-thin text-sm pt-1 space-y-2">
            <li className="md:hover:scale-110 transition duration-100">
              <Link to="/">Home</Link>
            </li>
            <li className="md:hover:scale-110 transition duration-100">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="md:hover:scale-110 transition duration-100">
              <Link to="/events">Events</Link>
            </li>
            <li className="md:hover:scale-110 transition duration-100">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="md:hover:scale-110 transition duration-100">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="md:hover:scale-110 transition duration-100">
              <Link to="/workwithus">Work With Us</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-white text-lg font-normal">Get In Touch</h2>
          <ul className="text-gray-400 nav-links font-thin text-sm pt-1 space-y-2">
            <li className="md:hover:scale-110 transition duration-100">
              <Link to="/">Contact Us</Link>
            </li>
            <li className="md:hover:scale-110 transition duration-100">
              <Link to="/">Our Services</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-white text-lg font-normal">Address</h2>
          <p className="text-gray-400 font-thin text-sm pt-1">
            2464 Royal Ln, Mesa,<br />Scotland 4567842
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footercontent;
