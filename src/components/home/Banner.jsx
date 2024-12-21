import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
  {
    id: 1,
    image: "https://placehold.co/1200x400",
    title: "Summer Sale",
    description: "Up to 50% off on selected items"
  },
  {
    id: 2,
    image: "https://placehold.co/1200x400",
    title: "New Arrivals",
    description: "Check out our latest products"
  },
  {
    id: 3,
    image: "https://placehold.co/1200x400",
    title: "Special Offer",
    description: "Free shipping on orders over $50"
  }
];

export default function Banner() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
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
                <h2 className="text-4xl font-bold text-white mb-4">{banner.title}</h2>
                <p className="text-xl text-white">{banner.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}