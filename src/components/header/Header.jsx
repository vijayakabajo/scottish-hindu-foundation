import React from 'react';
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Linksbar from './Linksbar';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <Linksbar/>
    <div className="Header sticky top-0 px-0 z-50 bg-white shadow-md">
      <div className="navpluslinks">
        <nav className="">
          <div className="flex justify-between items-center w-full px-4 md:px-10">
            <div className="">
              <NavLink to="/" className="flex gap-1 items-center justify-center">
                <div className="w-32 h-12 md:w-40 md:h-16">
                  <Logo />
                </div>
              </NavLink>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-4 text-md font-base text-shfPurple">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-shfPurple" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-shfPurple" : ""
                }
              >
                About us
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-shfPurple" : ""
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-shfPurple" : ""
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-shfPurple" : ""
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/workwithus"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-shfPurple" : ""
                }
              >
                Work With Us
              </NavLink>
            </div>

            {/* secondary */}
            <div className="flex">
              <div className="hidden md:flex items-center text-sm">
                <div>
                  <NavLink to="/donate">
                    <button className="bg-shfOrange hover:bg-shfPurple transition duration-300 text-white px-6 py-2 font-semibold rounded-full">
                      Donate Now
                    </button>
                  </NavLink>
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
            className={`fixed z-40 w-full bg-shfPurple overflow-hidden flex flex-col items-center justify-center lg:hidden gap-12 origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-auto"
            }`}
          >
            <div className="px-8 py-8 flex items-center text-xl">
              <div className="flex flex-col gap-8 font-semi bold tracking-wider text-white text-center">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "bg-transparent py-1 px-2 border-2 border-white rounded-full" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "bg-transparent py-1 px-2 border-2 border-white rounded-full" : ""
                  }
                >
                  About us
                </NavLink>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    isActive ? "bg-transparent py-1 px-2 border-2 border-white rounded-full" : ""
                  }
                >
                  Events
                </NavLink>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? "bg-transparent py-1 px-2 border-2 border-white rounded-full" : ""
                  }
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    isActive ? "bg-transparent py-1 px-2 border-2 border-white rounded-full" : ""
                  }
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/workwithus"
                  className={({ isActive }) =>
                    isActive ? "bg-transparent py-1 px-2 border-2 border-white rounded-full" : ""
                  }
                >
                  Work With Us
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
}

export default Header;
