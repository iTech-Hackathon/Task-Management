import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { Logout } from '@mui/icons-material';

import TaskManagementLogoLight from '../assets/Task Management Logo - Light.png';

export default () => {
  return (
    <AppBar position='static' sx={{ py: 1 }}>
      <Toolbar variant='regular'>
        <Box sx={{ width: 1, display: 'flex', justifyContent: 'center' }}>
          <Box
            component='img'
            src={TaskManagementLogoLight}
            sx={{ height: 50 }}
          ></Box>
        </Box>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <Logout fontSize='large' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
