import { create } from "zustand";
import { persist } from "zustand/middleware";
import{ Product } from "@/types";
import { CartItem } from "@/types";

type CartState = {
  items: CartItem[];
  addItem: (item: Product | CartItem) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, qty: i.qty + ("qty" in item ? item.qty : 1) }
                  : i
              ),
            };
          }
          return {
            items: [
              ...state.items,
              { ...item, qty: "qty" in item ? item.qty : 1 },
            ],
          };
        }),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      updateQty: (id, qty) =>
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "whatbytes-cart" }
  )
);
