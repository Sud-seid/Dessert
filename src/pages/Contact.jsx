import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <form className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="name" type="text" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="email" type="email" placeholder="Your email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="message" placeholder="Your message"></textarea>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
