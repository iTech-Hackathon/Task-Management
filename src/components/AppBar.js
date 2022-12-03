import { AppBar, Toolbar, IconButton, Box, Button } from '@mui/material';
import { Logout } from '@mui/icons-material';

import TaskManagementLogoLight from '../assets/Task Management Logo - Light.png';
import { AlertDialog } from '.';
import { useState } from 'react';

export default () => {
  return (
    <AppBar position='relative' sx={{ py: 1 }}>
      <Toolbar variant='regular'>
        <Box
          sx={{
            width: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component='img'
            src={TaskManagementLogoLight}
            sx={{ height: 50 }}
          />
        </Box>
        <SignOutButton />
      </Toolbar>
    </AppBar>
  );
};

const SignOutButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const showDialog = () => setIsDialogOpen(true);

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={showDialog}
      >
        <Logout fontSize='large' />
      </IconButton>
      <AlertDialog
        isOpen={isDialogOpen}
        title='Sign Out?'
        content='Are you sure you want sign out?'
        actions={
          <>
            <Button onClick={closeDialog}>CANCEL</Button>
            <Button onClick={() => {}}>OK</Button>
          </>
        }
        onOutsideOfTheDialogClicked={closeDialog}
      />
    </>
  );
};
