export interface ShopItem {
  id: string;
  name: string;
  shopLogo: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    img: string;
    rating: number;
  }>;
}

export interface ShopState {
  shops: ShopItem[];
  selectedShop: string | null;
}
