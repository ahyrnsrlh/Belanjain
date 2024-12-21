import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";

const initialCartItems = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 250000,
    image: "https://placehold.co/300x300",
    quantity: 1,
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    price: 200000,
    image: "https://placehold.co/300x300",
    quantity: 2,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10000;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Keranjang belanja kosong</p>
          <Link
            to="/catalog"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Belanja Sekarang
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="divide-y divide-gray-700">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </div>
        </div>
      )}
    </div>
  );
}
