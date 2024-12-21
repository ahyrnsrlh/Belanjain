import { Link } from "react-router-dom";

export default function OrderSummary({ subtotal, shipping, total }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rp{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Pengiriman</span>
          <span>Rp{shipping.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>Rp{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Link
        to="/checkout"
        className="mt-6 block w-full bg-blue-600 text-white text-center py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
