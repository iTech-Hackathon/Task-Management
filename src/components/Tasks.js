import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Typography,
} from '@mui/material';
import ActiveTask from '../assets/Active Tasks.svg';
import theme from '../theme';

export default () => {
  // data sementara aja dulu
  const tasks = [
    {
      id: '1',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
    },
    {
      id: '2',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
    },
    {
      id: '3',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
    },
    {
      id: '4',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
    },
    {
      id: '5',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '510px',
          mb: '17px',
          boxShadow: '0 0 4px 0 rgba(0, 0, 0, .5)',
          borderRadius: '5px',
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            alignItems: 'center',
            p: '14px 0 14px 14px',
            gap: '7px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          }}
        >
          <Box
            component='img'
            src={ActiveTask}
            alt='Logo Active Task'
            width='28'
            height='28'
          />
          <Typography
            variant='h3'
            color='primary.contrastText'
            sx={{ fontSize: '18px' }}
          >
            Active Tasks
          </Typography>
        </Box>
        <List
          sx={{
            width: '100%',
            p: '9px 7px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
          }}
        >
          {tasks.map((value) => {
            return (
              <ListItem
                key={value.id}
                sx={{
                  boxShadow: '2px 2px 3px 0 rgba(0, 0, 0, .25)',
                  borderRadius: '8px',
                  p: '0 0 0 20px',
                  gap: '15px',
                }}
              >
                <Checkbox />
                <ListItemButton
                  sx={{
                    p: '8.5px 0',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant='h4'
                    sx={{ fontSize: '16px', fontWeight: 'regular', mb: '4px' }}
                  >
                    {value.judul}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ fontSize: '12px', fontWeight: 'regular' }}
                  >
                    {value.date}
                  </Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </ThemeProvider>
  );
};
