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
} from '@mui/material';

import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import theme from '../theme';
import ProjectLogo from '../assets/Project Logo.svg';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <Toolbar
        variant='regular'
        sx={{
          py: 1,
          backgroundColor: theme.palette.primary.main,
          gap: '13px',
          p: '31px 119px 42px 19px',
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
          <Box>
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleClick}>
                {open ? <ExpandLess /> : <ExpandMore />}
                <ListItemText primary={text} sx={{ pl: 2 }} />
              </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout='auto' unmountOnExit>
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
              width: '360px',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};
