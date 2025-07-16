"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import products from "@/data/products.json";
import { useCart } from "@/store/useCart";
import Image from "next/image";



export default function ProductDetailClient() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  const addToCart = useCart((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-500">Product not found.</div>
    );
  }

  const handleAddToCart = () => {
  addToCart({ ...product, qty: quantity });

    alert("Item added to cart successfully!");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10 bg-blue-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="relative w-full h-[400px] bg-white rounded">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl font-semibold mb-2">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <p className="text-sm text-gray-600 mb-6">
            Category: <span className="capitalize">{product.category}</span>
          </p>

                    <div className="flex items-center space-x-4">
            <div className="flex border rounded overflow-hidden">
              <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                }
              >
                -
              </button>
              <div className="w-10 flex items-center justify-center bg-white">
                {quantity}
              </div>
              <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            <button
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-2">Reviews</h2>
            <p className="text-gray-500">No reviews yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

