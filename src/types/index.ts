export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
};

export type CartItem = Product & {
  qty: number;
};
