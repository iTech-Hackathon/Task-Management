import { Box } from '@mui/material';
import TaskManagementLogoDark from '../../assets/Task Management Logo - Dark.png';
import GitHubSignInButton from './GitHubSignInButton';
import Footer from './Footer';

export default () => {
  return (
    <>
      <Box
        height='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <img src={TaskManagementLogoDark} width={180} />
        <Box height={40} />
        <GitHubSignInButton />
      </Box>
      <Footer />
    </>
  );
};
