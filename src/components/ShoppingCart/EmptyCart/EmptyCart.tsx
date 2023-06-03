import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Container, Typography, Button } from '@mui/material';

const EmptyCart: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        textAlign: 'center',
        height: '700px',
      }}
    >
      <Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: '50px',
              fontWeight: '400',
              lineHeight: '60px',
              color: '#34394C',
              marginBottom: '15px',
            }}
          >
            Cart Empty =(
          </Typography>
        </Box>
        <Box
          component="img"
          src={`https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png`}
          alt="empty basket"
          sx={{
            maxHeight: { sm: 580, xs: 300 },
            maxWidth: { sm: 580, xs: 300 },
          }}
        />
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: '18px',
              fontWeight: '300',
              lineHeight: '28px',
              color: '#707686',
              maxWidth: '519px',
              margin: '25px auto',
            }}
          >
            Most likely you haven't ordered clothes yet. To order clothes, go to
            the main page.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: '38px',
            padding: '11px 36px',
            width: '220px',
            maxHeight: '50px',
            background: '#589195',
            marginBottom: '10px',
            '&:hover': {
              background: '#589195',
            },
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Go back
          </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default EmptyCart;
