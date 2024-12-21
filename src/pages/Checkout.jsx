import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    paymentMethod: "credit-card",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Shipping Information */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Informasi Pengiriman</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-2"
              >
                Nama depan
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-2"
              >
                Nama belakang
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-2"
              >
                Alamat
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2">
                Kota
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium mb-2"
              >
                Kode Pos
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Metode Pembayaran</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="credit-card"
                checked={formData.paymentMethod === "credit-card"}
                onChange={handleInputChange}
              />
              <span>Credit Card</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === "cod"}
                onChange={handleInputChange}
              />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="e-wallet"
                checked={formData.paymentMethod === "e-wallet"}
                onChange={handleInputChange}
              />
              <span>E-Wallet</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
