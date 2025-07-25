import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 sm:p-6 lg:p-8 font-sans bg-white shadow-md">
      <div>
        <a href="/">
          <img
            src="https://img1.wsimg.com/isteam/ip/9db50811-200d-40ec-a93c-497f29ebe8ec/blob-d7da3d2.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95"
            className="h-12 sm:h-14 lg:h-16 w-auto"
            alt="AssureSpace Logo"
          />
        </a>
      </div>
      <nav className="relative">
        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none p-4 lg:p-0`}
        >
          <li className="mb-2 lg:mb-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-900 text-sm sm:text-base lg:text-lg relative block ${
                  isActive
                    ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-gray-900 after:scale-x-100'
                    : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </NavLink>
          </li>
          <li className="mb-2 lg:mb-0">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-900 text-sm sm:text-base lg:text-lg relative block ${
                  isActive
                    ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-gray-900 after:scale-x-100'
                    : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="mb-2 lg:mb-0">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-900 text-sm sm:text-base lg:text-lg relative block ${
                  isActive
                    ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-gray-900 after:scale-x-100'
                    : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </NavLink>
          </li>
          <li className="mb-2 lg:mb-0">
            <NavLink
              to="/owners"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-900 text-sm sm:text-base lg:text-lg relative block ${
                  isActive
                    ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-gray-900 after:scale-x-100'
                    : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              OWNERS/INVESTORS
            </NavLink>
          </li>
          <li className="mb-2 lg:mb-0">
            <NavLink
              to="/residents"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-900 text-sm sm:text-base lg:text-lg relative block ${
                  isActive
                    ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-gray-900 after:scale-x-100'
                    : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              RESIDENTS
            </NavLink>
          </li>
          <li className="mb-2 lg:mb-0">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-900 text-sm sm:text-base lg:text-lg relative block ${
                  isActive
                    ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-gray-900 after:scale-x-100'
                    : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
