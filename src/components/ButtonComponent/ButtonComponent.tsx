import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

interface ButtonComponentProps {
  id: string;
  title: string;
  handleShopSelect: (selectedShopId: string) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  id,
  title,
  handleShopSelect,
}) => {
  return (
    <Button
      onClick={() => handleShopSelect(id)}
      variant="contained"
      sx={{
        marginTop: '15px',
        borderRadius: '38px',
        padding: '11px 36px',
        width: '250px',
        maxHeight: '50px',
        background: '#589195',
        '&:hover': {
          background: '#589195',
        },
      }}
    >
      <Link
        to={`/shop/${id}`}
        style={{
          textDecoration: 'none',
          color: 'white',
        }}
      >
        {title}
      </Link>
    </Button>
  );
};

export default ButtonComponent;
