import { Box } from '@mui/material';
import Footer from './Footer';
import GitHubSignInButton from './GitHubSignInButton';

export default () => {
  return (
    <>
      <Box
        height='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <GitHubSignInButton />
      </Box>
      <Footer />
    </>
  );
};
