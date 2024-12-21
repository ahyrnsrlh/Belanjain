import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{product.category}</p>
        <p className="text-blue-500 font-bold">${product.price}</p>
      </div>
    </Link>
  );
}