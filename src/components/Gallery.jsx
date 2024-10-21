import React, { useState } from 'react';

const Gallery = () => {
  const initialImages = [
    { src: '/assets/cake1.jpg', name: 'Black Forest Cake', price: '1298 ETB' },
    { src: '/assets/cake3.jpg', name: 'Vanilla Cake', price: '998 ETB' },
    { src: '/assets/cake4.jpg', name: 'Fruit Cake', price: '899 ETB' },
  ];

  const [images, setImages] = useState(initialImages); 
  const [showMore, setShowMore] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);

  const handleShowMore = () => {
    setShowMore(true);
    setImages((prevImages) => [...prevImages, ...initialImages]); 
  };
  const handleBuyNow = (cake) => {
    setSelectedCake(cake);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
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
        backgroundImage: 'url("/assets/hero-image.jpg")',
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
            className="flex flex-col items-center border-1 border-violet-500 p-4 rounded-lg cursor-pointer"
            style={{
              boxShadow: '1px 1px 9px 1px rgba(138, 43, 226, 0.5)',
            }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden w-full">
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
                  onClick={() => handleBuyNow(img)}
                >
                  Buy Now
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
      {!showMore && (
        <button
          onClick={handleShowMore}
          className="mt-10 bg-[#8A2BE2] text-white px-6 py-2 rounded hover:bg-[#6f20a1] transition"
        >
          Show More
        </button>
      )}
      {showModal && selectedCake && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-bold text-center mb-4">{selectedCake.name}</h3>
            <div className="mb-4">
              <p className="text-center text-lg font-semibold">{selectedCake.price}</p>
              <div className="flex justify-center my-2">{renderStars()}</div>
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
              <button className="bg-[#8A2BE2] text-white px-4 py-2 rounded hover:bg-[#6f20a1]">
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
