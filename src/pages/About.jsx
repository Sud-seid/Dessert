import React from 'react';
import img2 from '/assets/cake2.jpg';

const About = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center relative w-full"
      style={{
        backgroundImage: 'url("/assets/hero-image1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:space-x-8 p-6 sm:p-4 w-full max-w-screen-lg">
        <div className="md:w-1/2 mb-8 md:mb-0 px-4 sm:px-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left mb-4 text-white">About Us</h2>
          <p className="text-base sm:text-lg text-white text-center md:text-left mb-4">
            Welcome to <span className="text-purple-600 font-semibold">Shifa Delights</span>, where every bite is a taste of bliss! We are passionate about crafting 
            exquisite desserts that not only look stunning but also tantalize your taste buds.
          </p>
          <p className="text-base sm:text-lg text-white text-center md:text-left mb-4">
            Our journey began with a simple love for sweets, and over the years, we've perfected our recipes 
            using only the finest ingredients. Each dessert is made with care, ensuring that every creation 
            is a masterpiece of flavor and artistry.
          </p>
          <p className="text-base sm:text-lg text-white text-center md:text-left mb-6">
            At <span className="text-purple-600 font-semibold">Shifa Delights</span>, we believe that desserts should be a celebration. Whether it’s a graduation, 
            a wedding, or just a sweet craving, we’re here to add a sprinkle of joy to your moments. 
            Join us on this delicious adventure and indulge in the best desserts made just for you!
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img 
            src={img2} 
            alt="Delicious desserts"
            className="w-full max-w-sm h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
