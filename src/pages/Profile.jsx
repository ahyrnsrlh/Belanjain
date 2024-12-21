import { useState } from "react";

const initialProfile = {
  name: "ahyar",
  email: "ahyar@gmail.com",
  address: "Kampung Baru",
  city: "Bandar Lampung",
  country: "Indonesia",
  postalCode: "35435",
};

const orderHistory = [
  {
    id: 1,
    date: "2025-08-15",
    total: 499.98,
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "Premium Headphones",
        price: 299.99,
        quantity: 1,
      },
      {
        id: 2,
        name: "Smartwatch Pro",
        price: 199.99,
        quantity: 1,
      },
    ],
  },
];

const wishlist = [
  {
    id: 1,
    name: "Wireless Speaker",
    price: 149.99,
    image: "https://placehold.co/300x300",
  },
];

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle profile update logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Profile Saya</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Informasi Profile</h2>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-blue-500 hover:text-blue-400"
                >
                  Edit
                </button>
              )}
            </div>

            <form onSubmit={handleProfileUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700 rounded-md"
                    />
                  ) : (
                    <p>{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <p>{profile.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Alamat
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={profile.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700 rounded-md"
                    />
                  ) : (
                    <p>{profile.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Kota</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="city"
                      value={profile.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700 rounded-md"
                    />
                  ) : (
                    <p>{profile.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Negara
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="country"
                      value={profile.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700 rounded-md"
                    />
                  ) : (
                    <p>{profile.country}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Kode Pos
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="postalCode"
                      value={profile.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700 rounded-md"
                    />
                  ) : (
                    <p>{profile.postalCode}</p>
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Simpan Perubahan
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Batal
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Order History */}
          <div className="mt-8 bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Riwayat Pesanan</h2>
            <div className="space-y-6">
              {orderHistory.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-700 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-semibold">Order #{order.id}</p>
                      <p className="text-sm text-gray-400">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        Rp{order.total.toFixed(2)}
                      </p>
                      <p className="text-sm text-green-500">{order.status}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span>
                          {item.name} x{item.quantity}
                        </span>
                        <span>Rp{item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wishlist */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Favorit</h2>
            <div className="space-y-4">
              {wishlist.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-blue-500">Rp{item.price}</p>
                    <button className="mt-2 text-sm text-blue-500 hover:text-blue-400">
                      Masukkan Keranjang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
