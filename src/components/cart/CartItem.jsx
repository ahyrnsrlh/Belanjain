import { TrashIcon } from '@heroicons/react/24/outline';

export default function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="p-6 flex space-x-6">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-blue-500 font-bold mt-1">
          Rp{item.price}
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <select
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            className="rounded-md border-gray-700 bg-gray-700 text-sm"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-600"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}