import React from 'react';
import img1 from '../assets/cake1.jpg';
import img2 from '../assets/cake2.jpg';
import img3 from '../assets/cake3.jpg';
import img4 from '../assets/cake4.jpg';

const Gallery = () => {
  const images = [
    { src: img1, name: 'Cake 1' },
    { src: img2, name: 'Cake 2' },
    { src: img3, name: 'Cake 3' },
    { src: img4, name: 'Cake 4' },
  ];

  return (
    <div
      className="h-screen flex flex-col items-center justify-start relative w-full h-[32rem]"
      style={{
        backgroundImage: 'url("/src/assets/hero-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <h2 className="text-4xl font-bold text-center text-white relative z-10 mt-10">
        Our Chocolate Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10 mt-12 px-4 md:px-8">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden border-1 border-violet-500 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
              style={{
                boxShadow: '0 6px 15px rgba(138, 43, 226, 0.5)',
              }}
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-[14rem] object-cover md:w-[14rem] md:h-[14rem]"
              />
            </div>
            <p className="text-center text-white mt-2">{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
