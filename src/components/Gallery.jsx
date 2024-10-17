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
      className="h-screen flex flex-col items-center justify-start relative w-full h-[35rem]"
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10 mt-12">
        {images.map((img, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={img.src}
              alt={img.name}
              className="w-[17rem] h-[17rem] object-cover"
            />
            <p className="text-center text-white mt-2">{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
