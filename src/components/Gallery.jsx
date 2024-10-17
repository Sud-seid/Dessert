import React, { useState } from 'react';
import img1 from '../assets/cake1.jpg';
import img3 from '../assets/cake3.jpg';
import img4 from '../assets/cake4.jpg';

const Gallery = () => {
  const images = [
    { src: img1, name: 'Black Forest Cake', price: '1298 ETB' },
    { src: img3, name: 'Vanilla Cake', price: '998 ETB' },
    { src: img4, name: 'Fruit Cake', price: '899 ETB' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const handleBoxClick = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = () => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="yellow"
          className="w-5 h-5"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div
      className="flex flex-col items-center justify-start relative w-full min-h-screen"
      style={{
        backgroundImage: 'url("/src/assets/hero-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <h2 className="text-4xl font-bold text-center text-white relative z-10 mt-10">
        Most Popular Desserts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10 mt-12 px-4 md:px-8">
      
        {images.map((img, index) => (
        <div
        key={index}
        onClick={() => handleBoxClick(index)}
        
        className={`flex flex-col items-center border-1 border-violet-500 p-4 rounded-lg cursor-pointer ${
          currentIndex === index ? 'translate-y-4' : ''
        } transition-transform duration-150 ease-out`}
        style={{ transform: currentIndex === index ? 'translateY(20px)' : 'none'  , boxShadow: '2px 5px 2px 5px rgba(138, 43, 226, 0.5)'}}
      >
      
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-[14rem] object-cover md:w-[14rem] md:h-[14rem]"
              />
            </div>
            <div className="mt-4 w-full flex flex-col items-center">
              <div className="flex justify-between items-center w-full">
                <p className="text-center text-white mr-4">{img.name}</p>
                <button
                  className="text-white px-3 py-1 rounded hover:bg-[#8A2BE2] transition"
                  style={{ backgroundColor: '#8A2BE2' }}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex justify-between items-center mt-2 w-full">
                {renderStars()}
                <p className="text-center text-white ml-4">{img.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-center mt-6 space-x-2 relative z-10">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleBoxClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? 'transform translate-y-1'
                : ''
            } transition-transform duration-150 cursor-pointer`}
            style={{
              backgroundColor: currentIndex === index ? '#8A2BE2' : '#ccc',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
