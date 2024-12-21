import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

// Mengaktifkan flag masa depan
const enableFutureFlags = () => {
  const originalStartTransition = React.startTransition;
  
  // Mengganti fungsi startTransition untuk mengaktifkan flag
  React.startTransition = (callback) => {
    originalStartTransition(callback);
  };

  // Mengaktifkan flag untuk resolusi rute relatif dalam rute Splat
  // (Ini adalah contoh, pastikan untuk menyesuaikan dengan implementasi Anda)
  // Anda mungkin perlu menyesuaikan ini sesuai dengan kebutuhan spesifik aplikasi Anda.
};

function App() {
  enableFutureFlags(); // Panggil fungsi untuk mengaktifkan flag

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;