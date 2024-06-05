import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import Linksbar from "./Linksbar";
import { Link } from "react-router-dom";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="Header sticky top-0 px-0 z-50 bg-white shadow-md">
      <div className="navpluslinks">
        <Linksbar />
        <nav className="">
          <div className="flex justify-between items-center w-full px-4 md:px-10 ">
            <div className="">
              <Link to="/" className="flex gap-1 items-center justify-center">
                <div className="w-32 h-12 md:w-40 md:h-16">
                  <Logo />
                </div>
              </Link>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-4 text-md font-base text-shfPurple">
              <Link to="/" className="">
                Home
              </Link>
              <Link to="/about">About us</Link>
              <Link to="/events">Events</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="#">Contact Us</Link>
              <Link to="#">Work With Us</Link>
            </div>

            {/* secondary */}
            <div className="flex">
              <div className="hidden md:flex items-center text-sm">
                <div>
                  <Link to="/donate">
                    
                    <button className="bg-shfOrange hover:bg-shfPurple transition duration-300 text-white px-6 py-2 font-semibold rounded-full">
                      Donate Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center ml-8">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-8" />
                </button>
              </div>
            </div>
          </div>

          {/* mobile navigation */}
          <div
            className={`fixed z-40 w-full bg-shfPurple overflow-hidden flex flex-col items-center justify-center lg
          :hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-auto"
          }`}
          >
            <div className="px-8 py-8 flex items-center text-xl">
              <div className="flex flex-col gap-8 font-semi bold tracking-wider text-white text-center">
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/events">Events</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="#">Contact Us</Link>
                <Link to="#">Work With Us</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
