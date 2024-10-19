import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="h-screen flex justify-center items-center relative w-full"
      style={{
        backgroundImage: 'url("/assets/hero-image1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>
      <div className="text-center text-white relative z-10 p-6 md:p-24 lg:p-[9.6rem]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Indulge in Pure{' '}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-3xl md:text-4xl lg:text-5xl font-bold z-10 ${isActive ? 'text-blue-violet' : ''}`
            }
            style={{
              color: '#8A2BE2',
              fontFamily: 'Pacifico, cursive',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Shifa Delights
          </NavLink>
        </h1>
        <p className="text-base md:text-lg mt-4">
          Explore our world of irresistible desserts, handcrafted to perfection with the finest ingredients. 
          Whether you're craving a classic treat or something unique, Shifa Delights offers a wide range of indulgent desserts 
          that will satisfy your sweet tooth and elevate your dessert experience.
        </p>

        <button className="mt-6 px-4 py-2 md:px-6 md:py-3 rounded-lg bg-blue-violet text-white hover:bg-indigo-900">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
