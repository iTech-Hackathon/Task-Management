import { Close } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from '../../theme';

export default ({ setIsShow, isShow }) => {
  const handleClose = () => {
    setIsShow(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box position='relative' sx={{ width: 1, height: '1' }}>
        <Box
          sx={{
            display: isShow ? 'flex' : 'none',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              width: 1,
              gap: '20px',
              alignItems: 'center',
              pt: '22px',
              pl: '20px',
              pb: '18px',
              boxSizing: 'border-box',
            }}
          >
            <IconButton sx={{ ml: '10px' }} onClick={handleClose}>
              <Close color='primary.contrastText' />
            </IconButton>
            <Typography
              variant='h2'
              color='primary.contrastText'
              sx={{ fontSize: '28px', fontWeight: 'bold' }}
            >
              Task Details
            </Typography>
          </Box>
          <Box>
            <Typography variant='h3'>INI DETAIL</Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
