import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { HomePage, SignInPage } from './pages';

export default () => {
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  document.body.style.fontFamily = 'Roboto';

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sign-in' element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
