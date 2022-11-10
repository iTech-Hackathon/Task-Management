import {
  ThemeProvider,
  Button,
  createTheme,
  Box,
  Typography,
} from '@mui/material';
import { GitHub } from '@mui/icons-material';
import theme from '../../theme';

export default () => {
  theme.typography.button.textTransform = 'none';
  theme.palette.primary.dark = '#1c2024';
  theme.palette.primary.main = '#24292E';

  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained' color='primary' sx={{ height: 50 }}>
        <GitHub fontSize='large' />
        <Box width={12} />
        <Typography variant='button'>Sign in with GitHub</Typography>
      </Button>
    </ThemeProvider>
  );
};
