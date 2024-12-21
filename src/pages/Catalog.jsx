import React from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    image: "https://placehold.co/300x300",
    category: "Electronics",
    rating: 4.5,
  },
  // Add more products here...
];

const categories = ["Semua", "Elektronik", "Pakaian", "Otomotif", "Gaming"];
const ratings = [5, 4, 3, 2, 1];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesRating =
      selectedRating === 0 || product.rating >= selectedRating;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesRating && matchesPrice && matchesSearch;
  });

  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Filters Sidebar */}
      <div className="col-span-1 space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Cari</h3>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-3 py-2 bg-gray-700 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Kategori</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Rentang Harga</h3>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-full"
            />
            <div className="flex justify-between">
              <span>Rp{priceRange[0]}</span>
              <span>Rp{priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Rating</h3>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  checked={selectedRating === rating}
                  onChange={() => setSelectedRating(rating)}
                  className="mr-2"
                />
                <div className="flex">
                  {[...Array(rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 Rp{
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">
                    ({product.rating})
                  </span>
                </div>
                <p className="text-blue-500 font-bold">Rp{product.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Masukkan Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
