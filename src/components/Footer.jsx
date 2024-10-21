import React from 'react';

const Footer = () => {
  return (
    <footer
      className="relative bg-[#111] text-white py-4"
      style={{
        backgroundImage: 'url("/assets/hero-image1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-99 backdrop-blur-lg"></div>
      <div className="relative container mx-auto text-center">
        <p>&copy; 2024 Shifa Delights. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
