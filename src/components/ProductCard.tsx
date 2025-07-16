"use client";

import { useCart } from "@/store/useCart";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  const addToCart = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    alert("Item added to cart successfully!");
  };

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-blue-700 font-bold">${product.price}</p>
      </Link>
      <button
        className="mt-auto bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
