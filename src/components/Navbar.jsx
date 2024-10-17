import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white py-4" style={{
      backgroundImage: 'url("/src/assets/hero-image1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
      <div className="relative mx-auto px-12 md:px-28 lg:px-[7rem] flex justify-between items-center">
        <Link to="/" className="font-bold text-lg z-10">Chocolate Bliss</Link>
        <button
          className="block md:hidden z-10"
          onClick={toggleMenu}
        >
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
          <Link to="/" className="mx-4">Home</Link>
          <Link to="/about" className="mx-4">About</Link>
          <Link to="/products" className="mx-4">Products</Link>
          <Link to="/contact" className="mx-4">Contact</Link>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 text-white flex flex-col items-center z-20 md:hidden">
            <Link to="/" className="py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="py-2" onClick={toggleMenu}>About</Link>
            <Link to="/products" className="py-2" onClick={toggleMenu}>Products</Link>
            <Link to="/contact" className="py-2" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
