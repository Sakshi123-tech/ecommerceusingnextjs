"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Range } from "react-range";

export default function FiltersSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = useMemo(() => searchParams.get("category") ?? "all", [searchParams]);
  const priceRaw = useMemo(() => searchParams.get("price") ?? "0-1000", [searchParams]);
  const [min, max] = priceRaw.split("-").map(Number);
  const [range, setRange] = useState([min, max]);

  const apply = (next: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(next).forEach(([k, v]) => params.set(k, v));
    router.push("/?" + params.toString());
  };

  return (
    <aside className="space-y-8">
      {/* Category Filter */}
      <div>
        <h4 className="font-semibold mb-2">Category</h4>
        {["all", "electronics", "clothing", "home"].map((c) => (
          <label key={c} className="flex items-center gap-2 capitalize">
            <input
              type="radio"
              checked={c === category}
              onChange={() => apply({ category: c })}
            />
            {c}
          </label>
        ))}
      </div>

      {/* Price Slider */}
      <div>
        <h4 className="font-semibold mb-2">Price</h4>
        <Range
          step={10}
          min={0}
          max={1000}
          values={range}
          onChange={setRange}
          onFinalChange={(v) => apply({ price: `${v[0]}-${v[1]}` })}
          renderTrack={({ props, children }) => (
          <div key="track" {...props} 
          className="h-1 bg-gray-300 rounded relative"
              style={{ ...props.style }}
          > 
          
          {children}
           </div>
          )}

          renderThumb={({ props }) => {
         const { key, ...restProps } = props; 
         
           return (
          <div
        key={key} 
          {...restProps} 
          className="w-5 h-5 bg-blue-600 rounded-full border-2 border-white shadow-md"
          style={{
        ...props.style,
        zIndex: 10,
         }}
    />
  );
}}
       />
        <p className="text-sm mt-2">
          ${range[0]} – ${range[1]}
        </p>
      </div>
    </aside>
  );
}
