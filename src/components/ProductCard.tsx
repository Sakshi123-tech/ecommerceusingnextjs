
// "use client";

// import { useCart } from "@/store/useCart";
// import Image from "next/image";
// import Link from "next/link";
// import type { Product } from "@/types";

// export default function ProductCard({ product }: { product: Product }) {
//   const addToCart = useCart((state) => state.addItem);

//   const handleAddToCart = () => {
//     addToCart({ ...product, qty: 1 });
//     alert("Item added to cart successfully!");
//   };

//   return (
//     <div className="bg-white rounded shadow p-4 flex flex-col w-full max-w-xs mx-auto">
//       <Link href={`/product/${product.id}`}>
//         <div className="relative w-full aspect-square mb-4">
//           <Image
//             src={product.image}
//             alt={product.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 33vw"
//             className="object-contain"
//           />
//         </div>
//         <h3 className="text-base md:text-lg font-semibold text-center">{product.title}</h3>
//         <p className="text-blue-700 font-bold text-center mb-2">${product.price}</p>
//       </Link>
//       <button
//         className="mt-auto bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm w-full"
//         onClick={handleAddToCart}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }
"use client";

import { useCart } from "@/store/useCart";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addToCart({ ...product, qty: 1 });
    alert("Item added to cart successfully!");
  };

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center w-full max-w-xs mx-auto min-h-[360px]">
      <Link href={`/product/${product.id}`} className="w-full flex flex-col items-center">
        <div className="w-full flex justify-center items-center h-40 mb-4">
          <Image
            src={product.image}
            alt={product.title}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-center">{product.title}</h3>
        <p className="text-blue-700 font-bold text-center mb-2">${product.price}</p>
      </Link>
      <button
        className="mt-auto bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm w-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
