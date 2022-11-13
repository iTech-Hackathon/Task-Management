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
  Toolbar,
} from '@mui/material';

import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <Toolbar variant='regular' sx={{ py: 1 }} />
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
    <Box component='nav'>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '260px',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
