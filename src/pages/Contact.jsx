import React from 'react';

const Contact = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center relative w-full"
      style={{
        backgroundImage: 'url("/src/assets/hero-image1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      <div className="relative z-10 w-full max-w-md p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h2>

        <form className="w-full">
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input 
              className="w-full py-2 px-3 text-gray-700 rounded-lg border border-violet-500 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              id="name" 
              type="text" 
              placeholder="Your name" 
              style={{boxShadow: '1px 1px 4px rgba(138, 43, 226, 0.3)'}}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input 
              className="w-full py-2 px-3 text-gray-700 rounded-lg border border-violet-500 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              id="email" 
              type="email" 
              placeholder="Your email" 
              style={{boxShadow: '1px 1px 4px rgba(138, 43, 226, 0.3)'}}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea 
              className="w-full py-2 px-3 text-gray-700 rounded-lg border border-violet-500 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              id="message" 
              placeholder="Your message"
              rows="4"
              style={{boxShadow: '1px 1px 4px rgba(138, 43, 226, 0.3)'}}
            ></textarea>
          </div>
          <button 
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-3 rounded-lg transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            type="submit"
            style={{boxShadow: '2px 2px 6px rgba(138, 43, 226, 0.5)'}}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
