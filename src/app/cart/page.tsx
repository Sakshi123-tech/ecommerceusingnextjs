'use client';

import { useCart } from '@/store/useCart';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';

export default function CartPage() {
  const { items, removeItem, updateQty } = useCart();
  const [search, setSearch] = useState('');

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleDecrease = (id: number, qty: number) => {
    if (qty === 1) {
      removeItem(id);
    } else {
      updateQty(id, qty - 1);
    }
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      {/* Header */}
<header className="bg-[#1835a7] py-4 px-6 flex items-center justify-between shadow-md">
  <Link href="/" className="text-white text-xl font-bold">
    Logo
  </Link>
  <form className="flex items-center w-full max-w-md ml-auto">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Enter the name of added product in cart..."
      className="w-full rounded-full bg-white text-black px-4 py-2 pl-10 placeholder-gray-500 focus:outline-none"
    />
    
  </form>
</header>


      {/* Cart Content */}
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🛒 Your Shopping Cart
        </h1>

        {/* Case 1: Cart is empty */}
        {items.length === 0 ? (
          <p className="text-center text-lg text-gray-500 mt-8">
            Your cart is empty.{' '}
            <Link href="/" className="text-blue-700 underline font-medium">
              Go shopping
            </Link>
          </p>
        ) : filteredItems.length === 0 ? (
          // Case 2: No search matches
          <p className="text-center text-lg text-red-600 mt-8">
            ❌ No matching product found.
          </p>
        ) : (
          // Case 3: Show matched items
          <>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white shadow-lg rounded-lg p-4 mb-4 gap-4"

              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-lg object-contain"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} x {item.qty} ={' '}
                      <span className="font-bold text-gray-800">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrease(item.id, item.qty)}
                    className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-2 font-medium">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-8">
              <h3 className="text-xl font-bold">
                Total:{' '}
                <span className="text-green-600">${totalPrice.toFixed(2)}</span>
              </h3>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
