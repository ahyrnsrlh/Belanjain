import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
            <p className="text-sm">
              Destinasi belanja online terpercaya Anda untuk produk berkualitas
              dan layanan yang luar biasa.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/catalog" className="text-sm hover:text-white">
                  Katalog
                </a>
              </li>
              <li>
                <a href="/cart" className="text-sm hover:text-white">
                  Keranjang
                </a>
              </li>
              <li>
                <a href="/profile" className="text-sm hover:text-white">
                  Akun Saya
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Pelanggan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Kebijakan Pengiriman
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Pengembalian & Penukaran
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">© 2025 Belanjain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
