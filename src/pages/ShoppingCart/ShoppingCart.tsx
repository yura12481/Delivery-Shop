import React from 'react';

import { Box, Container, Typography, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import { clearItems } from '../../redux/slices/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';

import ShoppingCartItem from '../../components/ShoppingCart/ShoppingCartItem';
import EmptyCart from '../../components/ShoppingCart/EmptyCart/EmptyCart';

const ShoppingCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useAppSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Empty trash?')) {
      dispatch(clearItems());
    }
  };

  if (!totalCount) {
    return <EmptyCart />;
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '45px',
        }}
      >
        <Box>
          <ShoppingCartIcon
            color="primary"
            sx={{ fontSize: '25px', marginRight: '10px' }}
          />
          <Typography
            component="span"
            sx={{
              fontSize: '26px',
              fontWeight: '400',
              lineHeight: '30px',
              color: '#000',
            }}
          >
            Cart
          </Typography>
        </Box>
        <Box onClick={onClickClear} sx={{ cursor: 'pointer' }}>
          <DeleteIcon
            color="primary"
            sx={{ fontSize: '25px', marginRight: '10px' }}
          />
          <Typography
            component="span"
            sx={{
              fontSize: '26px',
              fontWeight: '400',
              lineHeight: '30px',
              color: '#000',
            }}
          >
            Delete items
          </Typography>
        </Box>
      </Box>
      {items.map((item) => (
        <ShoppingCartItem key={item.id} {...item} />
      ))}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '35px',
          marginBottom: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '30px',
            color: '#000',
          }}
        >
          All clothes: {totalCount}
        </Typography>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '30px',
            color: '#000',
          }}
        >
          Order amount: ${totalPrice}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          href="/"
          color="inherit"
          sx={{
            textDecoration: 'none',
            borderRadius: '38px',
            padding: '11px 30px',
            maxWidth: '170px',
            maxHeight: '50px',
            background: '#589195',
            marginBottom: '10px',
          }}
        >
          {'<'} Go back
        </Link>
        <Link
          href="/"
          color="inherit"
          sx={{
            textDecoration: 'none',
            borderRadius: '38px',
            padding: '11px 30px',
            maxWidth: '170px',
            maxHeight: '50px',
            background: '#589195',
            marginBottom: '10px',
          }}
        >
          Pay now {'>'}
        </Link>
      </Box>
    </Container>
  );
};

export default ShoppingCart;
