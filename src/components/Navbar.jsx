import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-lg">Chocolate Bliss</Link>
        <div>
          <Link to="/" className="mx-4">Home</Link>
          <Link to="/about" className="mx-4">About</Link>
          <Link to="/products" className="mx-4">Products</Link>
          <Link to="/contact" className="mx-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
