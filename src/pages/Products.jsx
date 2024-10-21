import React, { useState } from 'react';

const Products = () => {
  const initialProducts = [
    { name: 'Dark Chocolate', price: '100 ETB', img: '/assets/dessert1.jpg' },
    { name: 'Milk Chocolate', price: '129 ETB', img: '/assets/dessert2.jpg' },
    { name: 'Dark Chocolate', price: '110 ETB', img: '/assets/dessert3.jpg' },
    { name: 'Milk Chocolate', price: '112 ETB', img: '/assets/dessert4.jpg' },
    { name: 'Dark Chocolate', price: '110 ETB', img: '/assets/dessert5.jpg' },
    { name: 'Milk Chocolate', price: '112 ETB', img: '/assets/dessert6.jpg' },
  ];

  const [products, setProducts] = useState(initialProducts); 
  const [showModal, setShowModal] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const handleSeeMore = () => {
    setProducts((prevProducts) => [...prevProducts, ...initialProducts]);
  };

  const handleShopNow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden hover:bg-opacity-20 transition duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto max-h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.price}</p>
                <button
                  className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-500 transition duration-300 flex items-center justify-center w-full"
                  onClick={() => handleShopNow(product)}
                >
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
          <button
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-500 transition duration-300 flex items-center justify-center"
            onClick={handleSeeMore}
          >
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
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-bold text-center mb-4">{selectedProduct.name}</h3>
            <div className="mb-4">
              <p className="text-center text-lg font-semibold">{selectedProduct.price}</p>
              <div className="flex justify-center my-2">
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
            </div>
            <div className="mb-4">
              <label className="block mb-2">Bank Account Information:</label>
              <input
                type="text"
                placeholder="Enter bank account"
                className="border p-2 w-full rounded"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Close
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500">
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
