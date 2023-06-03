import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import {
  minusItem,
  plusItem,
  removeItem,
} from '../../redux/slices/cart/cartSlice';
import { useAppDispatch } from '../../hooks/hook';
import { CartItem } from '../../redux/slices/cart/types';

const ShoppingCartItem: React.FC<CartItem> = ({
  id,
  name,
  img,
  price,
  count,
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <>
      {count > 0 && (
        <Box
          sx={{
            display: 'inline-block',
            maxWidth: { xs: '100%' },
          }}
        >
          <Box
            sx={{
              height: '310px',
              width: '310px',
              background: '#F7F8FC',
              borderRadius: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '70px',
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
          <Typography
            variant="h3"
            sx={{
              fontSize: '22px',
              fontWeight: '500',
              lineHeight: '60px',
              color: '#000',
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
            ${price * count}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => dispatch(plusItem(id))}
              variant="contained"
              sx={{
                borderRadius: '38px',
                maxWidth: '120px',
                maxHeight: '30px',
                background: '#589195',
                '&:hover': {
                  background: '#589195',
                },
              }}
            >
              +
            </Button>
            <Box
              sx={{
                background: '#589195',
                color: 'white',
                paddingTop: '7px',
                margin: '0 15px',
                borderRadius: '20px',
                height: '35px',
                width: '35px',
                textAlign: 'center',
              }}
            >
              {count}
            </Box>
            <Button
              onClick={() => dispatch(minusItem(id))}
              variant="contained"
              sx={{
                borderRadius: '38px',
                maxWidth: '120px',
                maxHeight: '30px',
                background: '#589195',
                '&:hover': {
                  background: '#589195',
                },
              }}
            >
              -
            </Button>
          </Box>
          <Button
            onClick={onClickRemove}
            variant="contained"
            sx={{
              marginTop: '10px',
              marginLeft: '55px',
              borderRadius: '38px',
              maxWidth: '120px',
              maxHeight: '30px',
              background: '#589195',
              '&:hover': {
                background: '#589195',
              },
            }}
          >
            Remove
          </Button>
        </Box>
      )}
    </>
  );
};

export default ShoppingCartItem;
