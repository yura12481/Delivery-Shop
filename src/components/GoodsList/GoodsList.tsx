import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { useAppSelector } from '../../hooks/hook';

import GoodListItem from './GoodsListItem/GoodsListItem';

const GoodsList: React.FC = () => {
  const { id } = useParams();

  const { shops } = useAppSelector((state) => state.shop);
  const shop = shops.find((item) => item.id === id);

  if (!shop) {
    return <Typography>Shop not found</Typography>;
  }

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 500,
          fontSize: '50px',
          lineHeight: '60px',
          color: '#000',
          marginBottom: '20px',
          marginTop: '25px',
        }}
      >
        {shop.name}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {shop.items.map((item) => (
          <GoodListItem key={item.id} {...item} />
        ))}
      </Box>
    </>
  );
};

export default GoodsList;
