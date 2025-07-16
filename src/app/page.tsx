"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FiltersSidebar from "@/components/FiltersSidebar";
import products from "@/data/products.json";

export default function Page() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const category = searchParams.get("category") ?? "all";
  const [minPrice, maxPrice] = (searchParams.get("price") ?? "0-10000")
    .split("-")
    .map(Number);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "all" ||
        product.category.toLowerCase() === category.toLowerCase();

      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [searchTerm, category, minPrice, maxPrice, products]);

  return (
    <>
      <Header onSearch={setSearchTerm} />

      <main className="flex bg-blue-100 min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 p-4 border-r bg-white">
          <FiltersSidebar />
        </aside>

        {/* Product List */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 p-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
