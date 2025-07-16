"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import FiltersSidebar from "@/components/FiltersSidebar";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import Footer from "./Footer";

export default function HomeClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();

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
  }, [category, minPrice, maxPrice, searchTerm]);

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <main className="flex bg-blue-100 min-h-screen">
        <aside className="w-64 p-4 border-r bg-white">
          <FiltersSidebar />
        </aside>

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
