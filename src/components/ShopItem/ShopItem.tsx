import React from 'react';

import { Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { selectShop } from '../../redux/slices/shop/shopSlice';

import ButtonComponent from '../ButtonComponent/ButtonComponent';

interface ShopItemProps {
  id: string;
  name: string;
  shopLogo: string;
}

const ShopItem: React.FC<ShopItemProps> = ({ id, name, shopLogo }) => {
  const dispatch = useAppDispatch();
  const { selectedShop } = useAppSelector((state) => state.shop);

  const handleShopSelect = (selectedShopId: string) => {
    if (selectedShopId === selectedShop) {
      dispatch(selectShop(null));
    } else {
      dispatch(selectShop(selectedShopId));
    }
  };

  return (
    <Box
      sx={{
        display: 'inline-block',
        maxWidth: { xs: '100%' },
      }}
    >
      <Box
        sx={{
          height: '330px',
          width: '255px',
          background: '#F7F8FC',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '33px',
          marginTop: '15px',
        }}
      >
        <Box
          component="img"
          src={shopLogo}
          alt={name}
          sx={{ maxHeight: '219px', maxWidth: '200px' }}
        />
      </Box>
      <ButtonComponent
        title={name}
        handleShopSelect={handleShopSelect}
        id={id}
      />
    </Box>
  );
};

export default ShopItem;
