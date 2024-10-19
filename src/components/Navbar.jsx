import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="text-white py-4 shadow-lg border-b border-white"
      style={{
        backgroundImage: 'url("/assets/hero-image1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
      <div className="relative mx-auto px-12 md:px-28 lg:px-[7rem] flex justify-between items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold text-3xl z-10 ${isActive ? 'text-blue-violet' : ''}`
          }
          style={{ color: '#8A2BE2', fontFamily: 'Pacifico, cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Shifa Delights
        </NavLink>
        <button className="block md:hidden z-10" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className="hidden md:flex space-x-4 z-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mx-4 focus:outline-none focus:text-blue-violet hover:text-blue-violet focus:border-b-2 focus:border-blue-violet ${
                isActive ? 'text-blue-violet border-b-2 border-blue-violet' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `mx-4 focus:outline-none focus:text-blue-violet hover:text-blue-violet focus:border-b-2 focus:border-blue-violet ${
                isActive ? 'text-blue-violet border-b-2 border-blue-violet' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `mx-4 focus:outline-none focus:text-blue-violet hover:text-blue-violet focus:border-b-2 focus:border-blue-violet ${
                isActive ? 'text-blue-violet border-b-2 border-blue-violet' : ''
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `mx-4 focus:outline-none focus:text-blue-violet hover:text-blue-violet focus:border-b-2 focus:border-blue-violet ${
                isActive ? 'text-blue-violet border-b-2 border-blue-violet' : ''
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 text-white flex flex-col items-center z-20 md:hidden transition-all duration-300 ease-in-out">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 focus:outline-none focus:text-blue-violet hover:text-blue-violet focus:border-b-2 focus:border-blue-violet ${
                  isActive ? 'text-blue-violet border-b-2 border-blue-violet' : ''
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 focus:outline-none focus:text-blue-violet hover:text-blue-violet focus:border-b-2 focus:border-blue-violet ${
                  isActive ? 'text-blue-violet border-b-2 border-blue-violet' : ''
                }`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `py-2 focus:outline-none focus:text-blue-violet hover:text-blue-violet focus:border-b-2 focus:border-blue-violet ${
                  isActive ? 'text-blue-violet border-b-2 border-blue-violet' : ''
                }`
              }
              onClick={toggleMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 focus:outline-none focus:text-blue-violet hover:text-blue-violet focus:border-b-2 focus:border-blue-violet ${
                  isActive ? 'text-blue-violet border-b-2 border-blue-violet' : ''
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
