import React from 'react';
import img1 from '../assets/chocolate1.jpg';
import img2 from '../assets/chocolate2.jpg';
import img3 from '../assets/chocolate3.jpg'; // Add more images

const Gallery = () => {
  const images = [img1, img2, img3]; // Add more images

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Chocolate Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <img src={img} alt={`chocolate-${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
