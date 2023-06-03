export interface CartItem {
  id: string;
  name: string;
  img: string;
  price: number;
  count: number;
}

export interface CartState {
  totalPrice: number;
  items: CartItem[];
}
