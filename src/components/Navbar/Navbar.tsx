import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useAppSelector } from '../../hooks/hook';

const Navbar: React.FC = () => {
  const items = useAppSelector((state) => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <AppBar position="static" sx={{ height: '75px' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: 'white' }}
        >
          Delivery App
        </Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          <Button component={Link} color="inherit" to="/">
            <Typography variant="button" style={{ textTransform: 'none' }}>
              Shops
            </Typography>
          </Button>
          <Button component={Link} color="inherit" to="/cart">
            <Badge badgeContent={totalCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
