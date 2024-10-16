import React from 'react';

const Products = () => {
  const products = [
    { name: 'Dark Chocolate', price: '$10', img: '/src/assets/chocolate1.jpg' },
    { name: 'Milk Chocolate', price: '$12', img: '/src/assets/chocolate2.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
