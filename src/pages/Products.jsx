import React from 'react';

const Products = () => {
  const products = [
    { name: 'Dark Chocolate', price: '$10', img: '/assets/dessert1.jpg' }, 
    { name: 'Milk Chocolate', price: '$12', img: '/assets/dessert2.jpg' }, 
    { name: 'Dark Chocolate', price: '$10', img: '/assets/dessert3.jpg' }, 
    { name: 'Milk Chocolate', price: '$12', img: '/assets/dessert4.jpg' }, 
    { name: 'Dark Chocolate', price: '$10', img: '/assets/dessert5.jpg' }, 
    { name: 'Milk Chocolate', price: '$12', img: '/assets/dessert6.jpg' }, 
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative w-full"
      style={{
        backgroundImage: 'url("/assets/hero-image1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="relative z-10 w-full max-w-screen-lg p-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden hover:bg-opacity-20 transition duration-300">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-auto max-h-48 object-cover" 
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.price}</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-500 transition duration-300 flex items-center justify-center w-full">
                  Shop Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-500 transition duration-300 flex items-center justify-center">
            See More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
