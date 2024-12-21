import { useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

const product = {
  id: 1,
  name: "Premium Headphones",
  price: 299.99,
  description:
    "High-quality wireless headphones with noise cancellation feature.",
  rating: 4.5,
  reviews: [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      comment: "Excellent sound quality and comfortable to wear.",
      date: "2023-08-15",
    },
    // Add more reviews...
  ],
  images: [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ],
  specs: [
    { name: "Brand", value: "AudioTech" },
    { name: "Connectivity", value: "Wireless" },
    { name: "Battery Life", value: "20 hours" },
    { name: "Weight", value: "250g" },
  ],
};

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden Rp{
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 Rp{
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-400">({product.rating} rating)</span>
          </div>

          <p className="text-2xl font-bold text-blue-500">Rp{product.price}</p>

          <p className="text-gray-300">{product.description}</p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Specifications</h3>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.name}>
                  <dt className="text-gray-400">{spec.name}</dt>
                  <dd className="mt-1 text-sm">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-sm font-medium">
                Quantity
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="rounded-md border-gray-700 bg-gray-800 text-sm"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
        <div className="space-y-8">
          {product.reviews.map((review) => (
            <div key={review.id} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold">{review.user}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 Rp{
                          i < review.rating ? 'text-yellow-400' : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
