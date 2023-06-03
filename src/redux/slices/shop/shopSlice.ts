import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ShopState } from './types';

const initialState: ShopState = {
  shops: [
    {
      id: '1',
      name: 'Watch shop',
      shopLogo: `https://media.istockphoto.com/id/915281024/photo/luxury-watches-at-showcase.jpg?s=612x612&w=0&k=20&c=TZTUd6YEGpziKCECnm9ns4xrGtyIngh62D3ZdJXA4QA=`,
      items: [
        {
          id: '1',
          name: 'TISSOT',
          img: `https://www.thewatchcorp.com/images/tissot-mens-chemin-des-tourelles-powermatic-80-watch-t099-407-11-038-00-p1399-4643_medium.jpg`,
          rating: 4,
          price: 10,
        },
        {
          id: '2',
          name: 'HUGO BOSS',
          img: `https://www.thewatchcorp.com/images/hugo-boss-mens-grand-prix-watch-hb-1513713-p1368-4537_medium.jpg`,
          rating: 2,
          price: 15,
        },
        {
          id: '3',
          name: 'HUGO BOSS',
          img: `https://www.thewatchcorp.com/images/hugo-boss-mens-rafale-chronograph-watch-hb-1513392-p1372-4557_medium.jpg`,
          rating: 5,
          price: 20,
        },
      ],
    },
    {
      id: '2',
      name: 'Clothes shop',
      shopLogo: `https://media.istockphoto.com/id/1023612090/photo/interior-of-clothing-store.jpg?s=612x612&w=0&k=20&c=84NciWwU43Zyzmxph6bCVTG9WRO9rxDGUYtYnUqpTt8=`,
      items: [
        {
          id: '4',
          name: 'Navy Slim Fit Motion',
          img: `https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/A20436.jpg`,
          rating: 5,
          price: 12,
        },
        {
          id: '5',
          name: 'Bright Blue Slim Two',
          img: `https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/934315.jpg`,
          rating: 5,
          price: 18,
        },
        {
          id: '6',
          name: 'Light Grey Skinny Motion Flex',
          img: `https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/A20201.jpg`,
          rating: 5,
          price: 25,
        },
      ],
    },
  ],
  selectedShop: null,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    selectShop: (state, action: PayloadAction<string | null>) => {
      state.selectedShop = action.payload;
    },
  },
});

export const { selectShop } = shopSlice.actions;
export default shopSlice.reducer;
