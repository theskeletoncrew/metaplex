import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

import { Settings } from '../Settings';

export const Header = ({ narrow }: { narrow: boolean }) => {
  return (
    <Box
      sx={{
        height: '52px',
        display: 'flex',
        bgcolor: 'action.disabledBackground',
        overflow: 'auto',
      }}
    >
      <List sx={{ border: 'none' }}>
        <ListItem sx={{ margin: '0 0 0 10px', padding: 0 }}>
          <ListItemText
            sx={{ border: 'none' }}
            primary="SkeleDAO NFT Early Access"
            primaryTypographyProps={{
              fontSize: '1.2rem',
              fontWeight: 'medium',
              letterSpacing: 0,
              border: 'none',
            }}
          />
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1, minWidth: '36px' }}></Box>
      <Settings narrow={narrow} />
    </Box>
  );
};
