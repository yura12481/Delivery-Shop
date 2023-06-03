import React from 'react';

import { Container, Box, Typography } from '@mui/material';

import { useAppSelector } from '../../hooks/hook';

import ShopItem from '../../components/ShopItem/ShopItem';

const Shop: React.FC = () => {
  const { shops } = useAppSelector((state) => state.shop);

  return (
    <Box
      sx={{
        backgroundColor: '#6d0699',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container maxWidth="lg" sx={{ paddingTop: '75px' }}>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 500,
            fontSize: '50px',
            lineHeight: '60px',
            color: '#fff',
          }}
        >
          Welcome to our site, which store do you want to view products from?
        </Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {shops.map((item) => (
            <ShopItem key={item.id} {...item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Shop;
