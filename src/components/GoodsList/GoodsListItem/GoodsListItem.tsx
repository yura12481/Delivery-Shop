import React from 'react';

import { Box, Typography, Rating, Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { addItem } from '../../../redux/slices/cart/cartSlice';
import { CartItem } from '../../../redux/slices/cart/types';

interface GoodListItemProps {
  id: string;
  name: string;
  price: number;
  img: string;
  rating: number;
}

const GoodsListItem: React.FC<GoodListItemProps> = ({
  id,
  name,
  price,
  img,
  rating,
}) => {
  const dispatch = useAppDispatch();

  const countItem = useAppSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = countItem ? countItem.count : 0;

  const onAddItem = () => {
    const item: CartItem = {
      id,
      name,
      price,
      img,
      count: 0,
    };
    dispatch(addItem(item));
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
          src={img}
          alt={name}
          sx={{ maxHeight: '219px', maxWidth: '200px' }}
        />
      </Box>
      <Rating
        name="read-only"
        size="small"
        value={rating}
        readOnly
        sx={{
          marginRight: '10px',
          marginTop: '15px',
        }}
      />
      <Typography
        variant="h3"
        sx={{
          fontSize: '22px',
          fontWeight: '500',
          lineHeight: '60px',
          color: '#34394C',
          maxHeight: '45px',
        }}
      >
        {name}
      </Typography>
      <Typography
        component="span"
        variant="h2"
        sx={{
          fontSize: '25px',
          fontWeight: '600',
          lineHeight: '60px',
          color: '#297176',
          maxHeight: '45px',
          marginRight: '18px',
        }}
      >
        ${price}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={onAddItem}
          variant="contained"
          sx={{
            borderRadius: '38px',
            padding: '11px 20px',
            maxWidth: '120px',
            maxHeight: '30px',
            background: '#589195',
            '&:hover': {
              background: '#589195',
            },
          }}
        >
          + ADD
        </Button>
        <Box
          component="span"
          sx={{
            background: '#589195',
            color: 'white',
            paddingTop: '7px',
            marginLeft: '8px',
            borderRadius: '20px',
            height: '35px',
            width: '35px',
            textAlign: 'center',
          }}
        >
          {addedCount && addedCount}
        </Box>
      </Box>
    </Box>
  );
};

export default GoodsListItem;
