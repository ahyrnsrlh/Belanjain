import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../shared/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    image: "https://placehold.co/300x300",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    price: 199.99,
    image: "https://placehold.co/300x300",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 149.99,
    image: "https://placehold.co/300x300",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 79.99,
    image: "https://placehold.co/300x300",
    category: "Gaming",
  },
];

export default function FeaturedProducts() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Rekomendasi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
