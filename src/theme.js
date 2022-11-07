import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    primary: {
      main: '#1976D2',
      light: '#1E88E5',
      dark: '#1565C0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#757575',
      light: '#BDBDBD',
      dark: '#424242',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    error: {
      main: '#D32F2F',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2E7D32',
      contrastText: '#FFFFFF',
    },
  },
});
