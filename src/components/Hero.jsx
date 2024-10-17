import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Hero = () => {
  return (
    <div
      className="h-screen flex justify-center items-center relative w-full"
      style={{
        backgroundImage: 'url("/src/assets/hero-image1.jpg")',
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
          Discover the world of rich, decadent chocolates crafted from the finest ingredients. 
          Our chocolates are not just a treat; they are an experience that transports you to a realm of indulgence. 
          Treat yourself to our exquisite range of flavors and textures that will delight your senses and leave you craving more.
        </p>

        <button className="mt-6 px-4 py-2 md:px-6 md:py-3 rounded-lg bg-blue-violet text-white hover:bg-indigo-900">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
