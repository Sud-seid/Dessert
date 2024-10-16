import React from 'react';

const Hero = () => {
  return (
    <div className="h-screenflex items-center justify-center relative w-full h-[37rem]" style={{ backgroundImage: 'url("/src/assets/hero-image.jpg")', backgroundSize:'cover', backgroundPosition:'center' }}>
      <div className='absolute inset-0 bg-black bg-opacity-80'></div>
      <div className="text-center text-white relative z-10 p-[9.6rem]">
        <h1 className="text-6xl font-bold text-center">Indulge in Pure Chocolate Bliss</h1>
        <p className="text-lg mt-4">Discover the world of rich, decadent chocolates.</p>
        <button className="mt-6 px-6 py-3 border-radius-[#4f362a] rounded-lg text-white hover:bg-yellow-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
