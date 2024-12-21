import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 100000,
    image: "https://placehold.co/300x300",
    category: "Elektronik",
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    price: 150000,
    image: "https://placehold.co/300x300",
    category: "Elektronik",
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 149000,
    image: "https://placehold.co/300x300",
    category: "Elektronik",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 80000,
    image: "https://placehold.co/300x300",
    category: "Gaming",
  },
];

const banners = [
  {
    id: 1,
    image: "https://placehold.co/1200x400",
    title: "Summer Sale",
    description: "Up to 50% off on selected items",
  },
  {
    id: 2,
    image: "https://placehold.co/1200x400",
    title: "New Arrivals",
    description: "Check out our latest products",
  },
  {
    id: 3,
    image: "https://placehold.co/1200x400",
    title: "Special Offer",
    description: "Free shipping on orders over Rp50",
  },
];

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="space-y-8">
      {/* Hero Slider */}
      <div className="rounded-lg overflow-hidden">
        <Slider {...sliderSettings}>
          {banners.map((banner) => (
            <div key={banner.id} className="relative">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {banner.title}
                  </h2>
                  <p className="text-xl text-white">{banner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Rekomendasi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/Rp{product.id}`}
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
                <p className="text-blue-500 font-bold">Rp{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Kategori</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Elektronik", "Pakaian", "Otomotif", "Gaming"].map(
            (category) => (
              <Link
                key={category}
                to={`/catalog?category=Rp{category}`}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold">{category}</h3>
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  );
}
