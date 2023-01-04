import { useState } from 'react';

import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
} from '@mui/material';

import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  ExpandLess,
  ExpandMore,
  Add,
} from '@mui/icons-material';
import theme from '../theme';
import ProjectLogo from '../assets/Project Logo.svg';
import DashboardIcon from '../assets/DashboardIcon.svg';
import { IS_ADMIN } from '../sementara';
import { useNavigate } from 'react-router-dom';
import AlertDialog from './AlertDialog';

export default () => {
  const navigate = useNavigate();
  const [indexClick, setIndexClick] = useState(null);

  const handleClick = (index) => {
    setIndexClick(index);
    if (indexClick === index) setIndexClick(null);
  };

  const drawer = (
    <div>
      <Toolbar
        variant='regular'
        sx={{
          py: 1,
          backgroundColor: theme.palette.primary.main,
          gap: '13px',
          pr: '119px',
          py: '36.5px',
          pl: '19px',
          '	.MuiToolbar-root': {},
        }}
      >
        <Box component='img' src={ProjectLogo} width={80} height={80} />
        <Box>
          <Typography
            variant='h2'
            color='primary.contrastText'
            sx={{
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            Calculator
          </Typography>
          <Typography
            variant='p'
            color='primary.contrastText'
            sx={{ fontSize: '14px', fontWeight: 'regular' }}
          >
            #2223-2
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {['Projects', 'Archived'].map((text, index) => (
          <Box key={text}>
            <ListItem
              key={text}
              disablePadding
              secondaryAction={text === 'Projects' && <AddProjectButton />}
            >
              <ListItemButton onClick={() => handleClick(index)}>
                {indexClick === index ? <ExpandLess /> : <ExpandMore />}
                <ListItemText primary={text} sx={{ pl: 2 }} />
              </ListItemButton>
            </ListItem>
            <Collapse in={indexClick === index} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </List>
              <List component='div' disablePadding>
                <ListItemButton sx={{ pl: 4 }} selected={true}>
                  <ListItemIcon>
                    {index % 2 !== 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box component='nav'>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              backgroundColor: 'transparent',
              width: '360px',
            },
          }}
          open
        >
          {drawer}
          <Divider />
          {IS_ADMIN && (
            <Button
              variant='contained'
              sx={{
                pt: '9px',
                pb: '8px',
                px: 0,
                mt: '15px',
                mx: '14px',
                mb: '16px',
                gap: '3px',
                fontSize: '18px',
                fontWeight: 'medium',
                height: '42px',
              }}
              onClick={() => navigate('/dashboard')}
            >
              <Box component='img' src={DashboardIcon} />
              DASHBOARD
            </Button>
          )}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

const AddProjectButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const showDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <IconButton edge='end' onClick={showDialog}>
        <Add />
      </IconButton>
      <AlertDialog
        isOpen={isDialogOpen}
        fullWidth={400}
        title='Add new project'
        onOutsideOfTheDialogClicked={closeDialog}
        actions={
          <>
            <Button onClick={closeDialog}>CANCEL</Button>
            <Button onClick={() => {}}>ADD</Button>
          </>
        }
      >
        <Box height={10} />
        <TextField fullWidth label='Project ID' variant='outlined' />
        <Box height={10} />
        <TextField fullWidth label='Title' variant='outlined' />
        <Box height={10} />
        <TextField fullWidth label='Icon URL' variant='outlined' />
        <Box height={10} />
        <TextField fullWidth label='Description URL' variant='outlined' />
      </AlertDialog>
    </>
  );
};
