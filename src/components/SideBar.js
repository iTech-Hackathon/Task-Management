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
} from '@mui/material';

import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import theme from '../theme';
import ProjectLogo from '../assets/Project Logo.svg';
import DashboardIcon from '../assets/DashboardIcon.svg';

export default () => {
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
          py: '40px',
          p: '31px 119px 42px 19px',

          pr: '119px',
          py: '36px',
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
            <ListItem key={text} disablePadding>
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
          >
            <Box component='img' src={DashboardIcon} />
            DASHBOARD
          </Button>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};
