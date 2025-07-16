"use client";

import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "@/store/useCart";

type Props = {
  onSearch?: (text: string) => void;
};

export default function Header({ onSearch }: Props) {
  const items = useCart((s) => s.items);
  const uniqueItemCount = items.length; // Only count unique items

  return (
    <header className="sticky top-0 z-20 bg-blue-800 text-white px-6 py-3 shadow">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>

        {/* Search Bar */}
        <div className="relative w-full max-w-md mx-6">
          <input
            placeholder="Search for products..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full rounded-full bg-white text-black px-4 py-2 pl-10 placeholder-gray-500 focus:outline-none"
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* Cart with Icon and Label */}
        <Link href="/cart" className="relative flex items-center space-x-1">
          <ShoppingCart size={22} />
          <span className="text-sm font-medium">My Cart</span>
          {uniqueItemCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              {uniqueItemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}


